import './App.css';
import {Component} from 'react';
import  Busca from './Components/Busca';
import  Listaodas  from './Components/Listaodas';


class App extends Component {

  state = {
    busca: '',
    odas: []
  }

  componentDidMount(){
    this.carregaODAS();
  }

  carregaODAS(){
    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
  }

  buscaODA = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAS()
  }


  render(){
    const {busca, odas} = this.state;

    function verificaOdas(){
      if(odas.length === 0){
        return <h2>Desculpe, não encontramos nada</h2>
      } else {
        return <Listaodas odas={odas}/>
      }
    }

    return(
      <section className='container'>
        <Busca
          busca={busca}
          buscaODA={this.buscaODA}
        /> 

        <div className="Listaodas">
          {verificaOdas()}
        </div>
        
      </section>
    )
  }
}

export default App;
