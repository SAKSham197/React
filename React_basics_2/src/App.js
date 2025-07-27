import React from 'react';
import './App.css';
import Products from './components/Products';
import NewProduct from './components/NewProduct';


function App() {
  const products = [
    {
      id:'p1',
      title:'Prod1',
      amount:100,
      date:new Date(2021,8,10)
    },
    {
      id: 'p2',
      title: 'Prod2',
      amount: 150,
      date: new Date(2021, 9, 12)
    },
    {
      id: 'p3',
      title: 'Prod3',
      amount: 200,
      date: new Date(2021, 10, 5)
    },
    {
      id: 'p4',
      title: 'Prod4',
      amount: 75,
      date: new Date(2021, 11, 20)
    }  
  ]
  return (
    <div className="App">
      <NewProduct/>
      <Products items={products}></Products>
    </div>

  );
}

export default App;
