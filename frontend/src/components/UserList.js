import React from "react";

import UserCard from "./UserCard";

const UserList = ({ usersData }) => {
    return (
    <div>
        <table className="table align-middle bg-white" style={{marginBottom: '15rem', marginTop: '8rem', marginLeft: 'auto', marginRight: 'auto',width: "80%"}}>
            <thead className="bg-light">
                <tr>
                <th>Full Name / Email</th>
                <th>Birthday</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {usersData.map((user, index) => {
                            return (
                                <UserCard
                                    key={index}
                                    birthday={user.birthday}
                                    email={user.email}
                                    name={user.name}
                                    last_name={user.last_name}                        
                                    role={user.role}
                                    status={user.verified}
                                />
                            );
                        })}
            </tbody>
        </table>
    </div>

    );
};

export default UserList;