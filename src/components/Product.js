import React, { memo, useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'

function Product({ item }) {
    let { addToCart, isExistInCart, removeFromCart } = useContext(ProductsContext)
    return (
        <div style={{ width: 150, height: 200, margin: 15, border: "1px solid #000" }} >
            <img src={item.image} style={{ width: "100%" }} />
            <div>
                {item.title}
            </div>
            <button
                onClick={() => {
                    if (isExistInCart(item)) {
                        removeFromCart(item)
                    } else {
                        addToCart(item)
                    }
                }}
            >
                {isExistInCart(item) ? "remove from cart" : "add to cart"}
            </button>
        </div>
    )
}
export default memo(Product)




// if(oldProps===newProps && oldState===newState){
//     // 
// }else {
//     //render
// }
