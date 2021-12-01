import 'tailwindcss/tailwind.css';
import '../../public/assets/fonts/montserrat/fonts.css';
import '../../public/assets/fonts/metropolis/fonts.css';
import '../styles/global.scss';

import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
