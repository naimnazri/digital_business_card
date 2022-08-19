import React from "react"
import ReactDOM from "react-dom"

import ProfilImage from "./profilImage"
import Content from "./content"
import Footer from "./footer"


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
