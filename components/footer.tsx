import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const services = [
  { name: "事業承継・M&A支援", href: "#services" },
  { name: "タックスプランニング", href: "#services" },
  { name: "相続税対策", href: "#services" },
  { name: "法人税務顧問", href: "#services" },
  { name: "確定申告", href: "#services" },
]

const quickLinks = [
  { name: "事務所紹介", href: "#about" },
  { name: "料金案内", href: "#pricing" },
  { name: "採用情報", href: "#careers" },
  { name: "お問い合わせ", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Office info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">Y</span>
              </div>
              <div>
                <p className="font-semibold text-lg">山田税理士事務所</p>
                <p className="text-xs text-background/70">YAMADA TAX ACCOUNTANT OFFICE</p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed mb-6">
              事業承継・M&A支援、タックスプランニング、相続税対策を専門とする税理士事務所です。
              経営者様の大切な資産と事業の未来を、税務の専門家としてサポートいたします。
            </p>
            <div className="space-y-3 text-sm text-background/80">
              <div className="flex items-start gap-3">
                <MapPin className="size-5 shrink-0 mt-0.5" />
                <span>〒100-0001 東京都千代田区丸の内1-1-1 丸の内ビル10F</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="size-5" />
                <a href="tel:03-1234-5678" className="hover:text-background transition-colors">03-1234-5678</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-5" />
                <a href="mailto:info@yamada-tax.jp" className="hover:text-background transition-colors">info@yamada-tax.jp</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="size-5" />
                <span>平日 9:00〜18:00（土日祝休業）</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">サービス</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold mb-4">クイックリンク</h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Compliance notice */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <p className="text-xs text-background/60 leading-relaxed mb-4">
            本ウェブサイトは、山田太郎税理士事務所（東京税理士会所属 登録番号：第12345号）が運営しています。
            掲載されている情報は一般的な税務・会計に関する情報提供を目的としており、個別の事案に対する助言ではありません。
            具体的な税務判断については、個別にご相談ください。
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-background/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            &copy; {new Date().getFullYear()} 山田税理士事務所 All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-background/60">
            <Link href="/privacy" className="hover:text-background transition-colors">プライバシーポリシー</Link>
            <Link href="/terms" className="hover:text-background transition-colors">利用規約</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
