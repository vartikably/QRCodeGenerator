import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [textInput,setTextInput] = useState("");
  const [word,setWord] = useState("");
  const [qrCode,setQrCode] = useState("");
  const [qrSize,setQrSize] = useState("100");
  useEffect(()=>{
    setQrCode("http://api.qrserver.com/v1/create-qr-code/?data="+word+"!&size="+qrSize+"x"+qrSize);
    console.log(qrCode);
  },[word, qrSize]);
  const handleClick = ()=>{
    setWord(textInput);
  }
  return (
    <div className="App">
      <div className="qrGeneratorHeading my-12 mx-8">
        <h1 className='mb-4 text-3xl font-extrabold leading-none tracking-tight text-purple-900 md:text-4xl lg:text-5xl dark:text-white'>Welcome to QR Code Generator!!</h1>
      </div>
      <div className="qr-generator flex flex-row gap-2 w-full max-w-xs mx-auto">
        <input type='text' className='bg-purple-50 border border-purple-300 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-600 block  p-2.5 dark:bg-purple-700 dark:border-purple-600 dark:placeholder-purple-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500' value={textInput} onChange={(e)=>{setTextInput(e.target.value)}} placeholder='QR Generator Text'></input>
        <button  className='bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded' onClick={handleClick}>Generate</button>
      </div>
      <div className="qr-code pt-8 mx-auto min-w-0">
        <input type='range' min="100" className="accent-purple-400 mx-auto" max="400" value={qrSize} onChange={(e)=>{setQrSize(e.target.value)}}></input>
        <img src={qrCode} className="pt-4 mx-auto" alt='QR Code'/>
        <br />
        <a href={qrCode} download="QR Code" target='_blank' rel="noreferrer">
          <button className='bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded'>Download</button>
        </a>      
      </div>
    </div>
  );
}

export default App;
