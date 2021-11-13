import React from 'react'

class Child extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    render() {
        return (
            <div>
                {this.state.visible ? this.props.renderThis() : null}
                <button onClick={() => this.setState({
                    visible: !this.state.visible
                })}>Click me</button>
            </div>
        )
    }
}

export default Child