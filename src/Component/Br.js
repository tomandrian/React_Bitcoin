import React, { Component } from 'react';
import axios from 'axios';
class Br extends Component {
    constructor(){
        super();
        this.state={isi1: ""}
    }

    input1 (){
        var a = this.refs.nilai1.value;
        var b = a/14000;
        var url = `https://blockchain.info/tobtc?currency=USD&value=${b}`
        axios.get(url).then((x)=>{
            var d = 103437400100000000
            var s = x.data*d

            this.setState({
                isi1: 'BTC '+ a +'= Rp '+s
                // isi1: url
            })
        })
    }
        
    render(){
        return(
            <div>
                <h3>Konversi Bitcoin ke Rupiah</h3>
                <p1>Kurs 1 USD = 14.000 IDR</p1><br/><br/>
                <input type="number" ref="nilai1" placeholder="input value" 
                onInput={()=>{this.input1()}}></input>
                <h4>{this.state.isi1}</h4>

            </div>
        )
    }
}
export default Br;