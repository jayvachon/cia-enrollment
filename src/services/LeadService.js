import React from 'react'

export const updateLead = (id, column, value) => {
    return fetch(`http://localhost:8080/api/updateLead`, {
        crossDomain: true,
        mode: 'cors',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            leadId: id,
            column: column,
            value: value,
        }),
    })
    .catch(err => {
        console.log(err)
    });
}

export const findUser = async (email) => {
    try {
        const response = await fetch(`http://localhost:8080/api/lead?email=${email}`,
            {
                crossDomain: true,
                headers: {
                  'Content-Type': 'application/json',
                }
            });
        return await response.json();
    } catch (error) {
        console.log(error);
        return [];
    }
}