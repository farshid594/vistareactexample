import React, { useState } from 'react'
import './main.css'
import Content from '../components/Content'
import { Helmet } from 'react-helmet'
import MyHeader from '../components/MyHeader'
import MyContent from '../components/MyContent'
import TitleContextProvider from '../context/TitleContext'

export default function Main() {
    return (
        <TitleContextProvider>
            <div className="main" >

                <MyHeader />
                <MyContent />
                {/* <Content /> */}
            </div>
        </TitleContextProvider>)
}
