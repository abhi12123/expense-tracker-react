//importing css file for App.css
import './App.css';

//importing components
import Header from './components/Header';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

//importing global context
import {GlobalProvider} from './context/GlobalState';

//the final App
function App() {
  return (
    <GlobalProvider>
      <div>
        <Header/>
        <Balance/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

//exporting the final App
export default App;
