import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "利用規約 | 山田税理士事務所",
  description: "山田税理士事務所ウェブサイトの利用規約について",
}

export default function TermsPage() {
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
          <h1 className="text-2xl font-bold text-foreground">利用規約</h1>
          <p className="text-sm text-muted-foreground mt-1">ウェブサイト利用規約</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-gray max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            本利用規約（以下「本規約」といいます）は、山田税理士事務所（以下「当事務所」といいます）が
            運営するウェブサイト（以下「本サイト」といいます）の利用条件を定めるものです。
            本サイトをご利用になる方（以下「利用者」といいます）は、本規約に同意の上、ご利用ください。
          </p>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">第1条（適用）</h2>
            <p className="text-muted-foreground leading-relaxed">
              本規約は、利用者と当事務所との間の本サイトの利用に関わる一切の関係に適用されます。
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">第2条（情報の性質）</h2>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
              <li>
                本サイトに掲載されている情報は、一般的な税務・会計に関する情報提供を目的としたものであり、
                特定の事案に対する専門的助言ではありません。
              </li>
              <li>
                本サイトの情報に基づいて行われた判断の結果について、当事務所は一切の責任を負いません。
                具体的な税務判断については、必ず税理士にご相談ください。
              </li>
              <li>
                本サイトに掲載されている情報は、作成時点の法令等に基づいており、
                その後の法改正等により内容が変更される場合があります。
              </li>
            </ol>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">第3条（禁止事項）</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              利用者は、本サイトの利用にあたり、以下の行為を行ってはなりません。
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>法令または公序良俗に反する行為</li>
              <li>当事務所または第三者の知的財産権を侵害する行為</li>
              <li>本サイトの運営を妨害する行為</li>
              <li>不正アクセスまたはこれを試みる行為</li>
              <li>その他、当事務所が不適切と判断する行為</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">第4条（著作権等）</h2>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
              <li>
                本サイトに掲載されている文章、画像、その他のコンテンツの著作権は、
                当事務所または正当な権利を有する第三者に帰属します。
              </li>
              <li>
                利用者は、当事務所の事前の承諾なく、本サイトのコンテンツを複製、転載、
                改変、頒布その他の二次利用をすることはできません。
              </li>
            </ol>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">第5条（免責事項）</h2>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
              <li>
                当事務所は、本サイトの情報の正確性、完全性、有用性等について保証するものではありません。
              </li>
              <li>
                当事務所は、本サイトの利用により生じた損害について、一切の責任を負いません。
              </li>
              <li>
                当事務所は、予告なく本サイトの内容を変更、または運営を中止することがあります。
              </li>
            </ol>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">第6条（リンク）</h2>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
              <li>
                本サイトへのリンクは、原則として自由です。ただし、当事務所の信用を毀損するような方法でのリンクは禁止します。
              </li>
              <li>
                本サイトから外部サイトへのリンクが設定されている場合、当該外部サイトの内容について、
                当事務所は一切の責任を負いません。
              </li>
            </ol>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">第7条（規約の変更）</h2>
            <p className="text-muted-foreground leading-relaxed">
              当事務所は、必要と判断した場合には、利用者に通知することなく本規約を変更することができます。
              変更後の規約は、本サイトに掲載した時点から効力を生じるものとします。
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">第8条（準拠法・裁判管轄）</h2>
            <p className="text-muted-foreground leading-relaxed">
              本規約の解釈にあたっては日本法を準拠法とします。
              本サイトに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
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
