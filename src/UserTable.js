function UserTable({ users }) {
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
                            <button className="update-button">Update</button>
                            <button className="delete-button">Delete</button>
                        </div>
                    );
                })
            }
        </div>
    );
}   

export default UserTable;