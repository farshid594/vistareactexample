import React, { useState } from 'react'
import { Helmet } from "react-helmet";
import { Box, Button, Grid, Hidden, Typography, TextField } from '@material-ui/core'
import MyStepper from '../components/MyStepper'
import useStyles from './home.styles'
import { changeLang, getTranslate } from '../localization'
import HomeIcon from '@material-ui/icons/Home'
import avatarImage from '../assets/images/avatar5.png'
import MySlider from '../components/MySlider';
import Timer from '../components/Timer';

export default function Home() {
    const classes = useStyles()
    const translate = getTranslate()
    const [error, setError] = useState(false)
    return (
        <Grid container direction="column" >
            <Grid container direction="column" >
                <div style={{ width: 800, margin: 'auto', marginTop: 50, display: 'flex', flexDirection: 'column' }} >
                    {/* <Timer /> */}

                    {/* <MySlider />

                    {/* <img src={avatarImage} style={{ height: 250 }} /> */}

                    {/* <HomeIcon color="primary" fontSize="large" />
                    <Button variant="outlined"
                        style={{ fontSize: 50 }}
                        classes={{ label: classes.label }}
                    >
                        test
                    </Button> */}

                    {/* <TextField
                        style={{ marginTop: 20 }}
                        onChange={(e) => {
                            var Emailregex = /^[a-z][a-z0-9\._]{4,}@[a-z0-9]{3,}\.[a-z]{2,5}$/i
                            if (Emailregex.test(e.target.value)) {
                                setError(false)
                            } else {
                                setError(true)
                            }
                        }}
                        variant="outlined"
                        size="small"
                        label="email" error={error} helperText={error ? "فرمت ایمیل اشتباه است" : ""} /> */}
                </div>

                {/* <Typography className={classes.root}  >
                    {translate.home}
                </Typography>
                <Button onClick={() => {
                    changeLang("fa")
                }} >
                    فارسی
                </Button>
                <Button onClick={() => {
                    changeLang("en")
                }}>
                    English
                </Button>
                <Button onClick={() => {
                    changeLang("es")
                }}>
                    ES
                </Button>
                <Button onClick={() => {
                    changeLang("ar")
                }}>
                    عربی
                </Button>
                <MyStepper /> */}
            </Grid>
        </Grid>
    )
}

