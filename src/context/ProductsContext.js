import React, { createContext, useState, useEffect } from 'react'

const ProductsContext = createContext({
    data: [],
    filteredData: [],
    carts: [],
    addToCart: () => { },
    isExistInCart: () => { },
    removeFromCart: () => { },
    filterByTitle: () => { }
})
export { ProductsContext }

const imageUrl = "https://dkstatics-public.digikala.com/digikala-products/1008083.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"

function ProductContextProvider({ children }) {
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [carts, setCarts] = useState(localStorage.carts ? JSON.parse(localStorage.carts) : [])

    useEffect(() => {
        // server 
        setData([
            { id: 1, title: "react", image: imageUrl },
            { id: 2, title: "reactjs", image: imageUrl },
            { id: 3, title: "react native", image: imageUrl },
            { id: 4, title: "nodejs", image: imageUrl }
        ])
        setFilteredData([
            { id: 1, title: "react", image: imageUrl },
            { id: 2, title: "reactjs", image: imageUrl },
            { id: 3, title: "react native", image: imageUrl },
            { id: 4, title: "nodejs", image: imageUrl }
        ])

    }, [])

    useEffect(() => {
        localStorage.setItem('carts', JSON.stringify(carts))
    }, [carts])
    const addToCart = (item) => {
        setCarts([
            ...carts,
            item
        ])
    }
    const isExistInCart = (item) => {
        var result = false
        carts.forEach(cartItem => {
            if (cartItem.id === item.id) {
                result = true
            }
        });
        return result
    }
    const removeFromCart = (item) => {
        var newCarts = carts.filter((cartItem) => {
            if (cartItem.id === item.id) {
                return false
            }
            return true
        })
        setCarts(newCarts)
    }
    const filterByTitle = (titleSearch) => {
        //server 
        var regex = new RegExp("^" + titleSearch)
        var newFilteredData = data.filter((item) => {
            if (regex.test(item.title)) {
                return true
            }
            return false
        })
        setFilteredData(newFilteredData)
    }
    return (
        <ProductsContext.Provider
            value={{
                data: data,
                carts: carts,
                addToCart: addToCart,
                isExistInCart: isExistInCart,
                removeFromCart: removeFromCart,
                filteredData: filteredData,
                filterByTitle: filterByTitle
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}
export default ProductContextProvider