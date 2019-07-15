import React, {
    Component
} from "react"

class NavBar extends Component{
    render(){
        return (
            <nav className="navbar">
              <div className="navbar-brand">
                <img className="logo" src = "/images/ironhack-logo.svg" width = "auto" height = "50"/>
                <img src="/images/menu-top.svg"/>
              </div>
            </nav>
        )
    }
}


export default NavBar;