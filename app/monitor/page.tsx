import { Navbar } from "@/components/Navbar";
import { getUsuarios } from "../utils/api";
import Monitor from "../widgets/monitor";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";


export default async function PageMonitor() {
  
  const response = await getUsuarios();
  // const token = (await cookies()).get("token");

  // if (!token) {
  //   redirect('/');
  // }

  return (
    <div className="flex min-h-screen flex-col bg-linear-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-black">

      <header>
        <Navbar />
      </header>

      <main className="flex flex-1 items-center justify-center px-4">

        <div className="rounded-2xl border border-zinc-200 bg-white p-10 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
          <div className="mb-6 text-center">
            
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Monitor System
            </h1>
          </div>

          <Monitor usuarioUsername={response} />

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