import { BrowserRouter, Routes, Route } from "react-router";
import FixedHeader from "./components/header";
import { Question } from "./pages/question/question";
import { questions } from "./pages/question/const";
import Top from "./pages/top/top";
import Result from "./pages/result/result";

const BASE_URL = "/plofile-analyze";

export default function QuizPage() {
  return (
    <BrowserRouter>
      <FixedHeader />
      <div className="w-full max-w-md min-w-80 mx-auto mt-3 px-4 pt-20 pb-10 bg-background">
        <Routes>
          <Route path={BASE_URL} element={<Top nextPath={`${BASE_URL}/question/1`}/>} />
        {questions.map((question, index) => {
          const nextPath = index === questions.length - 1 ? `${BASE_URL}/result` : `${BASE_URL}/question/${index + 2}`;
          return (
            <Route
              key={index}
              path={`${BASE_URL}/question/${index+1}`}
              element={<Question {...question} step={index + 1} totalSteps={questions.length} nextPath={nextPath} />}
            />
          );
        })}
        <Route path={`${BASE_URL}/result`} element={<Result/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
