import { Sriracha } from 'next/font/google'
import LogoutButton from './LogoutButton'



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
    <section>
      {/* <Navbar /> */}
     
      <LogoutButton />
      <main className={`min-h-screen px-5 py-14 md:p-24`}>
        {children}
      </main>
    </section>
  )
}