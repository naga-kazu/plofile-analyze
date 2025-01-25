import {ScrollRestoration, createBrowserRouter, Outlet, RouterProvider } from "react-router";
import FixedHeader from "./components/header";
import { Question } from "./pages/question/question";
import { questions } from "./pages/question/const";
import Top from "./pages/top/top";
import Result from "./pages/result/result";

const BASE_URL = "/profile-analyze";

const router = createBrowserRouter([
  {
    path: BASE_URL,
    element: (
      <>
        <ScrollRestoration />
        <FixedHeader />
        <div className="w-full max-w-md min-w-80 mx-auto mt-3 px-4 pt-20 pb-10 bg-background">
          <Outlet />
        </div>
      </>
    ),
    children: [
      {
        path: BASE_URL,
        element: <Top nextPath={`${BASE_URL}/question/1`} />,
      },
      ...questions.map((question, index) => {
        const nextPath =
          index === questions.length - 1
            ? `${BASE_URL}/result`
            : `${BASE_URL}/question/${index + 2}`;
            
        const url = "https://hooks.slack.com/services/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";
        const handleNext = () => {
          if(nextPath === `${BASE_URL}/result`) {
            fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: new URLSearchParams({
                payload: JSON.stringify({
                  text: `診断しました。\nUser: ${navigator.userAgent}`, // Slack Webhookは"text"キーでメッセージを受け取る
                }),
              }).toString(),
            })
          }
        };
        return {
          path: `${BASE_URL}/question/${index + 1}`,
          element: (
            <Question
              {...question}
              step={index + 1}
              totalSteps={questions.length}
              handleNext={handleNext}
              nextPath={nextPath}
            />
          ),
        };
      }),
      {
        path: `${BASE_URL}/result`,
        element: <Result />,
      },
    ],
  },
]);

// QuizPage コンポーネント
export default function QuizPage() {
  return <RouterProvider router={router} />;
}
