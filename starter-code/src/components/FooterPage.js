import React, {
    Component
} from "react"

import FooterElement from "./FooterElement";


class FooterPage extends Component{

    columns = [{
        title: 'Declarative',
        maintext: 'React makes it painless to create',
        img: '/images/icon1.png'
    },
    {
        title: 'Components',
        maintext: 'Build encapulated components that manage their state',
        img: '/images/icon2.png'
    },
    {
        title: 'Single-Way',
        maintext: 'A set of immutable values are passed to the components',
        img: '/images/icon3.png'
    },
    {
        title: 'JSX',
        maintext: 'Statically-typed, designed to run on medern browsers',
        img: '/images/icon4.png'
    }] 

    render(){
        
        let footerElements = this.columns.map((element) =>  {
            return <FooterElement img={element.img} title={element.title} maintext={element.maintext} />;
        })
        return(
        
            
               <div className="footerPage">
                {footerElements}
               </div>
            
            

        )
    }
}



export default FooterPage;