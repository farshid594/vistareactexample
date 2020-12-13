import React, { useContext } from 'react'
import { Button } from '@material-ui/core'
import { TitleContext } from '../context/TitleContext'

export default function ClearButton() {
    let { setTitle } = useContext(TitleContext)
    return (
        <div>
            <Button
                onClick={() => setTitle('')}
            >clear</Button>
        </div>
    )
}
