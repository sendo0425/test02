"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "ホーム", href: "/" },
  { name: "サービス", href: "#services" },
  { name: "事務所紹介", href: "#about" },
  { name: "料金案内", href: "#pricing" },
  { name: "採用情報", href: "#careers" },
  { name: "お問い合わせ", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end gap-6 text-sm">
            <a href="tel:03-1234-5678" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="size-4" />
              <span>03-1234-5678</span>
            </a>
            <a href="mailto:info@yamada-tax.jp" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="size-4" />
              <span>info@yamada-tax.jp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="size-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">Y</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-semibold text-foreground">山田税理士事務所</p>
              <p className="text-xs text-muted-foreground">YAMADA TAX ACCOUNTANT OFFICE</p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild>
              <Link href="#contact">無料相談予約</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">メニューを開く</span>
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="mt-2">
                <Link href="#contact">無料相談予約</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
