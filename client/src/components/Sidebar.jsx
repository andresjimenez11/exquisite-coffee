import useStore from '../hooks/useStore'
import Category from './Category'
import { useAuth } from '../hooks/useAuth'

export default function Sidebar() {
  
    const { categories } = useStore();
    const { logout, user } = useAuth({middleware: 'auth'});

    return (

        <aside className="md:w-72">
            <div className="pt-8 pb-4 px-4 flex justify-center items-center">
                <img 
                    alt="logo image"
                    className="w-52"
                    src="/img/logotipo.png"
                />
                
            </div>

            <p className='my-10 text-xl text-center'>¡Hola <span className='font-bold'>{user?.name}!</span></p>

            <div className='mt-4'>
                {categories.map( category => (
                    <Category 
                        key={category.id}
                        category={category}
                    />
                ))}
            </div>

            <div className='my-5 px-5'>
                <button
                    type='button'
                    className='text-center bg-tertiary hover:bg-tertiary-dark w-full p-3 mt-5 font-bold text-white truncate'
                    onClick={logout}
                >Cancel Your Order</button>
            </div>
        </aside>
  )
}
