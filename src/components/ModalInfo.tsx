import { useEffect , useState } from 'react';
import { translateTitle } from '../services/translate';
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
        <main className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center">
            <aside className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-5/6 ">
                <h2 className="text-xl font-bold mb-4 text-black">Información del Usuario</h2>
                {dataUser ? (
                    <section className='flex flex-col w-full text-black'>
                        <div className='flex flex-row justify-between align-center'>
                            <p>Id: </p>
                            <p>{dataUser.id}</p>
                        </div>
                        <div className='flex flex-row justify-between align-center'>
                            <p>Título: </p>
                            <p>{translateTitle(dataUser.title)} </p>
                        </div>
                        <div className='flex flex-row justify-between align-center'>
                            <p>Nombres: </p>
                            <p> {dataUser.firstName} </p>
                        </div>
                        <div className='flex flex-row justify-between align-center'>
                            <p>Apellidos: </p>
                            <p> {dataUser.lastName}</p>
                        </div>
                        <figure className='flex flex-row justify-between align-center'>
                            <p>Imagen: </p>
                            <p className="break-words max-w-[250px] truncate text-right underline">
                                {dataUser.picture}
                            </p>
                        </figure>
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
                    </section>
                ) : (
                    <p>Cargando...</p>
                )}
                <button
                    onClick={onClose}
                    className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                    Cancelar
                </button>
            </aside>
        </main>
    );
}


        