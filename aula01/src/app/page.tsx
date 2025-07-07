export default function Home() {
  return (
    
      <main className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-8 w-full max-w-sm">
          <h1 className="text-3xl font-bold text-blue-700 mb-6 flex justify-center">Login</h1>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 ">Email:</label>
              <input 
              type="email"
              placeholder="Digite seu Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus: ring focus:rin-amber-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Senha:
                <input
                 type="password"
                 placeholder="********"
                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus: ring focus:rin-amber-500"
                 />
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">Enviar
            </button>

          </form>

        </div>
      </main>
  )
}


// export default function Login() {
//   return (
//     <main className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-8 w-full max-w-sm">
//         <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

//         <form className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               placeholder="seuemail@exemplo.com"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-amber-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Senha
//             </label>
//             <input
//               type="password"
//               placeholder="******"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-amber-500"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition"
//           >
//             Entrar
//           </button>
//         </form>
//       </div>
//     </main>
//   );
// }
