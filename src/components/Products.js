import React, { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import Product from './Product'

export default function Products() {
    let { filteredData } = useContext(ProductsContext)
    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} >
            {filteredData.map((item, index) => {
                return (
                    <Product key={index} item={item} />
                )
            })}
        </div>
    )
}
