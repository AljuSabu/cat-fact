import { useState } from "react"
import axios from "axios"

function App() {

  const[catFact,setCatFact]=useState('cats are adorable')

  const fetchData = async()=>{
    try{
      const {data} = await axios.get("https://catfact.ninja/fact")
      //console.log(data.fact);
      setCatFact(data.fact)

    }catch(error){
      console.log(error);
      
    }
  }

  return (
    <>
    <div className="min-h-screen bg-linear-to-r from-black to-stone-800 flex flex-col items-center gap-10">
      <h1 className="text-8xl text-orange-500 font-baskerville font-extrabold mt-50">CATFACT</h1>
      <button onClick={fetchData} className="text-2xl p-3 px-4 bg-yellow-500 text-white rounded-xl ">click me</button>
      <div className="text-white w-350 text-center mt-10 font-dancing text-7xl">{catFact}</div>
    </div>
    </>
  )
}

export default App
