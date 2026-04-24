import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "プライバシーポリシー | 山田税理士事務所",
  description: "山田税理士事務所のプライバシーポリシー（個人情報保護方針）について",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="size-4" />
              トップページに戻る
            </Link>
          </Button>
          <h1 className="text-2xl font-bold text-foreground">プライバシーポリシー</h1>
          <p className="text-sm text-muted-foreground mt-1">個人情報保護方針</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-gray max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            山田税理士事務所（以下「当事務所」といいます）は、お客様の個人情報の保護を重要な責務と認識し、
            以下のとおり個人情報保護方針を定め、これを遵守いたします。
          </p>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">1. 個人情報の定義</h2>
            <p className="text-muted-foreground leading-relaxed">
              本プライバシーポリシーにおいて「個人情報」とは、個人情報の保護に関する法律（以下「個人情報保護法」といいます）
              第2条に規定する個人情報を指し、生存する個人に関する情報であって、
              当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別できるもの、
              または個人識別符号が含まれるものをいいます。
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">2. 個人情報の収集</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              当事務所は、以下の場合に個人情報を収集することがあります。
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>お問い合わせフォームからのご連絡時</li>
              <li>税務相談・顧問契約のお申込み時</li>
              <li>採用へのご応募時</li>
              <li>セミナー・イベントへのお申込み時</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">3. 個人情報の利用目的</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              当事務所は、収集した個人情報を以下の目的で利用いたします。
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>税務・会計サービスの提供</li>
              <li>お問い合わせへの対応</li>
              <li>契約の締結および履行</li>
              <li>採用活動における選考</li>
              <li>サービスに関するご案内</li>
              <li>当事務所のサービス改善</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">4. 個人情報の第三者提供</h2>
            <p className="text-muted-foreground leading-relaxed">
              当事務所は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
              ただし、税務申告等の業務遂行上、税務署その他の行政機関に提出する必要がある場合は、
              この限りではありません。
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">5. 個人情報の安全管理</h2>
            <p className="text-muted-foreground leading-relaxed">
              当事務所は、個人情報の漏えい、滅失、毀損を防止するため、適切な安全管理措置を講じます。
              また、従業員に対しても個人情報の適切な取扱いについて教育・監督を行います。
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">6. 税理士の守秘義務について</h2>
            <p className="text-muted-foreground leading-relaxed">
              税理士法第38条に基づき、税理士は正当な理由がなく、税理士業務に関して知り得た秘密を他に漏らし、
              または窃用してはならないとされています。当事務所は、この守秘義務を厳守いたします。
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">7. 個人情報の開示・訂正・削除</h2>
            <p className="text-muted-foreground leading-relaxed">
              お客様は、当事務所が保有する自己の個人情報について、開示、訂正、削除を請求することができます。
              ご請求の際は、ご本人確認をさせていただいた上で、合理的な期間内に対応いたします。
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">8. お問い合わせ窓口</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              個人情報の取扱いに関するお問い合わせは、下記までご連絡ください。
            </p>
            <div className="bg-muted/50 p-6 rounded-xl text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-2">山田税理士事務所</p>
              <p>〒100-0001 東京都千代田区丸の内1-1-1 丸の内ビル10F</p>
              <p>TEL: 03-1234-5678</p>
              <p>E-mail: info@yamada-tax.jp</p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">9. プライバシーポリシーの変更</h2>
            <p className="text-muted-foreground leading-relaxed">
              当事務所は、必要に応じて本プライバシーポリシーを変更することがあります。
              変更後のプライバシーポリシーは、本ウェブサイトに掲載した時点から効力を生じるものとします。
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              制定日：2015年4月1日<br />
              最終改定日：2024年1月1日<br />
              山田税理士事務所 代表 山田太郎
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
