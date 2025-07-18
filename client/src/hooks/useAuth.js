import { useEffect } from "react";
import useSWR from "swr";
import { useNavigate } from 'react-router-dom'
import axiosClient from "../config/axios";

// it is not necessary to put it in a context because the authentication should not be global. 

export const useAuth = ({middleware, url}) => {

    const navigate = useNavigate();
    const token = localStorage.getItem('AUTH_TOKEN');

    const { data: user, error, mutate } = useSWR('/api/user', () => 
        axiosClient('api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.data)
        .catch(error => {
            throw Error(error?.response?.data?.errors);
        })
    )

    const login = async (dataLogin, setErrors, setLoading) => {
        try {
            const {data} = await axiosClient.post('/api/login', dataLogin);
            localStorage.setItem('AUTH_TOKEN', data.token);
            setErrors([]);
            await mutate();
            setLoading(true);
          } catch(error){
            setLoading(false);
            setErrors(Object.values(error.response.data.errors));
          } 
    }
    const register = async (dataRegister, setErrors, setLoading) => {
        try {
            const {data} = await axiosClient.post('/api/register', dataRegister)
            localStorage.setItem('AUTH_TOKEN', data.token)
            setErrors([])
            await mutate()
            setLoading(true);
          } catch(error){
            setLoading(false);
            setErrors(Object.values(error.response.data.errors));
          } 
    }
    const logout = async () => {
        try {
            await axiosClient.post('/api/logout', null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            localStorage.removeItem('AUTH_TOKEN')
            await mutate(undefined)
        } catch (error) {
            throw Error(error?.response?.data?.errors);
        }
    }

    useEffect(() => {
        if(middleware === 'guest' && url && user) {
            navigate(url)
        }
        if(middleware === 'guest' && user && user.admin) {
            navigate('/admin')
        }
        if(middleware === 'admin' && user && !user.admin) {
            navigate('/')
        }
        if(middleware === 'auth' && error) {
            navigate('/auth/login')
        }
    }, [user, error])


    return {
        login,
        register,
        logout,
        user,
        error
    }
}