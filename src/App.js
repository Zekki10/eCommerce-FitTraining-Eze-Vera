import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './helpers/Theme'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <div className="App">
          <NavBar/>
          <div className="market">
            <ItemListContainer title={'Productos Recomendados'} />
            {/* <ItemDetailContainer title={'Detalles del producto'}></ItemDetailContainer> */}
          </div>
        </div>
    </ThemeProvider>
  );
}

export default App;
