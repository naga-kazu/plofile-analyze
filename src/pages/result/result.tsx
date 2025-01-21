import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts"
import { ChartContainer } from "@/components/ui/chart"
import { ResultCard } from "./result-card"
import { Button } from "@/components/ui/button"

const radarData = [
  {
    metric: "マッチ数",
    value: 65,
  },
  {
    metric: "バンゲ率",
    value: 70,
  },
  {
    metric: "1stメッセ返信率",
    value: 50,
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

const barData = [
  { name: "熟練度", value: 70 }
]

export default function Result() {
  return (
    <div className="w-full">
      <div className="my-4 items-center justify-center flex bg-secondary text-secondary-foreground p-4 mx-20 rounded-full border-primary border-2">
        <h1 className="text-xl font-bold ">診断結果</h1>
      </div>
      <ResultCard title="あなたの運用状態">
          <ChartContainer className=""config={{}}>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#E5E7EB" />
                <PolarAngleAxis
                  dataKey="metric"
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                  tickCount={5}
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
          </ResultCard>

          <ResultCard title="あなたの運用偏差値">
         <ChartContainer className="h-[100px] w-full"config={{}} >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={barData}
                layout="vertical"
                margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
              >
                <XAxis type="number" domain={[0, 100]} />
                <YAxis type="category" dataKey="name" hide />
                <Bar
                  dataKey="value"
                  fill="#F8B97C"
                  barSize={20}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>

          <div className="space-y-4 text-sm">
            <div className="font-semibold">【熟練度】</div>
            <p className="">
            「マッチ数」「1stメッセ返信率」「バンゲ率」「ドタキャン率」「アポ勝率」を総合的に評価し、今のあなたがどれだけマッチングアプリ運用ノウハウをインプットできているかを評価します。
            </p>
          </div>
          
          </ResultCard>
      
          <ResultCard title="あなたの運用レベル">
          <div className="space-y-2">
            <p className="">
            あなたのアカウントは、全体のインスタアカウントの中で97%以内に入っています。各指標が基準値を大きく下回り、アカウントの状態は危険だと考えられます。リーチ数などの指標を追い求めるのではなく、まずはアカウントのコンセプトから見直す必要があります。そのために、『便益性（誰のどんな困りごとを解決するアカウントなのか）』『独自性（他のアカウントとは何がどう違うのか）』を徹底的に考えてください。この2つが揃っていないアカウントは今後絶対に伸びません。実際にアカウントコンセプトをどうやって考えていくのかや、フォロワーを着実に増やしていくためのロードマップなど、INEで参考ノウハウをお送りするので、プロのノウハウを学んでみてください。
            </p>
          </div>
          </ResultCard>
          <div className="m-4">
          <Button size="xl" className="w-full bg-accent text-lg rounded-full text-secondary">課題解決のためのコンテンツを見る</Button>
          </div>
    </div>
  )
}

