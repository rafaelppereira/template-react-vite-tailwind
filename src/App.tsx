import logoImg from './assets/logo.png';
import { RiRocketLine } from 'react-icons/ri';

function App() {
  return (
    <div className="bg-gray-900 h-screen flex justify-center items-center flex-col"> 
      <img src={logoImg} alt="Outspace" className="mb-6 w-[100px]" />
      <h1 className="text-3xl font-bold text-white">Hello Dev 👋</h1>
      <p className="max-w-md text-center mt-6 text-gray-400 font-normal">
        This template was created to facilitate the development process.
        <a href="https://github.com/rafaelppereira" target="_blank" className="text-green-500 underline inline-flex ml-1">Created by Rafael Pereira</a>
      </p>
      <span className="text-cyan-500 mt-4">React + Vite + TailwindCSS</span>
      <span className="text-cyan-400 flex items-center"><RiRocketLine className="mr-1" /> React icons</span>
    </div>
  )
}

export default App
