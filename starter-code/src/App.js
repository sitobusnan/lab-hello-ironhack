import React, {
    Component
} from "react";

import Navbar from './components/NavBar';
import BodyMain from './components/BodyMain';
import FooterPage from './components/FooterPage';
import '../public/stylesheets/style.css';

class App extends Component {
    render() {
        return ( < div className = "App" >
                <Navbar/>
                <BodyMain/>
                <FooterPage/>
            </div>
        );
    }
}

export default App;