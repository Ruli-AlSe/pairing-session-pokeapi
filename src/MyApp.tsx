import { Provider } from 'react-redux';
import { AppRouter } from './router';
import { store } from './store';

function MyApp() {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}

export default MyApp;
