import './main.css';
import './button'
import Button from './button';

const arr = ['chacho 1','chacho 2','chacho 3']
const App =()  => {
  const flag=false
  if( flag){
    return <p> mi variable dio true</p>
  }
  return (
    <div>
      <h1> Hola Mundo</h1>
      {arr.map(el=> <p key={el}> {el}</p>)}
      <Button onClick= { () => {console.log('click');}}>
        Enviar
      </Button>
    </div>
  );
}

export default App;
