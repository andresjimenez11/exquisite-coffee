import { formatMoney } from '../helpers';
import useStore from '../hooks/useStore'
import ProductOverview from './ProductOverview'

export default function Summary() {
  
    const {order, total, handleSubmitNewOrder} = useStore();

    const handleSubmit = e => {
      e.preventDefault();
      handleSubmitNewOrder();
    }

    return (
        <div className="w-72 h-screen overflow-y-scroll p-5">
            <h1 className="text-4xl font-black">
              My order
            </h1>
            {/* <p className="text-lg my-5">
              Here you can see the summary and totals of your order
            </p> */}

            <div className='pt-10 pb-4'>
                {order.length === 0 ? (
                  <p className='text-center text-2xl'>
                    There are no items in your order yet
                  </p>
                ) : (
                  order.map(product => (
                      <ProductOverview 
                      key={product.id}
                      product={product}
                      />
                  ))
                )}
            </div>
            
            
            {order.length > 0 && (
                <div>
                  <p className='text-xl mt-10'>
                    Total: {''}
                    {formatMoney(total)}
                  </p>

                  <form 
                    className='w-full mt-5'
                    onSubmit={handleSubmit}
                  >
                    <div>
                      <input
                        type='submit'
                        className='main-button'
                        value='Confirm Order'
                      />
                    </div>
                  </form>
                </div>
            )}
          
        </div>
    )
}
