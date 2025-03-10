import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App.jsx';
import './global.css';
import { WorkoutsContextProvider } from './context/WorkoutContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
    <WorkoutsContextProvider>
  <App />
</WorkoutsContextProvider>
    </ChakraProvider>
  </StrictMode>,
)
