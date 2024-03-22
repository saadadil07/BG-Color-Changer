import { useState } from "react"

const App = () => {
  const [color, setColor] = useState('olive')
  return (
    <div style={{backgroundColor: color}} className="w-full h-screen">
      <h1  id="abc" style={{textAlign:"center", fontSize:'3vw', fontWeight:'bolder', color:'white'}}> Background Color Changer </h1>
      <div className="absolute bottom-[3vw] left-[50%] translate-x-[-50%] flex items-center justify-center gap-[2vw]">
        <button onClick={()=>setColor('green')} style={{border: '2px solid black', backgroundColor: 'green'}} className="bg-white text-white rounded-lg p-2"> green </button>
        <button onClick={()=>setColor('blue')} style={{border: '2px solid black', backgroundColor: 'blue'}} className="bg-white text-white rounded-lg p-2"> blue </button>
        <button onClick={()=>setColor('yellow')} style={{border: '2px solid black', backgroundColor: 'yellow'}} className="bg-white rounded-lg p-2"> yellow </button>
        <button onClick={()=>setColor('orange')} style={{border: '2px solid black', backgroundColor: 'orange'}} className="bg-white rounded-lg p-2"> orange </button>
        <button onClick={()=>setColor('pink')} style={{border: '2px solid black', backgroundColor: 'pink'}} className="bg-white rounded-lg p-2"> pink </button>
        <button onClick={()=>setColor('black')} style={{border: '2px solid black', backgroundColor: 'black'}} className="bg-white text-white rounded-lg p-2"> black </button>
        <button onClick={()=>setColor('purple')} style={{border: '2px solid black', backgroundColor: 'purple'}} className="bg-white text-white rounded-lg p-2"> purple </button>
      </div>
    </div>
  )
}

export default App