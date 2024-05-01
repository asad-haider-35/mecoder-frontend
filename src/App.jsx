import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Quiz from "./pages/Quiz"
import Result from "./pages/Result"

function App() {

  return (
    <div className="h-screen overflow-hidden md:h-auto md:overflow-auto">
      <div className='flex justify-center py-4'>
        <h1 className="text-center text-primary font-bold font-redHatDisplay text-[30px] md:text-[45px]">Mecoder</h1>
      </div>

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/test" element={ <Quiz /> } />
        <Route path="/testresult" element={ <Result /> } />
      </Routes>

    </div>
  )
}

export default App
