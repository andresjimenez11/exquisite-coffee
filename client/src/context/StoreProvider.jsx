import { createContext, useState, useEffect } from "react"
import { toast } from 'react-toastify'
import axiosClient from "../config/axios";

const StoreContext = createContext();

const StoreProvider = ({children}) => {

    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory ] = useState({});
    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState({});
    const [order, setOrder] = useState([]);
    const [total, setTotal] = useState([0]);

    useEffect(() => {
        const nuevoTotal = order.reduce((total, product) => (product.price * product.quantity) + total, 0);
        setTotal(nuevoTotal);
    }, [order])

    const getCategories = async () => {
        try {
            const token = localStorage.getItem('AUTH_TOKEN');
            const {data} = await axiosClient('/api/categories', {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });
            setCategories(data.data);
            setCurrentCategory(data.data[0]);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCategories();
    }, [])

    const handleClickCategory = id => {
        const category = categories.filter(category => category.id === id)[0];
        setCurrentCategory(category);
    }

    const handleClickModal = () => {
        setModal(!modal)
    }

    const handleSetProduct = product => {
        setProduct(product)
    }

    const handleAddOrder = ({category_id, ...product}) => {

        if(order.some( orderState => orderState.id === product.id )){
            const updatedOrder = order.map(orderState => orderState.id === product.id ? product : orderState)
            setOrder(updatedOrder);
            toast.success('Updated Order')
        } else {
            setOrder([...order, product])
            toast.success('Add to the Order')
        }
    }

    const handleEditQuantity = id => {
        const currentProduct = order.filter(product => product.id === id)[0];
        setProduct(currentProduct);
        setModal(!modal);
    }

    const handleRemoveProduct = id => {
        const updatedOrder = order.filter(product => product.id !== id);
        setOrder(updatedOrder);
        toast.success('Removed from Order')
    }

    const handleSubmitNewOrder = async () => {

        const token = localStorage.getItem('AUTH_TOKEN');

        try {
            const {data} = await axiosClient.post('/api/orders', {
                total,
                products: order.map(product => {
                    return {
                        id: product.id,
                        quantity: product.quantity
                    }
                })
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            toast.success(data.message)
            setTimeout(() => {
                setOrder([])
            }, 1000);
        } catch (error) {
            console.log(error);
        }
    }

    const handleCompleteOrder = async id => {
        
        const token = localStorage.getItem('AUTH_TOKEN');
        
        try {
            await axiosClient.put(`/api/orders/${id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        } catch (error) {
            console.log(id);
        }
    }

    return (
        <StoreContext.Provider
            value={{
                categories,
                currentCategory,
                handleClickCategory,
                modal,
                handleClickModal,
                product,
                handleSetProduct,
                order,
                handleAddOrder,
                handleEditQuantity,
                handleRemoveProduct,
                total,
                handleSubmitNewOrder,
                handleCompleteOrder
            }}
        >{children}</StoreContext.Provider>
    )
}
export {
    StoreProvider
}

export default StoreContext