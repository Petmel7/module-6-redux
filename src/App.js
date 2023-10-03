import { Account } from './components/Account';
import { LengSwicher } from './components/LengSwicher';

import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const lend = useSelector(state => state.locale.lend)
  return (
    <div className="App">
      <LengSwicher />
      <hr />
      <Account />
      <hr />
      <div>Carrent lend: {lend}</div>
    </div>
  );
}

export default App;
