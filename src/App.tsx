import { BrowserRouter, Routes, Route } from "react-router";
import FixedHeader from "./components/header";
import Question from "./pages/question/question";
import { Empty } from "./pages/empty";

export default function QuizPage() {
  return (
    <BrowserRouter>
      <FixedHeader />
      <div className="min-h-screen bg-background p-8 flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Question />} />
          <Route path="/empty" element={<Empty />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
