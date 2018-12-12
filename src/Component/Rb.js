import React, { Component } from 'react';
import axios from 'axios';


class Rb extends Component {
    constructor(){
        super();
        this.state={isi: ""}
    }

    input(){
        var a = this.refs.nilai.value;
        var b = a/14000;
        var url = `https://blockchain.info/tobtc?currency=USD&value=${b}`
        axios.get(url).then((x)=>{
            this.setState({
                isi: 'Rp. '+a+'= BTC '+x.data
                // isi: x.data
            })
        })
    }

        
    render(){
        return(
            <div>
                <h3>Konversi Rupiah ke Bitcoin</h3>
                <p1>Kurs 1 USD = 14.000 IDR</p1><br/><br/>
                <input type="number" ref="nilai" 
                placeholder="Input Your value" onInput={()=>{this.input()}} />
                <h4>{this.state.isi}</h4>
            </div>
        )
    }
}
export default Rb;