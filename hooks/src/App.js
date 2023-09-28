import './App.css';
import About from './components/About';
import React, { useState , useEffect} from 'react';


function App() {
  const [tokoSaya, setTokoSaya] = useState(1);
  const [namaToko, setNamaToko] = useState("") 
  useEffect(() => {
    if (tokoSaya > 1){
      setNamaToko("KANS")
    } else{
      setNamaToko("")
    }
  }, [tokoSaya])

  return (
    <>
    <h1>Saya Memiliki Toko {tokoSaya}</h1>
    <h5>Namanya {namaToko}</h5>
    {/* callback */}
    <button onClick={() => setTokoSaya((prev) => prev + 1)}>Tambah Toko</button>
    <button onClick={() => setTokoSaya((prev) => prev - 1)}>Kurang Toko</button>
    <About/>
    </>
  );
}

export default App;
