import './App.css';
import {useState,useEffect} from 'react' // hook



function App() {
  const [sayi,setSayi] = useState(1);
  useEffect(()=>{
    document.title = `${sayi} kez tıklandı`
   
  })
  return (
    <div className="App">
      <p>{sayi}</p>
      <button onClick={()=>setSayi(sayi+1)}>Arttır</button>
    </div>
  );
}

export default App;
