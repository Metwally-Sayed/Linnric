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
          'AXEiHbDM7ajpBkGrOy_egV3gHqYkKWuo06BJ8NdqGnvxuv1rR_kUxHAt8HAJ_RK2HUdbN8DFzSGx08wz',
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
