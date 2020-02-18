import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Node from "./components/Node";
import NetworkTable from "./components/NetworkTable"

//TODO: useEffect() spams with requests

const App = () => {
    const [networks, setNetworks] = React.useState([]);

    useEffect(() => {
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
            .then(json => setNetworks(json))
    }, []);

    return (
        <div className="container">
            <h1>Network Management application</h1>
            <div className="d-flex justify-content-around">
                {/*<div className="flex-large">*/}
                {/*    <h2>Add network</h2>*/}
                {/*</div>*/}
                <div className="flex-large">
                    <h2>View networks</h2>
                    <NetworkTable networks={networks}/>
                </div>
            </div>
            {/*<ul>*/}
            {/*    {networks.map(n =>*/}
            {/*        <Node node={n}/>*/}
            {/*    )}*/}
            {/*</ul>*/}
        </div>
    );
};

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isSignedUp: false,
//             networks: []
//         }
//
//     };
//
//     componentDidMount() {
//          fetch('http://localhost:9091/api/network/',
//             {
//                 mode: 'cors',
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Accept': 'application/json'
//                 }
//             })
//             .then((response) => response.json())
//             .then(json => this.setState({networks: json}));
//     }
//
//     render() {
//
//     }
//
// }

export default App;
