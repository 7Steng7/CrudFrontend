import { ModalDeleteProps } from '../types/types';
import { deleteUser } from '../services/api';

export default function ModalDelete ({ idUser, onClose, refresh }: ModalDeleteProps) {
    const deleteData = async () => {
        try {
            const userDataFetched = await deleteUser(idUser);
            console.log('Se eliminó el usuario:', userDataFetched);
            refresh();
        } catch (error) {
            console.error('Error fetching user by id:', error);
        }
        onClose();
    };

    return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center">
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg max-w-xl w-5/6 ">
            <p className='text-black text-lg '>Deseas eliminar el usuario {idUser}?</p>
            <button onClick={deleteData} className='text-lg m-4'>Si</button>
            <button onClick={onClose} className='text-lg m-4'>No</button>
        </div>
    </div>
    );
};