import React from 'react'

class MyBtn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: "#fff",
            loading: true
        }
        console.log("constructor");
        this.onClickButton = this.onClickButton.bind(this)
    }

    componentWillUnmount() {

    }
    componentDidCatch() {
    }
    componentDidMount() {
        console.log("cdm");
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 3000)
    }
    componentDidUpdate() {
        console.log(this.state.color);
    }

    onClickButton() {
        this.setState({
            color: "#000"
        })
    }

    render() {
        console.log("render");
        var bgColor = this.props.bgColor ? this.props.bgColor : "#f0f"
        if (this.state.loading) {
            return (
                <div>
                    loading
                </div>
            )
        }
        return (
            <div style={{
                width: 100, padding: 10, borderRadius: 10,
                backgroundColor: bgColor, textAlign: "center",
                color: this.state.color,
                fontSize: 16, cursor: 'pointer', margin: 10
            }}
                onClick={this.onClickButton}
            >
                {this.props.title}
            </div>
        )
    }

}
export default MyBtn
//jss
