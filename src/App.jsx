import logo from './logo.svg';
// import './App.css';
import InputField from './components/InputField';
import Button from './components/Button';
import {useState , useEffect}  from 'react';

function App() {

  const [userName, setUserName] = useState('')
  const [displayName , setDisplayName] = useState('')
  
  const onChange = (value)=>{
    setUserName(value)
    
  }

  useEffect(()=>{
    setDisplayName(userName)
  },[userName])

  return (
    <div className="App">

      <h1>Home</h1>
      <InputField label="Username" handleChange={onChange} />
      {displayName}


      {/* <InputField label="Passwrord" /> */}
      {/* <Button label="submit" HandleClick={onChange} /> */}


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
