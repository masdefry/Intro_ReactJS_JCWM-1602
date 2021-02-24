import React from 'react'

class State3 extends React.Component{

    state = {
        nama: ''
    }

    sapa = () => {
        // Ambil value dari inputan
        let inputValue = this.refs.nama.value

        // Value dari inputan tinggal kita simpan kedalam state
        this.setState({nama: inputValue})
    }

    render(){
        if(this.state.nama === ''){
            return(
                <div>
                    <h1>
                        Aplikasi Sapa
                    </h1>
    
                    <h1>
                        Nama Belum Ada
                    </h1>
    
                    <input type="text" ref="nama" placeholder="Enter Your Name" />
                    &nbsp;
                    <input type="button" value="Sapa" onClick={this.sapa} />
                </div>
            )
        }

        return(
            <div>
                <h1>
                    Aplikasi Sapa
                </h1>

                <h1>
                    Hello {this.state.nama}
                </h1>
            </div>
        )
    }
}

export default State3