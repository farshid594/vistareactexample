import React, { useState, useEffect } from 'react'

export default function MyInputFunc(props) {
    const [error, setError] = useState(false)

    useEffect(() => {

        return () => {

        }
    }, [])
    useEffect(() => {

    })
    useEffect(() => {

    }, [error])


    
    return (
        <div>
            <input type="text"
                onChange={(e) => {
                    var val = e.target.value
                    var Emailregex = /^[a-z][a-z0-9\._]{4,}@[a-z0-9]{3,}\.[a-z]{2,5}$/i
                    if (Emailregex.test(val)) {
                        setError(false)
                    } else {
                        setError(true)
                    }
                }}
                placeholder={props.placeholder}
            />
            {error ? (
                <span style={{ color: "#f00" }} >
                    فرمت ایمیل وارد شده اشتباه است.
                </span>
            ) : null}
        </div>
    )
}
