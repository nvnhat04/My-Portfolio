import './globals.css';
import Link from 'next/link';
import { Providers } from './providers';
export const metadata = {
  title: 'Portfolio - Nhất',
  description: 'Website cá nhân',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning >
      <body className="min-h-screen flex flex-col">
        <Providers>
          {/*sticky + top-0 Navbar cố định ở đầu trang */}
          <header className="sticky top-0 z-50 bg-gray-200 p-4 flex justify-between items-center"
          >
            <h1 className="text-2xl font-bold text-purple-700 ml-24">
            Portfolio
          </h1>
          <nav className="flex gap-8 text-purple-700 font-bold mr-28">
            <Link href="/" className='hover:bg-purple-100 rounded-full p-2'>Home</Link>
            {/* <Link href="/about">Giới thiệu</Link> */}
            <Link href="/projects" className='hover:bg-purple-100 rounded-full p-2'>Projects</Link>
            {/* <Link href="/contact" className='hover:bg-purple-100 rounded-full p-2'>Contact</Link> */}
          </nav>
        </header>
        
        {/* flex-1: Nội dung chính - tự động mở rộng để đẩy footer xuống */}
        <main className="flex-1 p-8">
          {children}
        </main>
        
      <footer className="bg-gray-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-4">
            {/* <Link href="https://github.com/nvnhat04" target="_blank">
              GitHub
              <GiftTopIcon className="w-6 h-6 text-white" />
            </Link>
            <Link href="https://linkedin.com/in/nvnhat04" target="_blank">
              <LinkIcon className="w-6 h-6 text-white" />
              LinkedIn
            </Link> */}
            {/* Thêm các social khác */}
          </div>
          <p>&copy; {new Date().getFullYear()} Nguyen Van Nhat. All rights reserved.</p>
        </div>
      </footer>
    
      </Providers>
      </body>
    </html>
  );
}