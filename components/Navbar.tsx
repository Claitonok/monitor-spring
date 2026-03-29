import Link from "next/link";
 
export function Navbar() {
  return (
    <nav className="bg-white shadow-md text-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold">My App</div>
          <div className="flex space-x-4">

            <Link href="/cadastro_users" className="rounded-lg bg-green-600 px-4 py-2 font-semibold 
            text-white shadow-md transition hover:bg-green-800 hover:scale-105">
              Cadastrar Users
            </Link>

            <Link href="/logout" className="rounded-lg bg-red-600 px-4 py-2 font-semibold 
            text-white shadow-md transition hover:bg-red-700 hover:scale-105">
              Logout
            </Link>
            
            <Link href="/about" className="rounded-lg bg-blue-500 px-4 py-2 font-semibold 
            text-white shadow-md transition hover:bg-blue-700 hover:scale-105">
              About
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}

export function NavbarCadastro() {
  return (
    <nav className="bg-white shadow-md text-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold">My App</div>
          <div className="flex space-x-4">

            <Link href="/monitor" className="rounded-lg bg-blue-500 px-4 py-2 font-semibold 
            text-white shadow-md transition hover:bg-blue-700 hover:scale-105">
              Home
            </Link>
            
            <Link href="/logout" className="rounded-lg bg-red-600 px-4 py-2 font-semibold 
            text-white shadow-md transition hover:bg-red-700 hover:scale-105">
              Logout
            </Link>
            

          </div>
        </div>
      </div>
    </nav>
  );
}


export function NavbarHome() {
  return (
    <nav className="bg-white shadow-md text-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold">My App</div>
          <div className="flex space-x-4">
            <Link href="/about" className="text-gray-700 hover:text-blue-500">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function NavbarHomeAbout() {
  return (
    <nav className="bg-white shadow-md text-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold">My App</div>
          <div className="flex space-x-4">
            <Link href="/monitor" className="rounded-lg bg-blue-500 px-4 py-2 font-semibold 
            text-white shadow-md transition hover:bg-blue-700 hover:scale-105">
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

