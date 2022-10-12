import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import theme from "./components/Theme";
import MainLayout from './components/MainLayout';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <MainLayout/>
    <Routes>
       <Route path='/main' exact element={<MainLayout/>}/>
 
   </Routes>
   </BrowserRouter>
   </ThemeProvider>
  );
}

export default App;
