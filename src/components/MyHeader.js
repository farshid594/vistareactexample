import React, { useContext } from 'react'
import { TitleContext } from '../context/TitleContext'

export default function MyHeader() {
    let { title } = useContext(TitleContext)
    return (
        <div style={{ padding: 20, backgroundColor: "#fff" }} >
            {title}
        </div>
    )
}
