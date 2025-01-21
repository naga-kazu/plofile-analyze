import {ScrollRestoration, createBrowserRouter, Outlet, RouterProvider } from "react-router";
import FixedHeader from "./components/header";
import { Question } from "./pages/question/question";
import { questions } from "./pages/question/const";
import Top from "./pages/top/top";
import Result from "./pages/result/result";

const BASE_URL = "/plofile-analyze";

const router = createBrowserRouter([
  {
    path: BASE_URL,
    element: (
      <>
        <ScrollRestoration />
        <FixedHeader />
        <div className="w-full max-w-md min-w-80 mx-auto mt-3 px-4 pt-20 pb-10 bg-background">
          <Outlet /> {/* 子ルートがここに表示される */}
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
        return {
          path: `${BASE_URL}/question/${index + 1}`,
          element: (
            <Question
              {...question}
              step={index + 1}
              totalSteps={questions.length}
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
