import logo from './logo.svg';
import './main.css';
const estilo2 = {
  boxShadow: '0 5px 3px rgba(0,0,0,0.5)'
}

const estilo= ({bg = '#222'}) => ({ 
  backgroundColor:bg,
  color: '#fff',
  padding:'10px 15px',
  margin:'10px 15px'
})

function Li({children}) {
  
  return(
    <li  className='clase-li'>{children}</li>
  )
}
function App() {
  const valor = 'feliz'
  return (
    <ul className='clase-css'>
      <Li estado = 'feliz'> {valor}</Li> 
    </ul>
  );
}

export default App;
