import './App.css';
import { useFeedbackContext } from './context';

function App() {
  const { name } = useFeedbackContext();
  console.log(name);
  return <div className=''></div>;
}

export default App;
