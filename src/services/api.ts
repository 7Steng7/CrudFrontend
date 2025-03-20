
import { getUsers } from "../types/types";
export const getPaginatedUsers = async (params: getUsers) => {
 try {
  const response = await fetch(`https://dummyapi.io/data/v1/user?page=${params.page}&limit=${params.limit}`, {
    headers: {
     'app-id': '63473330c1927d386ca6a3a5',
    },
  });
  if (!response.ok) {
   throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }
  const data = await response.json();
  return data;
 } catch (error) {
  console.error('Error fetching data:', error);
  throw error;
 }
}

//crud
export const getUserById = async (id: string) => {
    try {
        const response = await fetch(`https://dummyapi.io/data/v1/user/${id}`, {
            headers: {  
                'app-id': '63473330c1927d386ca6a3a5',
            },
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user by id:', error);
        throw error;
    }
}

export const createUser = async (user: any) => {
    try { 
       const response = await fetch('https://dummyapi.io/data/v1/user/create', {
           method: 'POST',
           headers: {
               'app-id': '63473330c1927d386ca6a3a5',
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(user),
       }); 
   
       if (!response.ok) {
           throw new Error(`Error: ${response.status} - ${response.statusText}`);
       }
       const data = await response.json();
       return data;
    } catch (error) {
       console.error('Error creating user:', error);
       throw error;
    }
}

export const updateUser = async (user: any) => {
    try { 
        const response = await fetch(`https://dummyapi.io/data/v1/user/${user.id}`, {
            method: 'PUT',
            headers: {
                'app-id': '63473330c1927d386ca6a3a5',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        }); 

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
}

export const deleteUser = async (id: string) => {
    try { 
        const response = await fetch(`https://dummyapi.io/data/v1/user/${id}`, {
            method: 'DELETE',
            headers: {
                'app-id': '63473330c1927d386ca6a3a5',
            },
        }); 

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}
