import { Menu, Transition } from '@headlessui/react'
import { ComponentProps, Fragment, ReactElement } from 'react'
import { ArchiveIcon, ClipboardCheckIcon, ClipboardListIcon, CollectionIcon, LogoutIcon, MenuIcon, UsersIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'



export default function MainMenu({currentPage}: {currentPage: string}): ReactElement {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-center bg-gray-900 opacity-90">
      <Link href="/">
        <div className={`flex-1 flex justify-center items-center p-2 ${currentPage === "/" ? 'text-white' : 'text-gray-400'}`}>
          <p className="px-2 hidden md:inline-block">Home</p>
          <CollectionIcon className={`w-6 h-6`} />
        </div>
      </Link>
      <Link href="/zaduzenje">
        <div className={`flex-1 flex justify-center items-center p-2 ${currentPage === "zaduzenje" ? 'text-white' : 'text-gray-400'}`}>
          <p className="px-2 hidden md:inline-block">Zaduzi</p>
          <ClipboardListIcon className={`w-6 h-6`} />
        </div>
      </Link>
      <Link href="/razduzenje">
        <div className={`flex-1 flex justify-center items-center p-2 ${currentPage === "razduzenje" ? 'text-white' : 'text-gray-400'}`}>
          <p className="px-2 hidden md:inline-block">Razduzi</p>
          <ClipboardCheckIcon className={`w-6 h-6`} />
        </div>
      </Link>
      <Link href="/users">
        <div className={`flex-1 flex justify-center items-center p-2 ${currentPage === "users" ? 'text-white' : 'text-gray-400'}`}>
          <p className="px-2 hidden md:inline-block">Korisnici</p>
          <UsersIcon className={`w-6 h-6`} />
        </div>
      </Link>
      <Link href="/arhiva">
        <div className={`flex-1 flex justify-center items-center p-2 ${currentPage === "arhiva" ? 'text-white' : 'text-gray-400'}`}>
          <p className="px-2 hidden md:inline-block">Arhiva</p>
          <ArchiveIcon className={`w-6 h-6`} />
        </div>
      </Link>
      <Link href="/login">
        <div className={`flex justify-center items-center p-2 text-white bg-red-500`}>
          <p className="px-2 hidden md:inline-block">Logout</p>
          <LogoutIcon className={`w-6 h-6`} />
        </div>
      </Link>
    </div>
  )
}