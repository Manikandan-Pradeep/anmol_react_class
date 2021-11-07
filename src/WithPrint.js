import React from 'react'

const WithPrint = (Component) => {

    class Printer extends React.Component {
        constructor(props){
            super(props)
        }

        componentDidMount(){
            console.log('I got mounted')
        }

        render() {
            console.log('Printer', this.props)
            return (
                <Component {...this.props}/>
            )
        }
    }

    return Printer
}

export default WithPrint