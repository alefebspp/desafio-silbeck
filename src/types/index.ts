export interface Hotel {
    id: number;
    url: string;
    nome:  string;
    endereco: {
        rua:  string;
        numero:  string;
        bairro:  string;
        cidade:  string;
        estado:  string;
        pais:  string;
    }
    facebook:  string;
    instagram:  string;
    twitter:  string;
    youtube:  string;
    telefone:  string;
    email:  string;
}

export interface Room {
    id: number;
    codigo: string;
    url: string;
    nome: string;
    img: string;
    descricao: string;
    preco: number;
    hospedes: number;
    caracteristicas: {
        id: number;
        nome: string;
        icone: string;
    }[]
    avaliacao: {
        nota: number;
        quantidade: number;
    }
}

export interface RoomWithQuantity {
    room: Room;
    quantity: number;
  }

export interface Testimony {
    id: number;
    descricao: string;
    autor: string;
    nota: number;
    data: string;
}