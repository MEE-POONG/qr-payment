import { Sriracha } from 'next/font/google'
import Navbar from './Navbar'
import LogoutButton from './LogoutButton'
import MenuButton from './TabsMenu'



export const sriracha = Sriracha({
  weight:'400',
  subsets: ['latin'],
})


export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className={`${sriracha.className}`}>
      {/* <Navbar /> */}
     
      <LogoutButton />
      <main className={`min-h-screen px-5 py-14 md:p-24`}>
        {children}
      </main>
    </section>
  )
}