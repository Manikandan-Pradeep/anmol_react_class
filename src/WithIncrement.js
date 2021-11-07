import React from 'react'

const WithIncrement = (Component) => {

    class Incrementor extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                count: 0
            }
        }

        componentDidUpdate() {
            console.log('I got updated')
        }

        incrementCount = (e) => {
            this.setState({
                count: this.state.count + 1
            })
        }

        render() {
            return (
                <Component counterValue={this.state.count} increment={this.incrementCount} {...this.props}/>
            )
        }
    }

    return Incrementor
}

export default WithIncrement