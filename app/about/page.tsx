import { NavbarHomeAbout } from "@/components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-black">

      <NavbarHomeAbout />

      <main className="max-w-6xl mx-auto px-6 py-16">

        {/* HERO */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
            Sobre a Nexora Systems
          </h1>

          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">
            A Nexora Systems é uma empresa fictícia especializada no
            desenvolvimento de soluções digitais modernas, focadas em
            performance, segurança e escalabilidade para empresas que querem
            crescer no mundo digital.
          </p>
        </section>

        {/* CARDS */}
        <section className="grid md:grid-cols-3 gap-8 mb-20">

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-xl font-semibold mb-3">🚀 Nossa Missão</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              Criar sistemas modernos que ajudem empresas a evoluir com
              tecnologia de ponta e experiências digitais eficientes.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-xl font-semibold mb-3">💡 Inovação</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              Trabalhamos com tecnologias modernas como React, Next.js,
              APIs escaláveis e arquitetura de software profissional.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-xl font-semibold mb-3">🔐 Segurança</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              Nossos sistemas são construídos com foco em segurança,
              autenticação e proteção de dados desde o início do projeto.
            </p>
          </div>

        </section>

        {/* HISTÓRIA */}
        <section className="bg-white dark:bg-zinc-900 p-10 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800">

          <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">
            Nossa História
          </h2>

          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
            A Nexora Systems nasceu com o objetivo de transformar ideias em
            soluções digitais robustas. Desde o início, nossa equipe focou em
            criar aplicações escaláveis utilizando boas práticas de
            desenvolvimento, arquitetura limpa e design moderno.
          </p>

          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mt-4">
            Hoje desenvolvemos dashboards, sistemas empresariais, APIs e
            plataformas completas que ajudam empresas a crescer com tecnologia.
          </p>

        </section>

        {/* STATS */}
        <section className="grid md:grid-cols-3 gap-6 mt-16 text-center">

          <div className="p-6">
            <h3 className="text-3xl font-bold text-blue-600">+120</h3>
            <p className="text-zinc-500">Projetos entregues</p>
          </div>

          <div className="p-6">
            <h3 className="text-3xl font-bold text-blue-600">+50</h3>
            <p className="text-zinc-500">Clientes satisfeitos</p>
          </div>

          <div className="p-6">
            <h3 className="text-3xl font-bold text-blue-600">5 anos</h3>
            <p className="text-zinc-500">de inovação</p>
          </div>

        </section>

      </main>
    </div>
  );
}