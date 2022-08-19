import React from "react"
import ReactDOM from "react-dom"

import ProfilImage from "./profilImage"
import Content from "./content"
import Footer from "./footer"

import './style.css';
import './bootstrap.min.css';
// import './inter.css';

function Card() {
    return (
        <div className="main-card">
            <ProfilImage />
            <Content />
            <Footer />
        </div>
    )
}

function Page() {
    return(
        <div className="main">
            <Card />
            
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
