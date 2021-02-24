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