import { useEffect, useState } from "react";
import UserForm from "./UserForm.js";
import UserTable from "./UserTable.js";
import axios from "axios";

function User() {

    const [users, setUsers] = useState([]);
    const [isAdd, setIsAdd] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = () => {
        axios.get('http://localhost:3001/users')
        .then(response => {
            setUsers(response.data);
            setIsAdd(false);
            setIsEdit(false);
        })
        .catch(error => {
            console.log(error);
        });
    }

    const addUser = (data) => {
        axios.post('http://localhost:3001/createuser', data)
            .then(response => {
                setIsAdd(true);
                getUsers();
            })
            .catch(error => {
                console.log(error);
            });
    };

    const updateUser = (data) => {
        axios.put('http://localhost:3001/updateuser',data)
            .then(response => {
                setIsAdd(true);
                getUsers();
            })
            .catch(error => {
                console.log(error);
            });
    };

    const deleteUser = (data) => {
        console.log(data.id);
        axios.delete(`http://localhost:3001/deleteuser?id=${data.id}`)
            .then(response => {
                getUsers();
            })
            .catch(error => {
                console.log(error);
            });
    }


    return(
        <div>
            <UserForm addUser={addUser} isAdd={isAdd} selectedUser={selectedUser} isEdit={isEdit} updateUser={updateUser}/>
            <UserTable users={users} setSelectedUser={(data) => setSelectedUser(data)} setIsEdit={setIsEdit} deleteUser={deleteUser}/>
        </div>
    );
}

export default User;