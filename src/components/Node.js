import React from "react";
import {render} from "react-dom";

class Node extends React.Component {
    constructor(props) {
        super(props);
    }

//TODO: add rendering params
    render() {
        return (
            <ul>
                <li>id: {this.props.node.id} </li>
                <li> type: {this.props.node.type}</li>
                <li>name: {this.props.node.name}</li>
                <li>description: {this.props.node.description}</li>
                <br/>
                {/*<span>params: {this.props.node.params}</span>*/}
                {this.props.node.children.length > 0 ?
                    <ul>children: {this.props.node.children.map(n => <Node node={n}/>)}</ul> : ""
                }
            </ul>
        )


    }

}


// const Node = (props) => {
//     const {node} = props;
//     return (
//         <div>{node.id}</div>
//     )
// };

class NodeEntity {

}

export default Node
