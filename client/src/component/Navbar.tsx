import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Searchbar from './Searchbar'
import { Home, Bell, ShoppingCart, Search, User } from 'lucide-react'

function Navbar() {
  return (
    <nav className='w-full flex items-center justify-between border-b-2 border-gray-200 py-2 px-3 sm:px-4 md:px-6 lg:px-8'>
        {/* Left  */}
        <Link href="/" className='flex items-center'>
        <Image
            src="/logo.png"
            alt="logo"
            className='w-6 h-6 md:w-9 md:h-9'
            width={36}
            height={36}
            draggable={false}
        />
        <p className='hidden md:block text-md font-md tracking-wider'>Koya</p>
        </Link>

        {/* Center  */}
        <div className="flex-1 flex justify-center">
          {/* full search bar visible on md and up */}
          <div className="hidden md:block w-full max-w-xs md:max-w-md lg:max-w-xl">
            <Searchbar />
          </div>

          {/* small search icon for sm screens */}
          <button
            type="button"
            aria-label="Open search"
            className="md:hidden text-gray-600 hover:text-indigo-600 mr-2"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Right  */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <Link href="/" className="text-gray-600 hover:text-indigo-600">
            <Home className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden />
            <span className="sr-only">Home</span>
          </Link>

          <button aria-label="Notifications" className="relative text-gray-600 hover:text-indigo-600">
            <Bell className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden />
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1 text-[10px] font-medium text-white bg-red-500 rounded-full">3</span>
          </button>

          <Link href="/cart" className="text-gray-600 hover:text-indigo-600">
            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden />
            <span className="sr-only">Cart</span>
          </Link>

          {/* Sign In */}
          <Link
            href="/signin"
            className="ml-1 inline-flex items-center rounded-md border border-transparent bg-white px-2 py-1 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-60"
          >
            <User className="w-4 h-4 md:hidden text-gray-600" aria-hidden />
            <span className="hidden md:inline text-sm md:text-base font-medium">Sign In</span>
          </Link>
        </div>
    </nav>
  )
}

export default Navbar
