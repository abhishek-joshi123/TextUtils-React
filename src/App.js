// import logo from './logo.svg';

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

 
function App() {
 
  const [Mode, setMode] = useState('light');
  const [Text, setText] = useState('Enable DarkMode');
  const [alert, setAlert] = useState(null);

  const ToggleMode = () => {
      if(Mode === 'light'){
        setMode('dark')
        setText('Enable LightMode')
        document.body.style.backgroundColor = '#293131'
        showAlert("Dark mode has been enabled", "success")
      }
      else{
        setMode('light')
        setText('Enable DarkMode')
        document.body.style.backgroundColor = 'white'
        showAlert("Light mode has been enabled", "success")
      }
  }

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })

      setTimeout(()=>{
        setAlert(null)
      },2000)
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" AboutText="About" Mode = {Mode} ToggleMode={ToggleMode} Text = {Text}/>
      <Alert alert={alert}/>
      <div className="container my-3">
          <Routes>
              <Route path="/about" element = {<About Mode = {Mode} />} />
              <Route path='/' element = {<TextForm heading = "Fastest online tool to manipulate your text for FREE!" Mode = {Mode} showAlert = {showAlert} />} />
              <Route path="*" element = {<Navigate to= "/" />} />
          </Routes>
       </div>
       </Router>
    </>
  );
}

export default App;
