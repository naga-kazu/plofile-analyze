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

export type AnswerOption = {
  title: string;
};

export type QuestionContent =
  | { type: "list"; item: ListProps }
  | { type: "emphasis"; item: EmphasisProps }
  | { type: "table"; item: TableProps };

export type Question = {
  title: string;
  content: QuestionContent;
};

export type Props = {
  step: number;
  totalSteps: number;
  title: string;
  questions: Question[];
  answerOptions: AnswerOption[];
};

export function Question({
  step,
  totalSteps,
  title,
  questions,
  answerOptions,
}: Props) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="px-1 mt-3 space-y-8">
      <Card className="w-full max-w-md mx-auto relative">
        <CardContent className="">
          <div className="absolute -top-7 -left-5 rounded-full bg-white flex items-center justify-center p-4 border-2 border-primary">
            <span>{`${step}/${totalSteps}`}</span>
          </div>

          <div className="mt-10 space-y-7">
            <QuestionTitle title={<span>{title}</span>} />
            <div className="bg-gray-100 p-4 rounded-sm space-y-11">
              {questions.map((question, index) => {
                return renderQuestionDescription(question, index);
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
        <Button className="w-full py-8 text-lg bg-gray-700">次へ</Button>
      </div>
    </div>
  );
}

const renderQuestionDescription = (question: Question, index: number) => {
  const content = question.content;
  const renderContent = () => {
    switch (content.type) {
      case "list":
        return <DescriptionOfList items={content.item.items} />;
      case "emphasis":
        return (
          <DescriptionOfEmphasis emphasisTitle={content.item.emphasisTitle} />
        );
      case "table":
        return <DescriptionOfTable />;
      default:
        return null;
    }
  };

  return (
    <QuestionDescription key={index} title={question.title}>
      {renderContent()}
    </QuestionDescription>
  );
};
