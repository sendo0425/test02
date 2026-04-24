import { Building2, Calculator, FileText, HandCoins, Scale, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Building2,
    title: "事業承継・M&A支援",
    description: "後継者問題の解決から企業価値評価、M&Aスキームの策定まで、事業の円滑な承継をトータルサポートいたします。",
    features: ["事業承継計画の策定", "株式評価・企業価値算定", "M&Aアドバイザリー", "組織再編税制の活用"],
    highlight: true,
  },
  {
    icon: Calculator,
    title: "タックスプランニング",
    description: "法人・個人の税負担を最適化するための戦略的な税務計画をご提案いたします。適法かつ効果的な方策をご検討いただけます。",
    features: ["法人税の軽減策検討", "役員報酬の最適化", "投資税制の活用", "グループ法人税制の活用"],
    highlight: true,
  },
  {
    icon: HandCoins,
    title: "相続税対策",
    description: "ご資産の円滑な承継に向けて、相続税・贈与税の負担軽減策を長期的な視点でご提案いたします。",
    features: ["相続税試算・対策立案", "生前贈与の活用", "事業用資産の承継", "遺言・家族信託のご相談"],
    highlight: true,
  },
  {
    icon: FileText,
    title: "法人税務顧問",
    description: "月次の記帳代行から決算申告まで、法人の税務を一貫してサポート。経営判断に役立つ情報をタイムリーにご提供します。",
    features: ["記帳代行・月次決算", "法人税申告", "税務調査対応", "経営分析レポート"],
  },
  {
    icon: Scale,
    title: "税務調査対応",
    description: "税務調査の事前準備から当日の立会い、修正申告まで、経験豊富な税理士が適切に対応いたします。",
    features: ["事前準備サポート", "調査当日の立会い", "交渉・折衝", "再発防止策のご提案"],
  },
  {
    icon: Users,
    title: "創業・起業支援",
    description: "法人設立の手続きから創業融資のサポート、初期の会計体制構築まで、起業家の皆様を応援いたします。",
    features: ["法人設立手続き", "創業融資申請サポート", "会計システム導入", "事業計画策定支援"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2">SERVICES</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">サービス内容</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            経営者様のニーズに合わせた専門的な税務サービスをご提供いたします。
            お客様の状況を丁寧にヒアリングし、最適なソリューションをご提案します。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                service.highlight ? "border-primary/30 bg-gradient-to-br from-card to-primary/5" : ""
              }`}
            >
              {service.highlight && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-bl-lg font-medium">
                  注力分野
                </div>
              )}
              <CardHeader>
                <div className={`size-12 rounded-xl flex items-center justify-center mb-4 ${
                  service.highlight ? "bg-primary text-primary-foreground" : "bg-muted text-primary"
                }`}>
                  <service.icon className="size-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="size-1.5 rounded-full bg-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          ※ 各サービスの具体的な内容・料金については、お客様の状況に応じて個別にご相談させていただきます。
        </p>
      </div>
    </section>
  )
}
