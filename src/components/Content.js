import React, { useState } from 'react'
import Product from './Product'

const imageUrl = "https://dkstatics-public.digikala.com/digikala-products/1008083.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"

export default function Content() {
    const [data, setData] = useState([
        { id: 1, title: "react", image: imageUrl },
        { id: 2, title: "reactjs", image: imageUrl },
        { id: 3, title: "react native", image: imageUrl },
        { id: 4, title: "nodejs", image: imageUrl },
    ])
    const sortData = () => {
        var newData = data.sort((item1, item2) => {
            if (item1.title > item2.title) {
                return 1
            }
            return -1
        })
        console.log(newData);
        setData([...newData])
    }
    const Loadmore = () => {
        var moreData = [
            { id: 5, title: "php", image: imageUrl },
            { id: 6, title: "laravel", image: imageUrl },
            { id: 7, title: "asp", image: imageUrl }
        ]
        setData([
            ...data,
            ...moreData
        ])
    }
    return (
        <>
            <button
                onClick={() => Loadmore()}
            >load more </button>
            <button onClick={sortData} >
                sort
            </button>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} >
                {data.map((item, index) => {
                    return (
                        <Product key={index} item={item}  />
                    )
                })}

            </div>
        </>
    )
}

// var a = [1, 5]
// var b = [3, 7]
// var c = [a, b]
// c = [[1, 5], [3, 7]]
// var c = [...a, ...b]
// c = [1, 5, 3, 7]

// [1, 5, 3, 2]
// [1, 3, 5, 2]
// [1, 2, 5, 3]
// [1, 2, 3, 5]


