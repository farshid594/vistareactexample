import React, { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'

export default function FilterProducts() {
    let { filterByTitle } = useContext(ProductsContext)
    return (
        <div style={{ padding: 20 }} >
            <input onChange={(e) => {
                filterByTitle(e.target.value)
            }} />
        </div>
    )
}
