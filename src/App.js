import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Node from "./components/Node";

// const App = () => {
//     const [networks, setNetworks] = React.useState([]);
//     useEffect(() => {
//             fetch('http://localhost:9091/api/node/',
//                 {
//                     mode: 'cors',
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Accept': 'application/json'
//                     }
//                 })
//                 .then((response) => response.json())
//                 .then(json => setNetworks(json));
//         }
//         );
//     return (
//         <div className="App">
//             <ul>
//                 {networks.map(n =>
//                     <li id={n.id}>
//                         {n.id}
//                     </li>
//                 )}
//             </ul>
//         </div>
//     );
// };

class App extends React.Component {
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
                <div>{networks.map(n => <Node node={n} />)}</div>
            </div>
        );

    }
}

export default App;
