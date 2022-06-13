import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import '@global/scss/bootstrap.scss';

import { Layout } from '@/components/Layout/Layout';
import { store } from '@/store';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ReduxToastr
        timeOut={4000}
        position="top-left"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
    </Provider>
  );
}

export default MyApp;
