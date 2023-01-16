import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { QueryClientProvider, QueryClient } from 'react-query';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <PayPalScriptProvider
      options={{
        'client-id':
          'AaUq2BZw_ctHaBVuBiCLwG-pRWX68tGzgKu31lZJBVyPWGowYKp-NJ6g6aJkK7DeJqxwkCQkAq204yqr',
        currency: 'USD ',
        intent: 'capture ',
      }}
    >
      <ThemeProvider attribute="class">
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </Provider>
      </ThemeProvider>
    </PayPalScriptProvider>
  );
}

export default MyApp;
