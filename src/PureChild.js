import React, { PureComponent } from 'react';

class PureChild extends PureComponent {

    render = () => {
        console.log('Pure Child Rendered')
        return (
            <div className='purechild'>
                Pure Child - {this.props.childName}
            </div>
        )
    }
}

export default PureChild;