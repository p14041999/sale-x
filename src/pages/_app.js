import 'tailwindcss/tailwind.css';
import '../../public/assets/fonts/montserrat/fonts.css';
import '../../public/assets/fonts/metropolis/fonts.css';
import '../styles/global.scss';
import {AppWrapper} from '../contexts/AppContext';
import Layout from '../components/Layout/Layout';
import { useEffect } from 'react';
import "sweetalert2/src/sweetalert2.scss";

function MyApp({ Component, pageProps }) {
  // useEffect(()=>{

  // })
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}

export default MyApp;
