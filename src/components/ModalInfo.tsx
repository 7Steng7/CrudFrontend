import React, { useEffect , useState } from 'react';
import { UserInfo , ModalInfoProps } from '../types/types';
import { getUserById } from '../services/api';

export default function ModalInfo({ idUser, onClose }: ModalInfoProps) {

    const [dataUser, setDataUser] = useState<UserInfo>();

    useEffect(() => {
        const getData = async () => {
            try {
                const userDataFetched = await getUserById(idUser);
                setDataUser(userDataFetched);
            } catch (error) {
                console.error('Error fetching user by id:', error);
            }
        };
        getData();
    }, [idUser]);

    if (!dataUser) {
        return null;
    }
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-black p-6 rounded-lg shadow-lg max-w-xl w-5/6 ">
                <h2 className="text-xl font-bold mb-4">Información del Usuario</h2>
                {dataUser ? (
                    <div className='flex flex-col w-full'>
                        <div className='flex flex-row justify-between align-center'>
                            <p>Id: </p>
                            <p>{dataUser.id}</p>
                        </div>
                        <div className='flex flex-row justify-between align-center'>
                            <p>Título: </p>
                            <p>{dataUser.title} </p>
                        </div>
                        <div className='flex flex-row justify-between align-center'>
                            <p>Nombres: </p>
                            <p> {dataUser.firstName} </p>
                        </div>
                        <div className='flex flex-row justify-between align-center'>
                            <p>Apellidos: </p>
                            <p> {dataUser.lastName}</p>
                        </div>
                        <div className='flex flex-row justify-between align-center'>
                            <p>Imagen: </p>
                            <p> {dataUser.picture}</p>
                        </div>
                        <div className='flex flex-row justify-between align-center'>
                            <p>Género: </p>
                            <p> {dataUser.gender}</p>
                        </div>
                        <div className='flex flex-row justify-between align-center'>
                            <p>Correo eléctronico: </p>
                            <p> {dataUser.email}</p>
                        </div>
                        <div className='flex flex-row justify-between align-center'>
                            <p>Fecha de nacimiento: </p>
                            <p> {new Date(dataUser.dateOfBirth).toLocaleDateString()} </p>
                        </div>
                        <div className='flex flex-row justify-between align-center'>
                            <p>Telefono: </p>
                            <p> {dataUser.phone}</p>
                        </div>
                    </div>
                ) : (
                    <p>Cargando...</p>
                )}
                <button
                    onClick={onClose}
                    className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                    Cancelar
                </button>
            </div>
        </div>
    );
}


        