import React from 'react'
import Button from './Components/Button'

export default class Props extends React.Component{
    render(){
        return(
            <div>
                <h1>
                    Props
                </h1>
                <h2>
                    Pages Ini (Parentnya) > Component Button (Childnya)
                </h2>

                <h1>
                    Register Page
                </h1>
                <Button title='Button Register' color='blue' />

                <h1>
                    Login Page
                </h1>
                <Button title='Button Login' color='orange' />
            </div>
        )
    }
}