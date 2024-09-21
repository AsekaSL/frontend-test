function UserTable({ users, setSelectedUser, setIsEdit, deleteUser }) {
    return(
        <div className="Details-container">
            <p className="title">
                Student details
            </p>
            {
                users.map(user => {
                    return(
                        <div className="cart-container">
                            <div className="id-box">{user.id}</div>
                            <div className="name-box"> &nbsp; {user.name}</div>
                            <button className="update-button" onClick={() => {
                                setSelectedUser({id: user.id, name: user.name});
                                setIsEdit(true);
                                }}>Update</button>
                            <button className="delete-button" onClick={() => { window.confirm('Are you sure ?') && deleteUser({id: user.id})}}>Delete</button>
                        </div>
                    );
                })
            }
        </div>
    );
}   

export default UserTable;