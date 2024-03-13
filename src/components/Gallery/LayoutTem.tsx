import { Sriracha } from 'next/font/google'
import LogoutButton from '../LogoutButton'
import BoxText from './BoxText'



export const sriracha = Sriracha({
  weight: '400',
  subsets: ['latin'],
})


export default function LayoutTem({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full flex flex-col w-full lg:w-[60%] py-2 px-1">
      {children}
      <BoxText />
    </div>
  )
}