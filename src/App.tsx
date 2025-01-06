'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function QuizPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[#F4B460] p-4 flex items-center justify-center">
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="p-6">
          {/* ページ番号 */}
          <div className="absolute left-8 top-8 w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <span className="text-lg font-medium">2/5</span>
          </div>

          <div className="space-y-8 mt-12">
            {/* 質問 */}
            <h2 className="text-xl font-bold text-center">
              フィード/リールの保存率は<br />
              どのくらいですか？
            </h2>

            {/* 説明 */}
            <div className="bg-gray-100 p-4 rounded-lg space-y-4">
              <h3 className="font-bold bg-gray-700 text-white px-3 py-1 inline-block rounded">
                保存率って？
              </h3>
              <ul className="space-y-2 pl-4">
                <li className="flex items-start gap-2">
                  <span className="block w-2 h-2 mt-2 bg-[#F4B460] rounded-sm" />
                  <span>投稿を見てくれた人がどのくらい保存してくれたかを表す指標</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="block w-2 h-2 mt-2 bg-[#F4B460] rounded-sm" />
                  <span>「投稿の質」を表します</span>
                </li>
              </ul>
              <div>
                <h3 className="font-bold bg-gray-700 text-white px-3 py-1 inline-block rounded">
                  計算式
                </h3>
                <p className="mt-2 pl-4">
                  保存率＝保存数÷リーチ数
                </p>
              </div>
            </div>

            {/* 選択肢 */}
            <div className="space-y-3">
              <Button
                variant={selectedOption === "4up" ? "default" : "outline"}
                className="w-full py-6 text-lg"
                onClick={() => setSelectedOption("4up")}
              >
                4%以上
              </Button>
              <Button
                variant={selectedOption === "2to4" ? "default" : "outline"}
                className="w-full py-6 text-lg"
                onClick={() => setSelectedOption("2to4")}
              >
                2〜4%
              </Button>
              <Button
                variant={selectedOption === "1down" ? "default" : "outline"}
                className="w-full py-6 text-lg bg-[#4CD7B0] hover:bg-[#4CD7B0]/90"
                onClick={() => setSelectedOption("1down")}
              >
                1%以下
              </Button>
            </div>

            {/* ナビゲーション */}
            <Button 
              className="w-full py-6 text-lg bg-gray-700 hover:bg-gray-600"
            >
              次へ
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

