import Store from './components/Store';
import './App.css';
import { products } from './components/products';

function App() {
  //console.log(products);
  return (
    <Store products = { products } />
  );
}

export default App;
