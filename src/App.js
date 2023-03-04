import React from "react"
import Header from "./components/Header"
import Image from "./components/image"
import logo from "./img/mention-avatar-01.png"


class App extends React.Component {
    helpText = "Help text!"
    render() {
        return (<div className="first">
            <Header title="Шапка сайта" />
            <h1>{this.helpText}</h1>
            <input placeholder={this.helpText}
                onClick={this.inputClick} onMouseEnter={this.mouseOver} />
            <p>{this.helpText === "Help text" ? "Yes" : "No"}</p>
            <Image image = {logo}/>
        </div>)
    }

    inputClick() { console.log("Clicked") }
    mouseOver() { console.log("Mouse over") }
}

export default App