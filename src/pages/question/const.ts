import { AnswerOption, QuestionDescription } from "./question";

const questions1: QuestionDescription[] = [
  {
    title: "基準値",
    content: {
      type: "table",
      item: {
        header: { title: "アプリ", detail: "マッチ数" },
        rows: [
          { title: "With", detail: "40" },
          { title: "Pairs", detail: "25" },
          { title: "タップル", detail: "15" },
          { title: "Tinder", detail: "5" },
        ],
        options:["Withの登録後24時間のマッチ数は除く","Tinderの男性ユーザーからのマッチ数は除く"]
      },
    },
  },
];

const answerOptions1: AnswerOption[] = [
  { title: "基準値の2倍以上" },
  { title: "基準値と同程度" },
  { title: "基準値よりやや少ない" },
  { title: "基準値の半分以下" },
];

const questions2: QuestionDescription[] = [
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

const answerOptions2: AnswerOption[] = [
  { title: "80%以上" },
  { title: "60~80%" },
  { title: "40~60%" },
  { title: "40%未満" },
];

const questions3: QuestionDescription[] = [
  {
    title: "バンゲって？",
    content: {
      type: "list",
      item: {
        items: [
          "マッチングアプリ以外の連絡先（LINE・Instagram等）を交換すること",
          "マッチした相手があなたにどのクr対価値を感じている？がわかります。",
        ],
      },
    },
  },
  {
    title: "これが低い人は？",
    content: {
      type: "list",
      item: { 
        items: [
          "テンプレメッセージを使っている",
          "メッセージに違和感がある可能性あり！",
        ],
       },
    },
  },
];

const answerOptions3: AnswerOption[] = [
  { title: "60%以上" },
  { title: "40~60%" },
  { title: "20~40%" },
  { title: "20%未満" },
];

const questions4: QuestionDescription[] = [
  {
    title: "ドタキャンされやすい人は？",
    content: {
      type: "list",
      item: {
        items: [
          "メッセージや電話での関係構築が足りない",
          "アポへの期待値を高められていない可能性あり！",
        ],
      },
    },
  },
  {
    title: "計算式",
    content: {
      type: "emphasis",
      item: { emphasisTitle: "ドタキャン率=ドタキャン数÷アポ決定数" },
    },
  },
];

const answerOptions4: AnswerOption[] = [
  { title: "80%以上" },
  { title: "50~80%" },
  { title: "20~50%" },
  { title: "20%未満" },
];

const questions5: QuestionDescription[] = [
  {
    title: "アポ勝率って？",
    content: {
      type: "list",
      item: {
        items: [
          "初めてあった人があなたに価値を感じてくれたかを表す指標",
          "これが低いと「写真の盛りすぎ」「飲んばがない」「トーク力が低い」可能性あり！",
        ],
      },
    },
  },
  {
    title: "計算式",
    content: {
      type: "emphasis",
      item: { emphasisTitle: "アポ勝率=ワンナイト数 or 二回目デート数÷アポ数" },
    },
  },
];

const answerOptions5: AnswerOption[] = [
  { title: "80%以上" },
  { title: "60~80%" },
  { title: "40~60%" },
  { title: "40%未満" },
];

export const questions=[
  {
    title: "1日当たりの平均マッチ数は基準値よりも多いですか？",
    questions: questions1,
    answerOptions: answerOptions1,
  },
  {
    title: "あなたはファーストメッセージを送りました。返信率はどのくらいですか？",
    questions: questions2,
    answerOptions: answerOptions2,
  },
  {
    title: "バンゲ率はどのくらいですか？",
    questions: questions3,
    answerOptions: answerOptions3,
  },
  {
    title: "アポの日程も決まり、いざ当日。相手からいけない連絡が...\nこのようなドタキャン率はどのくらいですか？",
    questions: questions4,
    answerOptions: answerOptions4,
  },
  {
    title: "アポの勝率はどのくらいですか？",
    questions: questions5,
    answerOptions: answerOptions5,
  },
]
