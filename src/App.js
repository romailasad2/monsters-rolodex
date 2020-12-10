import React, { Component } from 'react';
import { CardList } from './Componentts/card-list/card-list.component';
import { Search } from './Componentts/search-box/search-box.component';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount(){
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => (response.json()))
    .then(users => this.setState({monsters: users}))
  }

  render(){
    const { monsters, searchField } = this.state;
    const filteredState = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      
    <div className="App">
      <h1>Monster Rolodex</h1>
      <Search placeholder="Ahh! You'r a MONSTER!" handleChange={e => {this.setState({searchField: e.target.value})}}/>
      <CardList monsters={filteredState} />
    </div>
  )
  }
}

export default App;
