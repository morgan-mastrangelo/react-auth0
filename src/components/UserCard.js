import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function UserCard(props) {
    const { user } = useAuth0();
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        <div className='card'>
            {
                isAuthenticated ?
                    <div className='content-container'>
                        <h1>User Info</h1>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                    </div>
                :
                    <div className='content-container'>
                        <h1>User Info</h1>
                        <p>Name: None</p>
                        <p>Email: None</p>
                    </div>
            }

            <div className='btn-container'>
                <button onClick={loginWithRedirect}>SIGN IN</button>
                <button>SIGN UP</button>
            </div>
        </div>
    );
}

export default UserCard;