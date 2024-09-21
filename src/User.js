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
        axios.get(process.env.REACT_APP_ENDPOINT + '/users')
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
        axios.post(process.env.REACT_APP_ENDPOINT + '/createuser', data)
            .then(response => {
                setIsAdd(true);
                getUsers();
            })
            .catch(error => {
                console.log(error);
            });
    };

    const updateUser = (data) => {
        axios.put(process.env.REACT_APP_ENDPOINT + '/updateuser',data)
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
        axios.delete(process.env.REACT_APP_ENDPOINT + `/deleteuser?id=${data.id}`)
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