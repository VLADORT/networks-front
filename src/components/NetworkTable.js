import React from "react";
import Node from "./Node";
import NetworkRow from "./NetworkRow";

class NetworkTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table className="table">
                <thead>
                <th>Id</th>
                <th>Type</th>
                <th>Name</th>
                <th>Description</th>
                <th>Nodes</th>
                </thead>
                <tbody>
                {this.props.networks.length > 0 ? (
                    this.props.networks.map(network => (
                       <NetworkRow network={network}/>
                    ))
                ) : (
                    <tr>
                        <td colSpan={4}>No networks</td>
                        )
                    </tr>
                )}
                </tbody>
            </table>
        )
    }
}

export default NetworkTable

