"use client";

import { useState } from "react";
import { createUsuario } from "../utils/api";
import { NavbarCadastro } from "@/components/Navbar";
import { useRouter } from "next/navigation";


export default function Cadastro() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const router = useRouter();

    async function handleSubmit(e: any) {
        e.preventDefault()

        await createUsuario({
            nome,
            email,
            senha
        })
        alert("Usuário criado com sucesso");
        router.push("/monitor");
    }

    return (
        <div className="items-center">
            <header> 
                <NavbarCadastro /> 
            </header>
            <main className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
                <div className="mx-auto mb-80 max-w-md rounded-lg p-8 shadow-md">
                    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        User Registration
                    </h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Name"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );


}
