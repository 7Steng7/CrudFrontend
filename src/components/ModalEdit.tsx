import { ModalEditProps } from '../types/types';
import { translateTitle } from '../services/translate';
import { useGetUserById } from '../hooks/useGetUserById';

export default function ModalEdit({ user, onClose, refresh }: ModalEditProps) {
    const TITLE_OPTIONS = ['mr','ms', 'mrs', 'miss', 'dr'];
    const GENDER_OPTIONS = ['male','female', 'other'];
    
    const userData = useGetUserById(user.id, refresh, onClose);

    if (!userData || !userData.dataUser) {
        return null;
    }
    const { dataUser, editableUser, setEditableUser, putData } = userData;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
        if (editableUser) {
            setEditableUser({
                ...editableUser,
                [name]: value,
            });
        }
    };

    if (!dataUser) {
        return null;
    }
    
    return (
        <main className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center">
            <aside className="bg-gray-200 p-6 rounded-lg shadow-lg max-w-xl w-5/6 ">
                <h2 className="text-xl font-bold mb-4 text-black" >Editar Usuario</h2>
                {dataUser ? (
                    <section className='flex flex-col w-full'>
                        <div className='flex flex-row justify-between align-center'>
                            <p className='text-black text-xl'>Id: </p>
                            <p className='text-black text-xl'>{dataUser.id}</p>
                        </div>
                        <div className='flex flex-row justify-between align-center'>
                            <p className='text-black text-xl'>Título: </p>
                            <select
                            name="title"
                            value={editableUser?.title || '' }
                            onChange={handleInputChange}
                            className="border rounded px-2 text-black text-xl"
                        >
                            {TITLE_OPTIONS.map((option) => (
                                <option key={option} value={option}>
                                    {translateTitle(option)}
                                </option>
                            ))}
                        </select>
                        </div>
                        <div className='flex flex-row justify-between align-center'>
                            <p className='text-black text-xl'>Nombres: </p>
                            <input type="text" name='firstName' value={editableUser?.firstName || ''} onChange={handleInputChange} className='text-black text-xl'/>
                        </div>
                        <div className='flex flex-row justify-between align-center'>
                            <p className='text-black text-xl'>Apellidos: </p>
                            <input type="text" name='lastName' value={editableUser?.lastName || ''} onChange={handleInputChange} className='text-black text-xl'/>
                        </div>
                        <figure className='flex flex-row justify-between align-center'>
                            <p className='text-black text-xl'>Imagen: </p>
                            <input type="text" name='picture' value={editableUser?.picture || ''} onChange={handleInputChange} className='text-black text-xl'/>
                        </figure>
                        <div className='flex flex-row justify-between align-center'>
                            <p className='text-black text-xl'>Género: </p>
                            <select
                            name="gender"
                            value={editableUser?.gender || ''}
                            onChange={handleInputChange}
                            className="border rounded px-2 text-black text-xl"
                        >
                            {GENDER_OPTIONS.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                            </select>
                        </div>
                        <div className='flex flex-row justify-between align-center'>
                            <p className='text-black text-xl'>Correo eléctronico: </p>
                            <input type="text" name='email' value={editableUser?.email || ''} onChange={handleInputChange} className='text-black text-xl'/>
                        </div>
                        <div className='flex flex-row justify-between align-center'>
                            <p className='text-black text-xl'>Fecha de nacimiento: </p>
                                <input
                                type="date"
                                name="dateOfBirth"
                                value={editableUser?.dateOfBirth ? new Date(editableUser.dateOfBirth).toISOString().split("T")[0] : ""}
                                onChange={handleInputChange}
                                className="border rounded px-2 text-black text-xl m-4"
                                />
                        </div>
                        <div className='flex flex-row justify-between align-center'>
                            <p className='text-black text-xl'>Telefono: </p>
                            <input type="number" name='phone' value={editableUser?.phone || ''} onChange={handleInputChange}  className='text-black text-xl'/>
                        </div>
                    </section>
                ) : (
                    <p>Cargando...</p>
                )}
                <button
                    onClick={putData}
                    className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 m-4"
                >
                    Guardar
                </button>
                <button
                    onClick={onClose}
                    className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 m-4"
                >
                    Cancelar
                </button>
            </aside>
        </main>
    );
}

