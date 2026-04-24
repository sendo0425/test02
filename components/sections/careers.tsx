import Link from "next/link"
import { Building, Clock, GraduationCap, Heart, MapPin, Sparkles, Users, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const positions = [
  {
    title: "税理士",
    type: "正社員",
    description: "事業承継・M&A案件を中心に、クライアント企業の税務全般をお任せします。",
    requirements: [
      "税理士資格保有者",
      "実務経験3年以上",
      "事業承継・M&A業務に興味のある方",
    ],
    salary: "年収600万円〜1,200万円",
    benefits: ["経験・能力を考慮の上決定", "決算賞与あり"],
  },
  {
    title: "税理士科目合格者",
    type: "正社員",
    description: "経験豊富な税理士のもとで実務経験を積みながら、資格取得を目指せます。",
    requirements: [
      "税理士試験科目合格者（2科目以上）",
      "会計事務所経験1年以上",
      "税理士資格取得を目指している方",
    ],
    salary: "年収400万円〜600万円",
    benefits: ["試験休暇制度あり", "資格取得支援制度あり"],
  },
  {
    title: "会計スタッフ",
    type: "正社員・パート",
    description: "記帳代行、データ入力、資料作成などの会計業務全般をお任せします。",
    requirements: [
      "日商簿記2級以上",
      "会計ソフト使用経験者歓迎",
      "未経験者可（意欲重視）",
    ],
    salary: "月給23万円〜35万円",
    benefits: ["パート：時給1,300円〜", "経験により優遇"],
  },
]

const benefits = [
  { icon: Wallet, title: "給与・賞与", description: "業界水準以上の給与体系、決算賞与制度" },
  { icon: Clock, title: "勤務時間", description: "フレックス制度、残業月平均20時間以下" },
  { icon: GraduationCap, title: "資格支援", description: "試験休暇制度、受験費用補助" },
  { icon: Heart, title: "福利厚生", description: "社会保険完備、退職金制度、健康診断" },
  { icon: Building, title: "勤務環境", description: "駅直結オフィス、リモートワーク相談可" },
  { icon: Users, title: "チーム", description: "少数精鋭、風通しの良い職場環境" },
]

export function CareersSection() {
  return (
    <section id="careers" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2">CAREERS</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">採用情報</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            私たちと一緒に、経営者様の課題解決に取り組みませんか。
            専門性を高めたい方、キャリアアップを目指す方を歓迎します。
          </p>
        </div>

        {/* Message */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="size-8 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              専門性を磨き、経営者のパートナーへ
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              当事務所では、事業承継・M&A・相続といった高度な税務案件に携わる機会が豊富にあります。
              単なる申告業務にとどまらず、経営者様の意思決定をサポートする仕事です。
              税務の専門家として成長したい方、より深い経験を積みたい方のご応募をお待ちしております。
            </p>
          </div>
        </div>

        {/* Positions */}
        <h3 className="text-xl font-semibold text-foreground mb-6">募集職種</h3>
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {positions.map((position) => (
            <Card key={position.title} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {position.type}
                  </span>
                </div>
                <CardTitle className="text-xl">{position.title}</CardTitle>
                <CardDescription>{position.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground mb-2">応募要件</p>
                  <ul className="space-y-1.5 mb-4">
                    {position.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="size-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="p-3 bg-muted/50 rounded-lg mb-4">
                    <p className="text-sm font-medium text-foreground">{position.salary}</p>
                    {position.benefits.map((benefit) => (
                      <p key={benefit} className="text-xs text-muted-foreground">{benefit}</p>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full" asChild>
                  <Link href="#contact">詳細を問い合わせる</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <h3 className="text-xl font-semibold text-foreground mb-6">待遇・福利厚生</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
              <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <benefit.icon className="size-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">{benefit.title}</p>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Office info */}
        <div className="bg-card rounded-2xl border border-border p-8">
          <h3 className="text-lg font-semibold text-foreground mb-6">勤務地・アクセス</h3>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="size-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">東京都千代田区丸の内1-1-1 丸の内ビル10F</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    JR東京駅 丸の内南口より徒歩3分<br />
                    地下鉄丸ノ内線 東京駅直結
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="size-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">勤務時間</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    9:00〜18:00（フレックスタイム制 コアタイム10:00〜15:00）<br />
                    完全週休2日制（土日祝）
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-80 h-48 bg-muted rounded-xl flex items-center justify-center">
              <p className="text-sm text-muted-foreground">地図を表示</p>
            </div>
          </div>
        </div>

        {/* Note */}
        <p className="text-sm text-muted-foreground text-center mt-8">
          ※ 募集状況は変更になる場合がございます。詳細はお問い合わせください。
        </p>
      </div>
    </section>
  )
}
