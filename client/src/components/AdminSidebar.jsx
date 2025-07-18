import {Link} from 'react-router-dom'
import {useAuth} from '../hooks/useAuth'


export default function AdminSidebar() {
  
    const {logout} = useAuth({middleware: 'auth'})

    return (
    <aside className='md:w-72 h-screen'>
        <div className="pt-8 pb-4 px-4 flex justify-center items-center">
            <img 
                alt="logo image"
                className="w-52"
                src="/img/logotipo.png"
            />
                
        </div>

        <nav className='flex flex-col p-4'>
            <Link to="/admin" className='font-bold text-lg'>Orders</Link>
            <Link to="/admin/products" className='font-bold text-lg'>Products</Link>
        </nav>

        <div className='my-5 px-5'>
            <button
                type='button'
                className='text-center bg-tertiary hover:bg-tertiary-dark w-full p-3 mt-5 font-bold text-white truncate'
                onClick={logout}
            >Logout</button>
        </div>
    </aside>
  )
}
