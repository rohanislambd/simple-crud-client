import React, { useId } from 'react';

const UserDetailPage = async({params}) => {
    const {userId} = await params;

    const res = await fetch(`http://localhost:5000/users/${userId}`);

    const user = await res.json();

    // console.log(userId);
    return (
        <div>
            <h3>User Details:{userId}</h3>

            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserDetailPage;