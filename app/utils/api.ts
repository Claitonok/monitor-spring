import { Usuario, UsuarioResponse} from "../types/usuarioDados";

// const API_URL = "http://localhost:8080/usuarios"; // My Localhost
const API_URL = "https://monitor-production-b13a.up.railway.app/usuarios";


// 1️⃣ GET (buscar usuários)
export async function getUsuarios(): Promise<any> {

  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Erro ao buscar usuários");
  }

  return response.json()
}

// 2️⃣ POST (criar usuário)
export async function createUsuario(usuario: Usuario): Promise<Usuario> {

  try {

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });

    console.log("STATUS:", response.status);

    if (!response.ok) {
      throw new Error("Erro na API");
    }

    return await response.json();

  } catch (error) {
    console.error("Erro ao conectar na API:", error);
    throw error;
  }
}


// 3️⃣ PUT (atualizar usuário)
export async function updateUsuario(id: number, usuario: Usuario) {

  const response = await fetch(`${API_URL}/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  });

  if (!response.ok) {
    throw new Error("Erro ao atualizar usuário");
  }

  return response.json();
}

// 4️⃣ login (autenticar usuário)
export async function loginUsuario(email: string, senha: string) {

  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      senha
    })
  });

  if (!response.ok) {
    throw new Error("Erro ao fazer login");
  }

  const data = await response.json();

  return data;
}

// 5️⃣ DELETE (remover usuário)
export async function deleteUsuario(id: number) {

  const response = await fetch(`${API_URL}/delete/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erro ao deletar usuário");
  }
}

// 6️⃣ GET (buscar usuário por ID)
export async function getUsuarioById(id: number): Promise<UsuarioResponse> {

  const response = await fetch(`${API_URL}/${id}`,{
    cache: "no-store",
  });

  if (!response.ok) { 
    throw new Error("Usuário não encontrado");
  }

  return response.json();
}

