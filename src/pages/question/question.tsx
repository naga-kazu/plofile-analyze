import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnswerButton } from "./answer-button";
import { QuestionDescription } from "./question-description";
import { DescriptionOfList } from "./question-descriptions/description-of-list";
import { DescriptionOfEmphasis } from "./question-descriptions/description-of-emphasis";
import { QuestionTitle } from "./question-title";

export type AnswerOption = {
  key: string;
  title: string;
};

const answerVariable: AnswerOption[] = [
  { key: "1", title: "80%以上" },
  { key: "2", title: "60~80%" },
  { key: "3", title: "40~60%以下" },
  { key: "4", title: "40%未満" },
];

export default function Question() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="px-1 mt-3 space-y-8">
      <Card className="w-full max-w-md mx-auto relative">
        <CardContent className="">
          <div className="absolute -top-7 -left-5  rounded-full bg-white flex items-center justify-center p-4 border-2 border-primary">
            <span>2/5</span>
          </div>

          <div className="mt-10 space-y-6">
            <QuestionTitle
              title={
                <span>
                  あなたはファーストメッセージを送りました。返信率はどのくらいですか？
                </span>
              }
            />
            <div className="bg-gray-100 p-4 rounded-sm space-y-10">
              <QuestionDescription title="ファーストメッセージって？">
                <DescriptionOfList
                  items={[
                    "マッチして最初に送るメッセージのこと",
                    "「ターゲット層に合ったメッセージ」が送れているかわかります。",
                  ]}
                />
              </QuestionDescription>
              <QuestionDescription title="計算式">
                <DescriptionOfEmphasis emphasisTitle="返信率=返信数÷総マッチ数" />
              </QuestionDescription>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3 mx-6">
        {answerVariable.map((answer) => (
          <AnswerButton
            key={answer.key}
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
