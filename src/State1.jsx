import React from 'react'

let namaStudent = 'Tommy'

class State1 extends React.Component{

    state = {
        nama: 'Defryan'
    }

    ubahNama = () => {
        this.setState({nama: 'Fajri'})
    }

    ubahNamaVar = () => {
        namaStudent = 'Lukas'
        console.log(namaStudent)
    }

    render(){
        console.log('Render')
        return(
            <div>
                <h1>
                    {this.state.nama}
                </h1>
                <input type="button" value="Ubah Nama" onClick={this.ubahNama} />

                <br />
                <hr />
                <br />

                <h1>
                    {namaStudent}
                </h1>
                <input type="button" value="Ubah Nama Variable" onClick={this.ubahNamaVar} />
            </div>
        )
    }
}

export default State1