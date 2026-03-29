'use client';

import { useState } from "react";
import { loginUsuario } from "./utils/api";
import { NavbarHome } from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


export default function Home() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const router = useRouter();


    async function handleSubmit(e: any) {
        e.preventDefault();

        try {
            
            const usuario = await loginUsuario(email, senha);

            //SALVAR TOKEN EM COOKIE
            document.cookie = `token=${usuario.token}; path=/; SameSite=Lax`;

            console.log("Token salvo:", usuario.token);
            console.log("Usuário logado:", usuario);

            toast.success("✅ Login realizado com sucesso");

            setTimeout(() => {
                router.push("/monitor"); // Redirecionar para a página principal após o login
            }, 1200);

        } catch (error) {
            toast.error("Usuário ou senha inválidos ❌");
            return;
        }

        // alert("Usuário logado com sucesso");
    }

    return (

        <div className="items-center">
            <header>
                <NavbarHome />
            </header>
            <main className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
                <div className="mx-auto mb-80 max-w-md rounded-lg p-8 shadow-md">
                    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        Login to your account
                    </h1>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2
                             focus:ring-blue-500"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            className="px-4 py-2 border rounded-md focus:outline-none 
                            focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 px-4 py-2 text-sm font-medium
                             text-white hover:bg-blue-700 focus:outline-none focus:ring-2
                              focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </main>

            <footer className="border-t border-zinc-200 py-6 dark:border-zinc-800">
                <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
                    © {new Date().getFullYear()} Monitor System. All rights reserved.
                </p>
            </footer>

        </div>
    );


}
