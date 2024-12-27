import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [xValue, setXValue] = useState(0)
  const [yValue, setYValue] = useState(0)
  const [zValue, setZValue] = useState(0)
  const boxRef = useRef(null)

  const random=()=>{
    setXValue(Math.floor(Math.random()*256))
    setYValue(Math.floor(Math.random()*256))
    setZValue(Math.floor(Math.random()*256))

  }

  useEffect(()=>{
      boxRef.current.style.backgroundColor = `rgb(${xValue},${yValue},${zValue})`
  },[xValue,yValue,zValue])

  return (
    <>  <div className='body'>
              <h1>Random Color</h1>
          <div className='container'>
            <div ref={boxRef} className='box'>

            </div>
            <button onClick={random}>Random Color</button>
          </div>
    </div>
       
    </>
  )
}

export default App
