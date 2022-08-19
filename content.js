import React from "react"
import Info from "./info"
import About from "./about"
import Interest from "./interest"

export default function Content() {
    return (
        <div className="content">
            <Info />
            <About />
            <Interest />
        </div>
    )
}