import React, {useEffect} from 'react';
import logo from './logo.svg';
import Node from "./Node";

class Network extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            networks: []
        }

    };

    componentDidMount() {
        fetch('http://localhost:9091/api/network/',
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
                <div>{networks.map(n => <Node node={n}/>)}</div>
            </div>
        );

    }
}

export default Network;
