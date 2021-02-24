import React from 'react'

class State2 extends React.Component{

    state = {
        count: 0
    }

    onCount = () => {
        let tempCount = this.state.count
        tempCount++

        this.setState({count: tempCount})
    }

    onCountMin = () => {
        let tempCount = this.state.count
        tempCount--

        this.setState({count: tempCount})
    }

    render(){
        return(
            <div>
                <h1>
                    Counting State
                </h1>

                <h1>
                    {this.state.count}
                </h1>
                <input type="button" value="Count -" onClick={this.onCountMin} />
                <input type="button" value="Count +" onClick={this.onCount} />
            </div>
        )
    }
}

export default State2