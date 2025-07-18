import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { StoreProvider } from './context/StoreProvider'
import router from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <StoreProvider>
        <RouterProvider router={router} />
    </StoreProvider>
)
