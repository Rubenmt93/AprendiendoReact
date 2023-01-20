import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';


const Li = ({ children, estado, casa, edad }) => {
  console.log(casa, edad);
  return (
    <li>{children} {estado}</li>
  )
}
const X = () => 
<ul>
  <Li 
    estado = {'feliz'}
    casa = {false}
    edad= {24}
  >
      Chancho
  </Li>
  <Li  estado = {'triste'}>Chancho</Li>
  <Li  estado = {'cansado'}>Chancho</Li>
  
</ul>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <X />
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
