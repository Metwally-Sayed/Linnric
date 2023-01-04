import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { QueryClientProvider, QueryClient } from 'react-query';

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider attribute="class">
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
