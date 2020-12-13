import React, { useContext } from 'react'
import { Badge, IconButton } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { ProductsContext } from '../context/ProductsContext'

export default function CartHeader() {
    let { carts } = useContext(ProductsContext)
    return (
        <div style={{ padding: 15, backgroundColor: "#333", color: "#fff" }} >
                <Badge badgeContent={carts.length} color="primary">
                    <ShoppingCartIcon />
                </Badge>
        </div>
    )
}
