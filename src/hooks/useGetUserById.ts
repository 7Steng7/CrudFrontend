import { useState, useEffect } from "react";
import { UserInfo } from "../types/types.js";
import { updateUser, getUserById } from '../services/api';

export function useGetUserById(userId : string, refresh: () => void, onClose: () => void) {
    const [dataUser, setDataUser] = useState<UserInfo>();
    const [editableUser, setEditableUser] = useState<UserInfo | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const userDataFetched = await getUserById(userId);
                setDataUser(userDataFetched);
                setEditableUser(userDataFetched);
            } catch (error) {
                console.error('Error fetching user by id:', error);
            }
        };
            getData();
    }, [userId]);

    const putData = async () => {
        try {
            const userDataFetched = await updateUser(editableUser);
            setDataUser(userDataFetched);
        } catch (error) {
            console.error('Error fetching user by id:', error);
        }
        refresh();
        onClose();
    };
     
    return { dataUser, editableUser, setEditableUser, putData};
}