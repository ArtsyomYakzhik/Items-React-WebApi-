import React, { useState, useEffect } from 'react';
import './App.css';
import ItemsList from './components/ItemsList'
import Home from './components/Home';
import Nav from './components/Nav'
import AddItem from './components/AddItem'
import { Switch, Route } from 'react-router-dom';

const url = 'https://localhost:44337/api/items';

function App() {
  const getItems = async () => {
    let request = await fetch(url, {
    });

    setItems(await  request.json());
  }
  const [items, setItems] = useState([]);

  useEffect(()=>{
    getItems();
  });

const addItem = async (item) => {
  let request = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(item)
  });
  console.log(await request.json());
  getItems();
}

const deleteItem = async (id) => {
  let request = await fetch(url + '?id=' + id, {
    method: 'DELETE'
  });
  getItems();
}
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/items' render={() => <ItemsList items={items} deleteItem = {deleteItem}/>}/>
        <Route path='/addItem' render={() => <AddItem addItem = {addItem}/>}/>
      </Switch>
    </div>
  );
}

export default App;

