import React, { Component } from 'react'

export default class MyInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: false
        }
    }
    render() {
        return (
            <div style={{ margin: 20 }} >
                <input type="text"
                    onChange={(e) => {
                        var val = e.target.value
                        var Emailregex = /^[a-z][a-z0-9\._]{4,}@[a-z0-9]{3,}\.[a-z]{2,5}$/i
                        if (Emailregex.test(val)) {
                            this.setState({
                                error: false
                            })
                        } else {
                            this.setState({
                                error: true
                            })
                        }
                    }}
                />
                {this.state.error ? (
                    <span style={{ color: "#f00", fontSize: 14 }} >
                        فرمت ایمیل وارد شده اشتباه است
                    </span>
                ) : null}
            </div>
        )
    }
}
