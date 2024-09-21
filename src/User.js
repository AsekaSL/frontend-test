import UserForm from "./UserForm.js";
import UserTable from "./UserTable.js";

function User() {

    const users = [{
        id: 1,
        name: "Saranga"
    },{
        id: 2,
        name: "Ravindu"
    },{
        id: 3,
        name: "Rukshan"
    }];


    return(
        <div>
            <UserForm />
            <UserTable users={users}/>
        </div>
    );
}

export default User;