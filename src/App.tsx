import { BrowserRouter, Routes, Route } from "react-router";
import FixedHeader from "./components/header";
import { Empty } from "./pages/empty";
import { AnswerOption, Question } from "./pages/question/question";
import { questionsValues, questionsValues0 } from "./pages/question/const";

const BASE_URL = "/plofile-analyze";

export default function QuizPage() {
  return (
    <BrowserRouter>
      <FixedHeader />
      <div className="px-4 pt-24 pb-10 bg-background flex items-center justify-center">
        <Routes>
          <Route
            path={`${BASE_URL}/`}
            element={<Question {...questionsValues} />}
          />
          <Route
            path={`${BASE_URL}/empty`}
            element={<Question {...questionsValues0} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
