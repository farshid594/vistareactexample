import React, { useState } from 'react'

function MyBtnFunc(props) {

    const [color, setColor] = useState("#000")

    const onClickDiv = () => {
        setColor("#f00")
    }

    return (
        <div style={{ color: color }} onClick={onClickDiv} >
            {props.title}
        </div>
    )

}
export default MyBtnFunc
