import React, {
    Component
} from "react"

class NavBar extends Component{
    render(){
        return (
            <nav className="navbar">
              <div className="navbar-brand">
                <img src = "/images/ironhack-logo.svg" width = "112" height = "28"/>
                <img src="/images/menu-top.svg"/>
              </div>
            </nav>
        )
    }
}


export default NavBar;