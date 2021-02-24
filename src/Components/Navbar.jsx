import React from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component{
    render(){
        return(
            <div style={{backgroundColor: 'silver', height: '30px'}}>
                <span><Link to='/'>Home</Link></span>
                <span><Link to='/state-1'>Menu 1</Link></span>
                <span><Link to='/state-2'>Menu 2</Link></span>
                <span><Link to='/state-3'>Menu 3</Link></span>
            </div>
        )
    }
}