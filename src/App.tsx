import { useState, useEffect } from 'react'
import './App.css'
import Extension, { ExtensionProps } from './components/Extension'

function App() {
  const [extensions, setExtensions] = useState<ExtensionProps[]>([]);

  const getExtensions = async () => {
    try {
      const response = await fetch('./data.json');
      const data = await response.json();
      setExtensions(data);
    } catch(error) {
      console.error(error)
    }
  } 

  useEffect(() => {
    getExtensions();
  }, [])

  return (
    <>
      {extensions && extensions.map((extension) => (
        <div>
          <Extension logo={extension.logo} name={extension.name} description={extension.description} isActive={extension.isActive} />
        </div>
      ))}
    </>
  )
}

export default App
