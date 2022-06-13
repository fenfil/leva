import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import '@global/scss/bootstrap.scss';

import { Layout } from '@/components/Layout/Layout';
import { store } from '@/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
