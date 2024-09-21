import React,{useState} from 'react';

function UserForm() {

    const [id, setId ] = useState(0);
    const [name, setName] = useState("");

    return(
        <div className="container">
            <div className="id-container">
                <label className="id">
                    ID :
                </label>
                <input type="number" placeholder="Enter id" value={id} onChange={(e) => {setId(e.target.value)}}></input>
               
            </div>
            <div> 
                <label className="name-container">
                    Name :
                </label>
                <input type="text" placeholder="Enter Name" value={name} onChange={(e) => {setName(e.target.value)}}></input>
            </div>
            <button className="add-button">
                Add
            </button>
        </div>
    );
}

export default UserForm;