import { formatMoney } from "../helpers"
import useStore from "../hooks/useStore"

export default function Product({product}) {

    const { handleClickModal, handleSetProduct } = useStore();
    
    const {name, image, price} = product; //Forma de extraer la información del objeto
    
    return (
    <div className="border p-3 shadow bg-white">
        <img 
            alt={`image ${name}`}
            className="w-full"
            src={`/img/${image}.jpg`}
        />
        <div className="p-5 w-full">
            <h3 className="text-xl font-bold line-clamp-2 min-h-16" title={name}>{name}</h3>
            <p className="price">{formatMoney(price)}</p>
            <button
                type="button"
                className="main-button"
                onClick={() => {
                    handleClickModal();
                    handleSetProduct(product);
                }}
            >
                Add to cart
            </button>
        </div>
    </div>
  )
}
