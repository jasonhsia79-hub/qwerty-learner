import logo from '@/assets/logo.svg'
import type { PropsWithChildren } from 'react'
import type React from 'react'
import { NavLink } from 'react-router-dom'

const Header: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className="container z-20 mx-auto w-full px-3 pb-2 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-10 sm:py-6">
      <div className="flex w-full flex-col items-center justify-between gap-2 lg:flex-row">
        <NavLink
          className="hidden items-center text-2xl font-bold text-indigo-500 no-underline hover:no-underline sm:flex lg:text-4xl"
          to="https://qwerty.kaiyi.cool/"
        >
          <img src={logo} className="mr-3 h-16 w-16" alt="Qwerty Learner Logo" />
          <h1>Qwerty Learner</h1>
        </NavLink>
        <nav className="my-card flex w-full flex-wrap content-center items-center justify-center gap-2 rounded-xl bg-white p-2 transition-colors duration-300 dark:bg-gray-800 sm:w-auto sm:flex-nowrap sm:justify-end sm:gap-3 sm:p-4">
          {children}
        </nav>
      </div>
    </header>
  )
}

export default Header
