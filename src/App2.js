import './App.css';
import {useState} from 'react' // hook

function App() {
  const[sayi,setSayi] = useState(0);
  const[ad,setAd] = useState('');

  return (
    <div className="App">
      <p>{sayi}</p>
      <button onClick={()=>setSayi(sayi+1)}>Arttır</button>
      <button onClick={()=>setSayi(sayi-1)}>Azalt</button>
      <div>
        <p>{ad}</p>
        <button onClick={()=>setAd("Tahsin")}>İsmi Değiştir</button>
      </div>
    </div>
  );
}

export default App;
