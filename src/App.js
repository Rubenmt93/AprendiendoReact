import './main.css';
import './button'
import Button from './button';
function App() {
  
  return (
    <div>
      <h1> Hola Mundo</h1>
      <Button onClick= { () => {console.log('click');}}>
        Enviar
      </Button>
    </div>
  );
}

export default App;
