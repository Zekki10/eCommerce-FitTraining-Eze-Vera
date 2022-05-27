import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './helpers/Theme'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <div className="App">
          <NavBar/>
          <div className="market">
            <ItemListContainer title={'Productos Recomendados'} />
          </div>
        </div>
    </ThemeProvider>
  );
}

export default App;
