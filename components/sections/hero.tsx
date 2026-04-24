import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  { icon: Shield, text: "税理士法に基づく守秘義務" },
  { icon: TrendingUp, text: "事業承継・M&A実績多数" },
  { icon: Users, text: "経営者に寄り添うサポート" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-meeting.jpg"
          alt="税理士との打ち合わせ風景"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
      </div>
      
      {/* Geometric accent */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              初回相談無料
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              企業価値を最大化する
              <span className="text-primary block mt-2">税務戦略パートナー</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              事業承継・M&A、タックスプランニング、相続税対策。
              経営者様の資産形成と事業の発展を、豊富な経験と専門知識でサポートいたします。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" asChild className="group">
                <Link href="#contact">
                  無料相談を予約する
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#services">サービス詳細を見る</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6">
              {highlights.map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <item.icon className="size-5 text-primary" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats card */}
          <div className="relative">
            <div className="bg-card rounded-2xl shadow-xl border border-border p-8 lg:p-10">
              <h2 className="text-lg font-semibold text-foreground mb-8">実績数値</h2>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="text-4xl lg:text-5xl font-bold text-primary mb-2">500+</p>
                  <p className="text-sm text-muted-foreground">顧問先企業数</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl lg:text-5xl font-bold text-primary mb-2">20年</p>
                  <p className="text-sm text-muted-foreground">業務経験</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl lg:text-5xl font-bold text-primary mb-2">98%</p>
                  <p className="text-sm text-muted-foreground">顧客満足度</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl lg:text-5xl font-bold text-primary mb-2">50件</p>
                  <p className="text-sm text-muted-foreground">年間M&A支援実績</p>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-8 pt-6 border-t border-border">
                ※ 上記数値は当事務所の過去実績に基づくものであり、将来の成果を保証するものではありません。
              </p>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              東京税理士会所属
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
