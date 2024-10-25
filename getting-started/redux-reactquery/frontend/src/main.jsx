import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App.jsx';
import './index.css';
import store from './redux/store/store.js';


//! instance fo react query 

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <App /> 
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      
    </Provider>
  </StrictMode>,
);
