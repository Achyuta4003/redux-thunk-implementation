import React from 'react'

const User = ({ users }) => {

    return (
        <div>
            <h1>User comp</h1>
            <table border='1'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>

                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td></tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default User
