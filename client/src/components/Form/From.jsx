import React from 'react';

const From = ({data}) => {
    const {name, email, password, confirmPassword }=data;
    return (
        <div>
            <h2>Our All Data</h2>
            <ul>
                <li>{name}</li>
                <li>{email}</li>
                <li>{password}</li>
                <li>{confirmPassword}</li>
            </ul>
            
        </div>
    );
};

export default From;