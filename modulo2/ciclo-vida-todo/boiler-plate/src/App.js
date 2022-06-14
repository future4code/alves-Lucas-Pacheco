import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(), 
          texto: 'Lava Roupa',
          completa: false
        },

        {
          id: Date.now(),
          texto: 'Varrer a Casa',
          completa: false 
        },

        {
          id: Date.now(), 
          texto: 'Atualizar ficha',
          completa: true
        },

      ],
      inputValue: '',
      filtro: 'pendentes'
    }

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas) )

  };

  componentDidMount() {
    const tarefa = localStorage.getItem("tarefas")
    const tarefaConvertida = JSON.parse(tarefa)
    this.setState({
      tarefas: tarefaConvertida
    })

  };

  onChangeInput = (event) => {
    this.setState({inputValue:  event.target.value})

  }

  criaTarefa = () => {

    const novaTarefa = {
          id: Date.now(), 
          texto: this.state.inputValue,
          completa: false 
    }

    const atualizadorDeTarefas = [...this.state.tarefas, novaTarefa]

    this.setState ({
      tarefas: atualizadorDeTarefas,
      inputValue: ""
    })

  }

  selectTarefa = (id) => {
    const AlterarTarefas =  this.state.tarefas.map((estado) => {
      if( id === estado.id) {
        const novoEstado = {
         ...estado,
         completa: !estado.completa
        }
        return novoEstado

        
      } else {
        return estado 

      }
    })

    this.setState({
      tarefas: AlterarTarefas
    })

  }

  onChangeFilter = (event) => {
    this.setState({
      filtro: event.target.value
    })

  }


  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
