import React from 'react'
import { useParams, Redirect } from 'react-router-dom'

export default function Details() {
    let { id, name } = useParams()
    if (id == 0) {
        return (
            <Redirect to='/' />
        )
    }
    return (
        <div>

            {name}
        </div>
    )
}
