import React from 'react'

class Button extends React.Component{
    render(){
        return(
            <>
                <input type="Button" value={this.props.title} style={{backgroundColor: this.props.color, padding: '10px 50px', color: 'white'}} />
            </>
        )
    }
}

export default Button