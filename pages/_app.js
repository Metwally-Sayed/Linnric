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
          'AbiiEPSjC6e8FaVlZ3YM1mP9Fb48acjZ4gM-7IeDiIZwbOP3-tMpC4rbuuowWi5oTu9KzJYYhaxmeZ_9',
        currency: 'USD',
        intent: 'capture',
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
