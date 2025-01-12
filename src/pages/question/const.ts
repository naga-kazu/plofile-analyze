import { AnswerOption, Question } from "./question";

const questions: Question[] = [
  {
    title: "ファーストメッセージって？",
    content: {
      type: "list",
      item: {
        items: [
          "マッチして最初に送るメッセージのこと",
          "「ターゲット層に合ったメッセージ」が送れているかわかります。",
        ],
      },
    },
  },
  {
    title: "計算式",
    content: {
      type: "emphasis",
      item: { emphasisTitle: "返信率=返信数÷総マッチ数" },
    },
  },
];

const questions0: Question[] = [
  {
    title: "ファーストメッセージって？",
    content: {
      type: "table",
      item: {
        rows: [
          { title: "Title 1", detail: "Detail 1" },
          { title: "Title 2", detail: "Detail 2" },
        ],
      },
    },
  },
];

const answerOptions: AnswerOption[] = [
  { title: "80%以上" },
  { title: "60~80%" },
  { title: "40~60%以下" },
  { title: "40%未満" },
];

export const questionsValues0 = {
  step: 1,
  totalSteps: 5,
  title: "あなたはファーストメッセージを送りました。返信率はどのくらいですか？",
  questions: questions0,
  answerOptions: answerOptions,
};

export const questionsValues = {
  step: 2,
  totalSteps: 5,
  title: "あなたはファーストメッセージを送りました。返信率はどのくらいですか？",
  questions: questions,
  answerOptions: answerOptions,
};
