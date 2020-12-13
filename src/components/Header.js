import React, { useEffect } from 'react'
import './header.css'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Header() {
    let location = useLocation()
    useEffect(() => {
        window.scrollTo(0,0)
    }, [location])
    return (
        <div className="header" >
            <div className="headerRight" ></div>
            <div className="headerCenter" >
                <Link to="/" style={{ margin: 10, color: location.pathname === "/" ? "#f00" : "#000" }} >home</Link>
                <Link to="/main" style={{ margin: 10, color: location.pathname === "/main" ? "#f00" : "#000" }} >main</Link>
            </div>
            <div className="headerLeft" ></div>
        </div>
    )
}
