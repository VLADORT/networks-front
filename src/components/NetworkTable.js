import React from "react";
import NetworkRow from "./NetworkRow";

const NetworkTable = (props) => {

    return (
        <table className="table table-dark">
            <thead>
            <tr>
                <th>Id</th>
                <th>Type</th>
                <th>Name</th>
                <th>Description</th>
                <th>Nodes</th>
            </tr>
            </thead>
            <tbody>
            {props.networks.length > 0 ? (
                props.networks.map(network => (
                    <NetworkRow id={network.id} key={network.id} network={network} deleteNetwork={props.deleteNetwork}/>))
            ) : (
                <tr>
                    <td colSpan={4}>No networks</td>
                </tr>
            )}
            </tbody>
        </table>
    )
};

export default NetworkTable

