import { Navbar } from "@/components/Navbar";
import { getUsuarioById } from "../../utils/api";
import EditarUsuarioForm from "./EditarUsuarioForm";


interface Props {
   params: {
    id: string;
  };
}

export default async function PageEditar({ params }: Props) {

  const retornoParams = await params;
  console.log("params:", retornoParams);
  
  const id = Number(retornoParams?.id);
  // console.log("id recebido:", id);

  const response = await getUsuarioById(id);
  // console.log("Usuario retornado:", response);

  return (
    <div className="flex min-h-screen flex-col bg-linear-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-black">

      <header>
        <Navbar />
      </header>

      <main className="flex flex-1 items-center justify-center px-4">

        <div className="w-full max-w-2xl rounded-2xl border border-zinc-200 bg-white p-10 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">

          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
              Editar Usuário
            </h1>
            <p className="mt-2 text-sm text-zinc-500">
              Atualize as informações do usuário
            </p>
          </div>

          <EditarUsuarioForm usuario={response}/>

        </div>

      </main>

    </div>
  );
}