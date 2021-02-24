import React from 'react'

class ValidationSubmit extends React.Component{

    onValidation = () => {
        let inputValue = this.refs.text.value

        if(inputValue.length >= 10){
            alert('Input Kebanyakan')
        }
    }

    render(){
        return(
            <div>
                <h1>
                    Validation Submit
                </h1>

                <input type="text" ref="text" placeholder="Enter Random Text" />
                <input type="button" value="Submit" onClick={this.onValidation} />
            </div>
        )
    }
}

export default ValidationSubmit