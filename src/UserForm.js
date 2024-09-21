import React,{useEffect, useState} from 'react';

function UserForm({addUser, isAdd, selectedUser, isEdit, updateUser}) {

    const [id, setId ] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        setId(0);
        setName("");
    }, [isAdd]);

    useEffect(() => {
        setId(selectedUser.id);
        setName(selectedUser.name);
    },[selectedUser])

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
            <button className="add-button" onClick={() => isEdit ? updateUser({id, name}) : addUser({id, name})}>
                {
                    isEdit ? 'Update' : 'Add'
                }
            </button>
        </div>
    );
}

export default UserForm;