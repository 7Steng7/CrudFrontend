import { useState } from 'react';
import { UserInfo } from '../types/types';
import { createUser } from '../services/api';
import { translateTitle } from '../services/translate';

export default function ModalCreate({ onClose }: { onClose: () => void }) {

        const [newUser, setNewUser] = useState<UserInfo>({
            id: '', 
            title: '',
            firstName: '',
            lastName: '',
            picture: '',
            gender: '',
            email: '',
            dateOfBirth: '',
            phone: '',
            registerDate: '',
            updatedDate: '',
        });
        const TITLE_OPTIONS = ['mr','ms', 'mrs', 'miss', 'dr'];
        const GENDER_OPTIONS = ['male','female', 'other'];

        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            const { name, value } = e.target;
            setNewUser({
                ...newUser,
                [name]: value,
            });
        };
    

        const handleCreateUser = async () => {
            try {
                await createUser(newUser);
                onClose();
            } catch (error) {
                console.error('Error creating user:', error);
            }
        };

    return (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center">
        <div className="bg-black p-6 rounded-lg shadow-lg max-w-xl w-5/6 ">
            <h2 className="text-xl font-bold mb-4 text-white m-4" >Crear un usuario</h2>
            <div className='flex flex-col w-full'>
                    {/* Campo: Título */}
                    <div className='flex flex-row justify-between align-center mb-2'>
                        <p>Título: </p>
                        <select
                            name="title"
                            value={newUser.title}
                            onChange={handleInputChange}
                            className="border rounded px-2 text-black text-xl bg-white"
                        >
                            {TITLE_OPTIONS.map((option) => (
                                <option key={option} value={option}>
                                    {translateTitle(option)}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Campo: Nombres */}
                    <div className='flex flex-row justify-between align-center mb-2'>
                        <p>Nombres: </p>
                        <input
                            type="text"
                            name="firstName"
                            value={newUser.firstName}
                            onChange={handleInputChange}
                            className="border rounded px-2"
                        />
                    </div>

                    {/* Campo: Apellidos */}
                    <div className='flex flex-row justify-between align-center mb-2'>
                        <p>Apellidos: </p>
                        <input
                            type="text"
                            name="lastName"
                            value={newUser.lastName}
                            onChange={handleInputChange}
                            className="border rounded px-2"
                        />
                    </div>

                    {/* Campo: Imagen (URL) */}
                    <div className='flex flex-row justify-between align-center mb-2'>
                        <p>Imagen (URL): </p>
                        <input
                            type="text"
                            name="picture"
                            value={newUser.picture}
                            onChange={handleInputChange}
                            className="border rounded px-2"
                        />
                    </div>

                    {/* Campo: Género */}
                    <div className='flex flex-row justify-between align-center mb-2'>
                        <p>Género: </p>
                        <select
                            name="gender"
                            value={newUser.gender}
                            onChange={handleInputChange}
                            className="border rounded px-2 text-black text-xl bg-white"
                        >
                            {GENDER_OPTIONS.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Campo: Correo electrónico */}
                    <div className='flex flex-row justify-between align-center mb-2'>
                        <p>Correo eléctronico: </p>
                        <input
                            type="email"
                            name="email"
                            value={newUser.email}
                            onChange={handleInputChange}
                            className="border rounded px-2"
                        />
                    </div>

                    {/* Campo: Fecha de nacimiento */}
                    <div className='flex flex-row justify-between align-center mb-2'>
                        <p>Fecha de nacimiento: </p>
                        <input
                            type="date"
                            name="dateOfBirth"
                            value={newUser.dateOfBirth}
                            onChange={handleInputChange}
                            className="border rounded px-2"
                        />
                    </div>

                    {/* Campo: Teléfono */}
                    <div className='flex flex-row justify-between align-center mb-2'>
                        <p>Teléfono: </p>
                        <input
                            type="text"
                            name="phone"
                            value={newUser.phone}
                            onChange={handleInputChange}
                            className="border rounded px-2"
                        />
                    </div>
                </div>

                {/* Botones de acción */}
                <div className="flex justify-end mt-4">
                    <button
                        onClick={onClose}
                        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mr-2"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleCreateUser}
                        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                    >
                        Crear Usuario
                    </button>
                </div>
        </div>
    </div>
    );
}