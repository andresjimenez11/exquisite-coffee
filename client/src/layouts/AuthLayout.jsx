import { Outlet } from 'react-router-dom'

export default function AuthLayaout() {
  return (
    <main className='max-w-4xl m-auto mt-10 md:mt-20 flex flex-col md:flex-row items-center'>
      <img
        src='../img/logotipo.png'
        alt='logo image'
        className="max-w-xs"
      />
      <div className='p-10 md:pl-20 w-full'>
        <Outlet />
      </div>
    </main>
  )
}
