import React, {useReducer, useState} from "react";

const AddNetworkForm = (props) => {
    const initialState = {
        id: "",
        type: "NETWORK",
        name: "",
        description: "",
        params: {},
        children: []
    };

    const [state, setState] = useState(initialState);


    const changeHandler = (event) => {
        event.persist();
        setState(inputs => ({...inputs, [event.target.name]: event.target.value}))
    };

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
            props.addNetwork(state);
            setState(initialState);
        }
    };

    return (
        <form>
            <div className="form-group d-flex flex-md-column justify-content-center align-items-center">
                <label>Id</label>
                <input value={state.id} className="form-control" type="text" name="id" onChange={changeHandler}/>
                <label>Name</label>
                <input value={state.name} className="form-control" type="text" name="name"
                       onChange={changeHandler}/>
                <label>Description</label>
                <input value={state.description} className="form-control" type="text" name="description"
                       onChange={changeHandler}/>
                <br/>
                <button className="button btn-primary btn-lg" type={"submit"} onClick={handleSubmit}>Add new network
                </button>
            </div>
        </form>
    )
};
export default AddNetworkForm;
