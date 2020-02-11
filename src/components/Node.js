import React from "react";
import {render} from "react-dom";

class Node extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>id: {this.props.node.id} </div>
                <span> type: {this.props.node.type}</span>
                <span>name: {this.props.node.name}</span>
                <span>description: {this.props.node.description}</span>
                {/*<span>params: {this.props.node.params}</span>*/}
                <div>children: {this.props.node.children.map(n => <Node node={n}/>)}</div>
            </div>
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
