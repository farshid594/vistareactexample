import React, { useState, useContext } from 'react'
import CartHeader from '../components/CartHeader'
import FilterProducts from '../components/FilterProducts'
import Products from '../components/Products'
import ProductContextProvider from '../context/ProductsContext'
import { Button } from '@material-ui/core'
import { AlertContext } from '../components/Alert'

export default function Cart() {
    let { showSuccesAlert, showInfoAlert } = useContext(AlertContext)
    return (
        <ProductContextProvider>
            <div>
                <CartHeader />
                <Button onClick={() => {
                    showSuccesAlert("با موفقیت ...")
                }}  >
                    open snackbar
                </Button>
                <Button onClick={() => {
                    showInfoAlert("باتیا بات با")
                }}  >
                    open snackbar
                </Button>
                <FilterProducts />
                <Products />
            </div>
        </ProductContextProvider>
    )
}
