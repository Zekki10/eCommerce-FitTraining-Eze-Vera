import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './helpers/Theme'
import Cardlist from './components/CardList/CardList';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <div className="App">
          <NavBar/>
          <div className="market">
            <Cardlist title={'Productos Recomendados'} />
          </div>
        </div>
    </ThemeProvider>
  );
}

export default App;
