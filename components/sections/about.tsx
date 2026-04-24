import Image from "next/image"
import { Award, BookOpen, Briefcase, GraduationCap } from "lucide-react"

const qualifications = [
  { icon: GraduationCap, label: "税理士", value: "東京税理士会 登録番号第12345号" },
  { icon: BookOpen, label: "中小企業診断士", value: "登録番号第67890号" },
  { icon: Briefcase, label: "経営革新等支援機関", value: "認定番号第100XX号" },
]

const career = [
  { year: "2000年", event: "大手税理士法人入所" },
  { year: "2008年", event: "シニアマネージャー就任" },
  { year: "2015年", event: "山田税理士事務所開業" },
  { year: "2020年", event: "事務所拡大・スタッフ増員" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2">ABOUT</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">事務所紹介</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            経験豊富な専門家チームが、お客様の事業と資産を守ります
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Representative info */}
          <div>
            <div className="relative mb-8">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/consultation.jpg"
                  alt="税理士とお客様の相談風景"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-card">
                  <p className="text-lg font-semibold">山田 太郎</p>
                  <p className="text-sm opacity-90">代表税理士</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4">代表挨拶</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                山田税理士事務所のウェブサイトをご覧いただき、誠にありがとうございます。
              </p>
              <p>
                私は大手税理士法人で15年間、事業承継・M&A案件を中心に数多くの経営者様をサポートしてまいりました。
                その経験を活かし、2015年に当事務所を開業いたしました。
              </p>
              <p>
                税務は経営判断に直結する重要な要素です。
                私たちは単なる申告代行ではなく、お客様の経営パートナーとして、
                長期的な視点で最適な税務戦略をご提案することを心がけております。
              </p>
              <p>
                まずはお気軽にご相談ください。お客様の課題解決に向けて、
                誠心誠意サポートさせていただきます。
              </p>
            </div>
          </div>

          {/* Qualifications and career */}
          <div className="space-y-12">
            {/* Qualifications */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Award className="size-5 text-primary" />
                資格・認定
              </h3>
              <div className="space-y-4">
                {qualifications.map((qual) => (
                  <div
                    key={qual.label}
                    className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border"
                  >
                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <qual.icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{qual.label}</p>
                      <p className="text-sm text-muted-foreground">{qual.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Briefcase className="size-5 text-primary" />
                経歴
              </h3>
              <div className="relative pl-6 border-l-2 border-primary/30">
                {career.map((item, index) => (
                  <div key={item.year} className={`relative pb-6 ${index === career.length - 1 ? "pb-0" : ""}`}>
                    <div className="absolute -left-[25px] size-4 rounded-full bg-primary border-4 border-background" />
                    <p className="text-sm font-medium text-primary mb-1">{item.year}</p>
                    <p className="text-foreground">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Office info */}
            <div className="rounded-xl overflow-hidden border border-border">
              <div className="relative h-48">
                <Image
                  src="/images/office-team.jpg"
                  alt="事務所の様子"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
                <h3 className="font-semibold text-foreground mb-4">事務所概要</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex gap-4">
                    <dt className="w-24 text-muted-foreground shrink-0">事務所名</dt>
                    <dd className="text-foreground">山田税理士事務所</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="w-24 text-muted-foreground shrink-0">所在地</dt>
                    <dd className="text-foreground">東京都千代田区丸の内1-1-1 丸の内ビル10F</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="w-24 text-muted-foreground shrink-0">設立</dt>
                    <dd className="text-foreground">2015年4月</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="w-24 text-muted-foreground shrink-0">スタッフ数</dt>
                    <dd className="text-foreground">税理士3名、スタッフ5名</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
