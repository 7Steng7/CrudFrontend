export interface User {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
}

export interface UserInfo {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
    gender: string;
    email: string;
    dateOfBirth: string;
    phone: string;
    registerDate: string;
    updatedDate: string;
}

export interface getUsers {
    page : number;
    limit : number;
}

export interface ModalInfoProps {
    idUser: string;
    onClose: () => void;
}

export interface ModalEditProps {
    user: User;
    onClose: () => void;
}

export interface ModalDeleteProps {
    idUser: string;
    onClose: () => void;
}
