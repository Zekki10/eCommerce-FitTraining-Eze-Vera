import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './helpers/Theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { NotFound } from './pages/notFound';
import { Market } from './pages/Market';
import Detail from './pages/Detail';
function App() {
  return (
    <ThemeProvider theme={theme}>
        <div className="App">
          <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/market' element={<Market title={'Productos Recomendados'} />}/> 
              <Route path='/product/:id' element={<Detail />}/> 
              <Route path='*' element={<NotFound />} />            
            </Routes>
          </BrowserRouter>
        </div>
    </ThemeProvider>
  );
}

export default App;
