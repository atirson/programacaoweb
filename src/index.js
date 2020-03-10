import React from 'react';

import ReactDOM from 'react-dom';

import PlayerDetails2 from './PlayerDetail2';

import 'bootstrap/dist/css/bootstrap.css'

//Passando de Função para class
class App extends  React.Component {  
      
      Vetor = [
        {
            nome : 'Athirson',
            pais : 'Brasil',
            time : 'Flamengo'
        },
        {
                  nome : 'Gabigol',
                  pais : 'Brasil',
                  time : 'Flamengo'
                  },
            {
                  nome : 'Ronaldinho',
                  pais : 'Paraguai',
                  time : 'Badaras'
                  }
      ]


      constructor(props){

            super(props);

            console.log(this);

            this.state = {
                  indice: 0
            }

      }

      incrementarIndice = (event) => {
        if (this.state.indice<=this.Vetor.length-2)
        {
            this.setState({
                  indice: this.state.indice+1
            })
        }
      }

      decrementarIndice = (event) => {
            
        if (this.state.indice!==0) {
            this.setState({
                      indice: this.state.indice-1  
            })
        }
        
      }
      
      render(){
             return(
                   <div className="container">

                        <br/>
                        <PlayerDetails2 Vetor={this.Vetor[this.state.indice]}>
                        </PlayerDetails2>
                        <br/>

                        <button type="button" className ="btn btn-danger" onClick = {this.decrementarIndice} >Anterior</button>
                            
                        <button type="button" className ="btn btn-primary"  onClick = {this.incrementarIndice} >Proximo</button>

                   </div>    
            );      
      }
}

ReactDOM.render(<App/>, document.querySelector('#root'));






