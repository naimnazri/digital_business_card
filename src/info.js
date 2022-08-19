import React from "react"

function Name() {
    return (
        <div>
            <div className="infoName">Naim Nazri</div>
        </div>
    )
}

function Role() {
    return (
        <div>
            <div className="infoRole">Frontend Developer</div>
        </div>
    )
}

function Website() {
    return (
        <div>
            <div className="infoWebsite">miy97.my</div>
        </div>
    )
}

function SocmedButton() {
    return (
        <div className="info-socmed">
            <a href="mailto: nazrinaim@gmail.com" target="_blank" rel="noreferrer" className="btn emailBtn ">
                Email
            </a>
            <a href="https://www.linkedin.com/in/naim-nazri-ba30a5174/" target="_blank" rel="noreferrer" className="btn linkedBtn ">
                LinkedIn
            </a>
        </div>
    )
}



export default function Info() {
    return (
        <div className="info">
            <Name />
            <Role />
            <Website />
            <SocmedButton />
        </div>
    )
}