import React, { useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from '@material-ui/core';

export default function MySlider() {
    const SliderRef = useRef()
    return (
        <div>
            <Button
                onClick={() => {
                    SliderRef.current.slickNext()
                }}
            >
                بعدی
            </Button>
            <Button
                onClick={() => {
                    SliderRef.current.slickPrev()
                }}
            >
                قبلی
            </Button>
            <Slider
                dots={true}
                ref={SliderRef}
            >
                <div>
                    <div style={{ height: 250, backgroundColor: "#0ff" }} >
                        slide1
                    </div>
                </div>
                <div>
                    <div style={{ height: 250, backgroundColor: "#0f0" }} >
                        slide2
                    </div>
                </div>
                <div>
                    <div style={{ height: 250, backgroundColor: "#0f0" }} >
                        slide3
                    </div>
                </div>
                <div>
                    <div style={{ height: 250, backgroundColor: "#f00" }} >
                        slide4
                    </div>
                </div>
            </Slider>
        </div>
    )
}
