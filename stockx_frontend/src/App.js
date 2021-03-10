import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import ProductsList from "./components/products-list.component";
import EditProduct from "./components/edit-product.component";
import CreateProduct from "./components/create-product.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Route path="/" exact component={ProductsList}/>
      <Route path="/edit/:id" exact component={EditProduct}/>
      <Route path="/create" exact component={CreateProduct}/>
      <Route path="/user" exact component={CreateUser}/>
    </Router>
  );
}

export default App;