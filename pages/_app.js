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
          'AZ4x9Zq31F_4SzKd9Ih5kYhAZfSE9REpLZzM3WF0exLFbzBgwnCuHMJYLbt1Fbys1ptFFabNcspfTM0V',
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
