"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts"
import { ChartContainer } from "@/components/ui/chart"
import { useNavigate } from "react-router"
import { FaClipboardList } from "react-icons/fa";

const data = [
  {
    metric: "マッチ数",
    value: 65,
  },
  {
    metric: "バンゲ率",
    value: 50,
  },
  {
    metric: "1stメッセ返信率",
    value: 70,
  },
  {
    metric: "ドタキャン率",
    value: 50,
  },
  {
    metric: "アポ勝率",
    value: 60,
  },
]

type Props={
    nextPath: string;
}

export default function Top({nextPath}:Props) {
    const navigate = useNavigate();
    const handleNext = () => {
        navigate(nextPath);
    };
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="space-y-4">
          <div className="bg-primary rounded-full p-2 mx-10 text-center">
            <div className="text-white text-xl font-bold">LINE限定コンテンツ</div>
          </div>
          <div className="text-primary text-xl text-center">CHECK MATCHING SCORE</div>
          <CardTitle className="text-5xl text-center inline-flex justify-center items-center">
            <span>
            アプリ攻略<br/>診断
            <FaClipboardList color="rgb(184, 204, 51)" className="mb-3 inline-block"/>
            </span>
          </CardTitle>
          <CardDescription className="text-center">
            <p className="text-2xl font-bold underline mb-2">
            あなたの課題がすぐわかる
            </p>
            <p >
            どこでつまづいているのか
            <br/>
            アプリ攻略での課題を見つけましょう
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center p-0">
          <ChartContainer className="w-full" config={{}}>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={data} >
                <PolarGrid stroke="#E5E7EB" />
                <PolarAngleAxis
                  dataKey="metric"
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />
                <Radar
                  name="メトリクス"
                  dataKey="value"
                  stroke="#F8B97C"
                  fill="#F8B97C"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <button className="block w-full bg-accent text-accent-foreground font-bold p-4 rounded-lg" onClick={handleNext}>
        <p className="text-xl">-Let's Start-</p>
        <p className="text-2xl">診断を開始する</p>
      </button>
    </div>
  )
}

