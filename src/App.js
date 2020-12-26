import { Component } from 'react'
import CardList from './components/card-list/CardList'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: '',
    }
  }
  //monster data fetched and passed into here
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
  }

  render() {
    return (
      <div className='App'>
        <input
          type='search'
          placeholder='Search monsters'
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    )
  }
}

export default App
