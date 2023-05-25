import styles from "./style"
import { Hero,Navbar,Stats,Business,Footer } from "./components"
import Services from "./components/Services"
import { Contact } from "./components/Contact"
import { BrowserRouter,  Route,Routes } from "react-router-dom"
import Home from "./components/Home"



const App = () => (                   
    <div>
      <BrowserRouter >
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="contact" element={<Contact/>}/>
         <Route path="features" element={<Services/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
export default App