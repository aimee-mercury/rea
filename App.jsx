import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import img from '../public/re.jpg'
import { FaGithub } from "react-icons/fa";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>it's me myself and I</h1>
        <h2>coding is in vein no more jokes</h2>
        <img src="re.jpg" alt="" />
        
      </div>
     
       <div>
       <a href="https://github.com/dashboard"><FaGithub/></a> 
       </div>
     
      
    </>
  )
}

export default App
