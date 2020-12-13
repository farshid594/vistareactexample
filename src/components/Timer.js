import React, { useState, useEffect, useMemo, useCallback } from 'react'

var s = new Set()


export default function Timer() {
    const [counter, setCounter] = useState(100)

    useEffect(() => {
        var timer = setInterval(() => {
            setCounter(oldCounter => {
                if (oldCounter === 0) {
                    // clearInterval(timer)
                    return 0
                }
                return oldCounter - 1
            }
            )
        }, 1000)
    }, [])

    const searchData = useCallback(() => {

    }, [])
    s.add(searchData)
    console.log(s.size);

    // const result = useMemo(() => {
    //     console.log("log");
    //     return "result"
    // }, [])

    // const getData = () => {
    //     console.log("log");
    //     return "result"
    // }

    // const result = getData()

    return (
        <div>
            <div style={{ fontSize: 30 }} >
                {counter}
            </div>
            <div>
                {/* {result} */}
            </div>
        </div>
    )
}
