import useSWR from "swr"
import axiosClient from "../config/axios"
import { formatMoney } from "../helpers"
import useStore from "../hooks/useStore"

export default function Orders() {
    
    const token = localStorage.getItem('AUTH_TOKEN')

    // API Request
    const fetcher = () => axiosClient('/api/orders', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    // Using SWR to return data from the API
    const {data, error, isLoading} = useSWR('/api/orders', fetcher, {
        refreshInterval: 1000
    });

    const {handleCompleteOrder} = useStore()

    if(isLoading) return 'Loading...'

    console.log(data?.data);
    console.log(error);
    console.log(isLoading);

    return (
    <div>
        <h1 className='text-4xl font-black'>Orders</h1>
        <p className='text-2xl my-10'>
            Manage orders from here.
        </p>
        <div className="lg:grid grid-cols-2 gap-5">
            {data.data.data.map(order => (
                <div key={order.id} className="p-5 mb-5 bg-white shadow space-y-2 border-b">

                    <p className="text-xl font-bold text-secondary mb-5">
                        Order #{order.id}
                    </p>
                    <p className="text-lg font-bold">
                        Customer: {''}
                        <span className="font-normal">{order.user.name}</span>
                    </p>

                    {order.products.map(product => (
                        <div className="flex place-content-between border-b border-b-slate-200 last-of-type:border-none py-4">
                            <div
                                key={product.id}
                                className=""
                            >
                                <p className="text-sm">ID: {product.id}</p>
                                <p>{product.name}</p>
                                <p>
                                    Quantity: {''}
                                    <span className="font-bold">{product.pivot.quantity}</span>
                                </p>
                            </div>
                            <div>
                                <div className="w-20">
                                    <img 
                                        alt={`image ${product.image}`}
                                        className="w-full"
                                        src={`/img/${product.image}.jpg`}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}

                    <p className="text-lg font-bold">
                        Total: {''}
                        <span className="font-normal">{formatMoney(order.total)}</span>
                    </p>
                    <div>
                        <button
                            type='button'
                            onClick={ () => handleCompleteOrder(order.id) }
                            className='main-button'
                        >Complete</button>
                    </div>

                </div>
            ))}
        </div>
    </div>
  )
}
