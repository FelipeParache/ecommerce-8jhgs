import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting='La mejor calidad de vestimenta' />
    </>
  )
}

export default App;