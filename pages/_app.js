import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { QueryClientProvider, QueryClient } from 'react-query';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import {OrderFormContextProvider} from '../context/OrderFormContext'
function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <PayPalScriptProvider
      options={{
        'client-id':
          'AZCwC1qhexBgevjXU-AG4RMOlrrXP_R8yYDMlltNwdLzUhWmu6IeXTh-g0EKRZFRSlP5i0x-g92OD0p_',
        currency: 'USD ',
        intent: 'capture ',
      }}
    >
      <ThemeProvider attribute="class">
        <Provider store={store}>
          <OrderFormContextProvider>
            <QueryClientProvider client={queryClient}>
              <Component {...pageProps} />
            </QueryClientProvider>
          </OrderFormContextProvider>
        </Provider>
      </ThemeProvider>
    </PayPalScriptProvider>
  );
}

export default MyApp;
