"use client"

import { useState } from "react"
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const inquiryTypes = [
  { value: "tax-consulting", label: "税務顧問について" },
  { value: "succession", label: "事業承継・M&Aについて" },
  { value: "inheritance", label: "相続税対策について" },
  { value: "tax-planning", label: "節税対策について" },
  { value: "recruitment", label: "採用について" },
  { value: "other", label: "その他" },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
    privacy: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // フォーム送信処理
    alert("お問い合わせありがとうございます。担当者より2営業日以内にご連絡いたします。")
  }

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2">CONTACT</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">お問い合わせ</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            ご相談・お見積りは無料です。まずはお気軽にお問い合わせください。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">お問い合わせ方法</CardTitle>
                <CardDescription>お電話またはフォームよりご連絡ください</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">電話でのお問い合わせ</p>
                    <a href="tel:03-1234-5678" className="text-lg font-semibold text-primary hover:underline">
                      03-1234-5678
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">メールでのお問い合わせ</p>
                    <a href="mailto:info@yamada-tax.jp" className="text-primary hover:underline">
                      info@yamada-tax.jp
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">受付時間</p>
                    <p className="text-sm text-muted-foreground">平日 9:00〜18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">アクセス</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">山田税理士事務所</p>
                    <p className="text-sm text-muted-foreground">
                      〒100-0001<br />
                      東京都千代田区丸の内1-1-1<br />
                      丸の内ビル10F
                    </p>
                  </div>
                </div>
                <div className="w-full h-40 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">地図を表示</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact form */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>お問い合わせフォーム</CardTitle>
              <CardDescription>
                必要事項をご記入の上、送信してください。2営業日以内にご連絡いたします。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      お名前 <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="山田 太郎"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">会社名</Label>
                    <Input
                      id="company"
                      placeholder="株式会社〇〇"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      メールアドレス <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@company.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">電話番号</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="03-1234-5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiryType">
                    お問い合わせ内容 <span className="text-destructive">*</span>
                  </Label>
                  <select
                    id="inquiryType"
                    required
                    className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  >
                    <option value="">選択してください</option>
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    ご相談内容 <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="ご相談内容をご記入ください"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="mt-1"
                    checked={formData.privacy}
                    onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                  />
                  <Label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                    <a href="/privacy" className="text-primary hover:underline">プライバシーポリシー</a>
                    に同意の上、送信してください。
                  </Label>
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <Send className="size-4" />
                  送信する
                </Button>
              </form>

              <p className="text-xs text-muted-foreground mt-6">
                ※ ご入力いただいた個人情報は、お問い合わせへの対応にのみ使用いたします。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
