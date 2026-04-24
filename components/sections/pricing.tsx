import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "ベーシック",
    description: "小規模事業者様向け",
    price: "30,000",
    unit: "円/月〜",
    features: [
      "月次記帳代行",
      "決算申告（年1回）",
      "年末調整対応",
      "税務相談（月1回まで）",
      "メール・電話サポート",
    ],
    note: "年商3,000万円未満の法人・個人事業主様",
  },
  {
    name: "スタンダード",
    description: "中小企業様向け",
    price: "80,000",
    unit: "円/月〜",
    features: [
      "月次記帳代行",
      "月次決算・試算表作成",
      "決算申告（年1回）",
      "年末調整・法定調書対応",
      "税務相談（随時）",
      "経営分析レポート",
      "節税対策のご提案",
    ],
    note: "年商3,000万円〜3億円の法人様",
    popular: true,
  },
  {
    name: "プレミアム",
    description: "事業承継・M&Aをお考えの方",
    price: "150,000",
    unit: "円/月〜",
    features: [
      "スタンダードの全サービス",
      "事業承継計画策定",
      "株式評価・企業価値算定",
      "タックスプランニング",
      "相続税対策のご提案",
      "経営会議への参加",
      "専任担当者によるサポート",
    ],
    note: "年商3億円以上、または事業承継をお考えの法人様",
  },
]

const additionalServices = [
  { name: "相続税申告", price: "30万円〜", note: "遺産総額・相続人数により変動" },
  { name: "M&Aアドバイザリー", price: "成功報酬制", note: "詳細は個別にご相談" },
  { name: "税務調査対応", price: "10万円〜", note: "調査期間・内容により変動" },
  { name: "会社設立", price: "5万円〜", note: "登録免許税等は別途" },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2">PRICING</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">料金案内</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            お客様の事業規模やニーズに合わせた料金プランをご用意しております。
            詳細な料金は、ヒアリング後にお見積りいたします。
          </p>
        </div>

        {/* Main plans */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.popular
                  ? "border-primary shadow-lg scale-105 bg-gradient-to-br from-card to-primary/5"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-4 py-1 rounded-full font-medium">
                  人気プラン
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.unit}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="size-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground mb-6 p-3 bg-muted/50 rounded-lg">
                  {plan.note}
                </p>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href="#contact">詳細を相談する</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional services */}
        <div className="bg-card rounded-2xl border border-border p-8">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">その他のサービス</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service) => (
              <div key={service.name} className="text-center p-4 rounded-xl bg-muted/30">
                <p className="font-medium text-foreground mb-1">{service.name}</p>
                <p className="text-lg font-semibold text-primary mb-2">{service.price}</p>
                <p className="text-xs text-muted-foreground">{service.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-6 rounded-xl bg-muted/50 border border-border">
          <h4 className="font-medium text-foreground mb-3">料金に関するご注意</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>・ 上記料金は税抜価格です。別途消費税がかかります。</li>
            <li>・ 記載の料金は目安であり、お客様の事業内容・規模・取引量等により変動いたします。</li>
            <li>・ 正式な料金は、初回面談後にお見積書にてご提示いたします。</li>
            <li>・ ご契約前に必ず料金体系をご説明いたしますので、ご不明点はお気軽にお問い合わせください。</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
