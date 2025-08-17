import { useState } from 'react'
import './App.css'
import { useUsers } from './hooks/useUsers';
import { User } from './types/types';
import { translateTitle } from './services/translate';
import ModalInfo from './components/ModalInfo';
import ModalEdit from './components/ModalEdit';
import ModalDelete from './components/ModalDelete';
import ModalCreate from './components/ModalCreate';

function App() {

  const [ modalInfo , setModalInfo ] = useState<string | null>(null);
  const [ modalEdit , setModalEdit ] = useState<User | null>(null);
  const [ modalDelete , setModalDelete ] = useState<string | null>(null);
  const [ modalCreate , setModalCreate ] = useState<boolean>(false);

  const { firstData, pageBack, pageNext, actualPage, totalPages } = useUsers();

  const openModalInfo = (id: string) => {
    setModalInfo(id);
  };

  const closeModalInfo = () => {
    setModalInfo(null);
  };

  const openModalEdit = (user: User) => {
      setModalEdit(user);
  };

  const closeModalEdit = () => {
    setModalEdit(null);
  };

  const openModalDelete = (id: string) => {
    setModalDelete(id);
  };

  const closeModalDelete = () => {
    setModalDelete(null);
  };

  const closeModalCreate = () => {
    setModalCreate(false);
  };


  return (
    <>
    <div className='w-full flex justify-center items-center'>
        <h1 >Módulo de Consulta y Registros de Usuarios al sistema</h1>
        <img className="w-20 h-20 p-1 m-4 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671151.jpg?t=st=1742350863~exp=1742354463~hmac=5403c1870b0baf07c8bc1286837b1a4aa6514f363b214b0bc20a3616ca4fa534&w=740" alt="Bordered avatar image" />
    </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          {modalInfo && <ModalInfo idUser={modalInfo} onClose={closeModalInfo} />}
          {modalEdit && <ModalEdit user={modalEdit} onClose={closeModalEdit} />}
          {modalDelete && <ModalDelete idUser={modalDelete} onClose={closeModalDelete} />}
          {modalCreate && <ModalCreate onClose={closeModalCreate} />}
          <div className='flex justify-end m-8'>
            <button onClick={() => setModalCreate(true)}>Crear usuario</button>
          </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nombres y apellidos
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Foto
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {firstData.map((user, index) => (
                        <tr
                            key={index}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                        >
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {user.id}
                            </th>
                            <td className="px-6 py-4">
                               {!!user.title ? `${translateTitle(user.title)}. ${user.firstName} ${user.lastName}` : `${user.firstName} ${user.lastName}`}
                            </td>
                            <td className="px-6 py-4">
                              {!!user.picture ? <img className='w-12 h-12 md:w-32 md:h-32 rounded-full object-cover' src={user.picture} alt="userPicture" /> : <img className='w-40 h-40 rounded-full' src='https://bahiacc.com/wp-content/uploads/2018/04/avatar-hombre-300x300.jpg' alt="userPicture" />} 
                            </td>
                            <td className="px-6 p-4">
                                <button onClick={() => openModalDelete(user.id)} className='m-2' title="Eliminar usuario">🗑️</button>
                                <button onClick={() => openModalEdit(user)} className='m-2' title="Editar usuario">✏️</button>
                                <button onClick={() => openModalInfo(user.id)} className='m-2' title="Información del usuario">👁️</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className='m-8'>
          <button onClick={pageBack} className={`p-2 ${actualPage === 0 ? 'bg-red-500' : 'bg-blue-500'}`} disabled={actualPage === 0}>
            Anterior
          </button>
          <span className='p-8'>{actualPage + 1} de {totalPages} </span>
          <button
            onClick={pageNext}
            className={`p-2 ${actualPage === totalPages - 1 ? 'bg-red-500' : 'bg-blue-500'}`}
            disabled={actualPage === totalPages - 1}
          >
            Siguiente
          </button>
        </div>
    </>
  )
}

export default App;
