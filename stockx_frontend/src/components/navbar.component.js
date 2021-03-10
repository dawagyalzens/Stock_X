import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render(){
        return(
            // <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            //     <div class="container-fluid">
            //     <Link to="/" className="navbar-brand">StockX</Link>
            //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            //         <span class="navbar-toggler-icon"></span>
            //         </button>
            //         <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            //         <ul class="navbar-nav">
            //             <li class="nav-item">
            //             <a class="nav-link active" aria-current="page" href="#">Contact</a>
            //             </li>
            //             <li class="nav-item">
            //             <a class="nav-link" href="#">Pricing</a>
            //             </li>
            //             <li class="nav-item">
            //             <a class="nav-link" href="#">Download</a>
            //             </li>
            //         </ul>
            //         </div>
            //     </div>
            // </nav>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">StockX</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Products</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Product Log</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}