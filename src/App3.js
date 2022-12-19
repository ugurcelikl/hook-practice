import './App.css';
import {useState,useEffect} from 'react' // hook



function App() {
  const [sayi,setSayi] = useState(1);
  const [sayi2,setSayi2] = useState(1);
  /*
  useEffect component mount olduğunda çalışır yada sayfada bir state güncellediğinde çalışır
  [] kullanarak bir defa çalışmasını sağlayabiliriz ve state güncellendiğinde tekrar çalışmaz
  [sayi] bir state e bağlayarak o state güncellendiğinde çalışır.
  */
  useEffect(()=>{
    console.log("effect");
  },[]) // [] useEffectin bir defaya mahsus çalışmasını sağlar eğer olmazsa component her render edildiğinde çalışır. yani sayfa bir state set edildiğinde çalışır
  
  return (
    <div className="App">
      <p>{sayi}</p>
      <button onClick={()=>setSayi(sayi+1)}>Arttır</button>
    </div>
  );
}

export default App;
