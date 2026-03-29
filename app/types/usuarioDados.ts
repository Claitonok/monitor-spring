
export interface UsuarioApiResponse {
  data: UsuarioResponse[];
}

export interface UsuarioResponse {
   id: number;
   nome: string;
   email: string;
   senha: string;
}
 

export interface Usuario {
  nome: string;
  email: string;
  senha: string;
}
