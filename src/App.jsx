import { useEffect } from 'react'
import './App.css'
import { useTelegram } from './hooks/useTelegram';


function App() {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])
  return (
    <>

      <button onClick={onToggleButton}>toggle</button>
    </>
  )
}

export default App
