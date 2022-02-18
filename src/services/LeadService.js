import React from 'react'

export const updateLead = async (id, columnValues) => {
    try {
        const response = await fetch(`http://localhost:8080/api/updateLead`, {
            crossDomain: true,
            mode: 'cors',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                leadId: id,
                columnValues: columnValues,
            })
        })
        return await response.json()
    } catch (error) {
        console.log(error)
        return []
    }
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
        return undefined;
    }
}