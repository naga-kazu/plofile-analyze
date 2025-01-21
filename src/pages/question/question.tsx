import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnswerButton } from "./answer-button";
import { QuestionDescription } from "./question-description";
import { DescriptionOfList } from "./question-descriptions/description-of-list";
import { DescriptionOfEmphasis } from "./question-descriptions/description-of-emphasis";
import { QuestionTitle } from "./question-title";
import { Props as EmphasisProps } from "./question-descriptions/description-of-emphasis";
import { Props as ListProps } from "./question-descriptions/description-of-list";
import {
  DescriptionOfTable,
  Props as TableProps,
} from "./question-descriptions/description-of-table";
import { useNavigate } from "react-router";

export type AnswerOption = {
  title: string;
};

export type QuestionContent =
  | { type: "list"; item: ListProps }
  | { type: "emphasis"; item: EmphasisProps }
  | { type: "table"; item: TableProps };

export type QuestionDescription = {
  title: string;
  content: QuestionContent;
};

export type Props = {
  step: number;
  totalSteps: number;
  title: string;
  questions: QuestionDescription[];
  answerOptions: AnswerOption[];
  nextPath: string;
};

export function Question({
  step,
  totalSteps,
  title,
  questions,
  answerOptions,
  nextPath
}: Props) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const navigate = useNavigate();
  const handleNext = () => {
    navigate(nextPath); 
  };

  return (
    <div className="px-1 space-y-8">
      <Card className="relative">
        <CardContent className="">
          <div className="absolute -top-7 -left-5 rounded-full bg-white flex items-center justify-center p-4 border-2 border-primary">
            <span>{`${step}/${totalSteps}`}</span>
          </div>

          <div className="mt-10 space-y-7">
            <QuestionTitle title={<span>{title}</span>} />
            <div className="bg-gray-100 p-4 rounded-sm space-y-11">
              {questions.map((question) => {
                return renderQuestionDescription(question);
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3 mx-6">
        {answerOptions.map((answer, index) => (
          <AnswerButton
            key={index}
            title={answer.title}
            isSelected={selectedOption === answer.title}
            setSelectedOption={setSelectedOption}
          />
        ))}
      </div>

      <div className="mx-4">
        <Button className="w-full py-8 text-lg bg-gray-700" onClick={handleNext}>次へ</Button>
      </div>
    </div>
  );
}

const renderQuestionDescription = (question: QuestionDescription) => {
  const content = question.content;
  const renderContent = () => {
    switch (content.type) {
      case "list":
        return <DescriptionOfList {...content.item} />;
      case "emphasis":
        return (
          <DescriptionOfEmphasis {...content.item} />
        );
      case "table":
        return <DescriptionOfTable {...content.item} />;
      default:
        return null;
    }
  };

  return (
    <QuestionDescription key={question.title} title={question.title}>
      {renderContent()}
    </QuestionDescription>
  );
};
