import React, {useEffect} from 'react';
import './App.css';
import NetworkTable from "./components/NetworkTable"


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

    const deleteNetwork = id => {
        setNetworks(networks.filter(user => user.id !== id));
        fetch('http://localhost:9091/api/network/' + id,
            {
                mode: 'cors',
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then((response) => response.json())
    };

    return (
        <div className="container">
            <h1>Network Management application</h1>
            <div className="d-flex justify-content-around">
                {/*<div className="flex-large">*/}
                {/*    <h2>Add network</h2>*/}
                {/*</div>*/}
                <div className="flex-large">
                    <h2>View networks</h2>
                    <NetworkTable deleteNetwork={deleteNetwork} networks={networks}/>
                </div>
            </div>
        </div>
    );

};

export default App;
