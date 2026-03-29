'use client';

import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { updateUsuario } from "@/app/utils/api";
import { UsuarioResponse } from "@/app/types/usuarioDados";
import { toast } from "sonner";


interface Props {
 usuario: UsuarioResponse;
}

export default function EditarUsuarioForm({ usuario }: Props) {
  const router = useRouter();

  // 🔒 proteção contra null
  if (!usuario) {
    setTimeout(() => {
      toast.error("Usuário não encontrado ❌");
      redirect('/'); // redireciona para a página principal
    }, 60);
  }

  const [nome, setNome] = useState(usuario.nome ?? "");
  const [email, setEmail] = useState(usuario.email ?? "");
  const [senha, setSenha] = useState(usuario.senha ?? "");
  

  async function handleSubmit(e: any) {
    e.preventDefault();

     if (!nome || !email || !senha) {
            toast.error("Preencha todos os campos ❌");
            return;
        } else if (senha.length < 6) {
            toast.error("A senha deve ter pelo menos 6 caracteres ❌");
            return;
        } else if (!email.includes("@")) {
            toast.error("Email inválido ❌");
            return;
        }

    try {
      await updateUsuario(usuario.id, {
        nome,
        email,
        senha,
      });
      toast.success("Usuário atualizado com sucesso ✅");

      router.push("/monitor");
      router.refresh(); // atualiza a lista

    } catch (error) {
      toast.error("Erro ao atualizar usuário ❌");
    }

  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <div>
        <label className="mb-1 block text-sm font-medium">
          Nome
        </label>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">
          senha
        </label>
        <input
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800"
        />
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={() => router.push("/monitor")}
          className="rounded-lg border px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          Cancelar
        </button>

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white shadow hover:bg-blue-700 disabled:opacity-50"
        >
         Salvar Alterações
        </button>
      </div>

    </form>
  );
}