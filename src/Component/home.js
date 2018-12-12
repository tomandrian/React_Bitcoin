import React, { Component } from 'react';
import '../Component/style.css';
import axios from 'axios';
class Home extends Component {
        constructor(){
            super();
            this.state={
                audbuy: '',
                audsell: '',
                eurbuy: '',
                eursell: '',
                gbpbuy: '',
                gbpsell: '',
                jpybuy: '',
                jpysel: '',
                usdbuy: '',
                usdsell: ''
            }
        }

        componentDidMount(){
            var url ="https://blockchain.info/ticker"
            axios.get(url).then((x)=>{
                this.setState({
                audbuy: x.data.AUD.buy,
                audsell: x.data.AUD.sell,
                eurbuy: x.data.EUR.buy,
                eursell: x.data.EUR.sell,
                gbpbuy: x.data.GBP.buy,
                gbpsell: x.data.GBP.sell,
                jpybuy: x.data.JPY.buy,
                jpysell: x.data.JPY.sell,
                usdbuy: x.data.USD.buy,
                usdsell: x.data.USD.sell
                })
            })
        }

    render(){
        

      

        return(
            <div>
                <h1>Harga Bitcoin Hari Ini</h1>
                <table class="table table-hover" style={{width:'800px',textAlign:'center'}} >
                    <thead class="head1">
                        <tr>
                        <th>Mata Uang</th>
                        <th>Harga Beli Bitcoin</th>
                        <th>Harga Jual Bitcoin</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Dollar Australia</td>
                        <td>{this.state.audbuy}</td>
                        <td>{this.state.audsell}</td>
                        </tr>

                        <tr>
                        <td>Dollar Eropa</td>
                        <td>{this.state.eurbuy}</td>
                        <td>{this.state.eursell}</td>
                        </tr>

                        <tr>
                        <td>Poundsterling Inggris</td>
                        <td>{this.state.gbpbuy}</td>
                        <td>{this.state.gbpsell}</td>
                        </tr>

                        <tr>
                        <td>Yen Jepang</td>
                        <td>{this.state.jpybuy}</td>
                        <td>{this.state.jpysell}</td>
                        </tr>

                        <tr>
                        <td>Dollar Amerika</td>
                        <td>{this.state.usdbuy}</td>
                        <td>{this.state.usdsell}</td>
                        </tr>
                    </tbody>
                </table>
                


                

            </div>
        )
    }
}
export default Home;