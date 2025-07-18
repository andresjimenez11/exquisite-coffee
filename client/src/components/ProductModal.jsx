import { useState, useEffect } from 'react'
import { formatMoney } from "../helpers"
import useStore from '../hooks/useStore'

export default function Modal() {

  const { product, handleClickModal, handleAddOrder, order } = useStore();
  const [ quantity, setQuantity ] = useState(1);
  const [edition, setEdition] = useState(false);

  useEffect(() => {
    if(order.some( orderState => orderState.id === product.id )){
      const productEdition = order.filter(orderState => orderState.id === product.id)[0];
      setQuantity(productEdition.quantity);
      setEdition(true);
    } else {
      console.log('No esta en el pedido');
    }
  }, [order])

  return (
    <div className='md:flex items-center gap-10'>
        <div className='absolute top-0 right-0 p-6'>
          <button
            type='button'
            onClick={handleClickModal}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
      </div>

        <div className='md:w-1/3'>
          <img
            alt={`Imagen producto ${product.nombre}`}
            src={`/img/${product.image}.jpg`}
          >
          </img>
        </div>
        <div className='md:w-2/3'>
          

          <h1 className='text-3xl font-bold mt-0'>
            {product.name}
          </h1>
          <p className='price mt-1'>
            {formatMoney(product.price)}
          </p>

          <div className='flex gap-4 mt-2'>

            <button
              type='button'
              onClick={() => {
                if(quantity <= 1) return
                setQuantity(quantity - 1)
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
              </svg>
            </button>

            <p className='text-3xl'>{quantity}</p>

            <button
              type='button'
              onClick={() => {
                if(quantity >= 5) return
                setQuantity(quantity + 1)
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>

          </div>

          <button
            type="button"
            className="modal-button"
            onClick={() => {
              handleAddOrder({...product, quantity});
              handleClickModal();
            }} 
          >
            {edition ? 'Save Changes' : 'Add to Order'}
          </button>
        </div>
    </div>
  )
}
