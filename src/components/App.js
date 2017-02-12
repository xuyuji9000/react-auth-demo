import React, { Component } from "react";
class App extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>This is an App.</div>
                {this.props.children}
            </div>
        );
    }
}

export default App;
