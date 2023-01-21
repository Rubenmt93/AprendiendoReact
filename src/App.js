import './main.css';
import './button'
import Button from './button';
const App =()  => {
  const flag=true
  if( flag){
    return <p> mi variable dio true</p>
  }
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
