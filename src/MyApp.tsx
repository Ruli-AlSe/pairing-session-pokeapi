import { Provider } from 'react-redux';
import { AppRouter } from './router';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';

function MyApp() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  );
}

export default MyApp;
