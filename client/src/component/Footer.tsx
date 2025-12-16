import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 rounded-lg px-4 py-8 md:py-10 w-full">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        {/* Brand / Left */}
        <div className="flex flex-col gap-3 md:col-span-2">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Koya" width={36} height={36} draggable={false} />
            <span className="text-white font-semibold tracking-wide text-lg">Koya</span>
          </Link>

          <div className="text-sm text-slate-400">
            <p>© {new Date().getFullYear()} Koya</p>
            <p>All rights reserved.</p>
          </div>
        </div>

        {/* Links column 1 */}
        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-medium text-slate-200">Links</h4>
          <nav className="flex flex-col gap-2 text-sm">
            <Link href="/" className="text-slate-400 hover:text-white">Homepage</Link>
            <Link href="/contact" className="text-slate-400 hover:text-white">Contact</Link>
            <Link href="/terms" className="text-slate-400 hover:text-white">Terms of Service</Link>
            <Link href="/privacy" className="text-slate-400 hover:text-white">Privacy Policy</Link>
          </nav>
        </div>

        {/* Links column 2 */}
        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-medium text-slate-200">Links</h4>
          <nav className="flex flex-col gap-2 text-sm">
            <Link href="/products" className="text-slate-400 hover:text-white">All Products</Link>
            <Link href="/new" className="text-slate-400 hover:text-white">New Arrivals</Link>
            <Link href="/best-sellers" className="text-slate-400 hover:text-white">Best Sellers</Link>
            <Link href="/sale" className="text-slate-400 hover:text-white">Sale</Link>
          </nav>
        </div>

        {/* Links column 3 */}
        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-medium text-slate-200">Links</h4>
          <nav className="flex flex-col gap-2 text-sm">
            <Link href="/about" className="text-slate-400 hover:text-white">About</Link>
            <Link href="/contact" className="text-slate-400 hover:text-white">Contact</Link>
            <Link href="/blog" className="text-slate-400 hover:text-white">Blog</Link>
            <Link href="/affiliate" className="text-slate-400 hover:text-white">Affiliate Program</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
