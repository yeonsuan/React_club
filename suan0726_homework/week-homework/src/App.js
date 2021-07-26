import React from "react";
import logo from './logo.svg';
import './App.css';

import Start from "./Start";

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: "손가락"
        };
    }

    render () {
        return(
            <div className="App">
                <Start name={this.state.name}/>
            </div>
        );
    }
}
export default App;