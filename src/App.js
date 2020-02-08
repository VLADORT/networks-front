import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            networks: []
        }

    };

    componentDidMount() {
        fetch('http://localhost:9091/api/node/',
            {
                mode: 'cors',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then((response) => response.json())
            .then(json => this.setState({networks: json}));
    }

    render() {
        let {networks} = this.state;
        return (
            <div className="App">
                <ul>
                    {networks.map(n=>
                        <li id={n.id}>
                          {n.id}
                        </li>
                    )}
                </ul>
            </div>
        );

    }
}

export default App;
