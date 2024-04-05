import { Sriracha } from 'next/font/google'
import DarkImageBackground from './BG'



export const sriracha = Sriracha({
  weight: '400',
  subsets: ['latin'],
})


export default function LayoutAdmin({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* <LogoutButton /> */}
      <main className={`relative w-screen h-screen`}>
        <DarkImageBackground />
        {children}
      </main>
    </section>
  )
}