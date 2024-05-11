import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Quiz from "./pages/Quiz"
import Result from "./pages/Result"
import { MeCoder } from "./assets"

function App() {

  return (
    <div className="md:h-screen overflow-hidden h-auto md:overflow-auto pt-6">
      <div className='flex justify-center py-4'>
        <h1 className="text-center text-primary font-bold font-redHatDisplay text-[30px] md:text-[45px]"> <img src={MeCoder} /> </h1>
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
