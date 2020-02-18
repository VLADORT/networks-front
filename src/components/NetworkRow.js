import React from "react";
import Node from "./Node";

class NetworkRow extends React.Component {
    //todo DOES NOT WORK HIDING OF NODES
    constructor(props) {
        super(props);
        this.state = {
            isNodesVisible: false,
            network: props.network
        };
        this.handleViewNodes = this.handleViewNodes.bind(this)
    }

    handleViewNodes() {
        this.setState({isNodesVisible: !this.isNodesVisible})
    }

    render() {
        return (
            <tr key={this.props.network.id}>
                <td>{this.props.network.id}</td>
                <td>{this.props.network.type}</td>
                <td>{this.props.network.name}</td>
                <td>{this.props.network.description}</td>
                <td>
                    <button className="button"
                            onClick={this.handleViewNodes}>
                        {this.state.isNodesVisible ? "Hide nodes" :
                            "View nodes"}
                    </button>
                    {this.state.isNodesVisible && <Node node={this.props.network}/>}
                </td>
                <td>
                    <button className="button">Edit</button>
                    <button className="button">Delete</button>
                </td>
            </tr>
        )
    }
}

export default NetworkRow
