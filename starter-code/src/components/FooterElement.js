import React from "react"

export default class FooterElement extends React.Component{
    render(){
        return (
            <div className="element">
                <img src={this.props.img}/>
                <h3>{this.props.title}</h3>
                <p>{this.props.maintext}</p>
            </div>
        )
    }
    
}