import type { AppProps } from 'next/app'
import Layout from '../component/layouts';
import '../styles/container-tracking/carouselcustom.css';
// import '../public/fonts/svgtofont.scss';
import '../styles/global.scss';
import Head from 'next/head';
import axios from 'axios';
import { useEffect, useState } from 'react';
import api from '../api';
import { NextIntlProvider } from 'next-intl';

function MyApp({ Component, pageProps }: AppProps) {

    let header = "";
    let footer = "";
    let Aside = "";
    let langidEn = "7c35f456-9403-4c21-80b6-941129d14086"; //ingilizce için langid
    let langidTr = "bf2689d9-071e-4a20-9450-b1dbdd39778f"; //Türkçe için langid
    const [Responses, SetResponses] = useState<any>([]);
    const [loaded, setLoaded] = useState(false);
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        let _lang = window.location.pathname.split('/')[1] || "en-US";
        let langid = "";
        if (_lang === "tr-TR") {
            _lang = "tr"
            langid = langidTr;
        }
        else {
            _lang = "en"
            langid = langidEn;
        };
        header = `${process.env.NEXT_PUBLIC_UNIGATE_BASE_URL}${api.header}?language=${_lang}`;
        footer = `${process.env.NEXT_PUBLIC_UNIGATE_BASE_URL}${api.footer}?language=${_lang}`;
        Aside = `${process.env.NEXT_PUBLIC_UNIGATE_BASE_URL}${api.aside}?lang=${_lang}&langId=${langid}`;

        const requests = [axios.get(header), axios.get(footer), axios.get(Aside)];
        axios.all(requests).then(axios.spread((...responses) => {
            SetResponses([...responses]);
            setLoaded(true);
            setTimeout(() => {
                setShowLoader(false)
            }, 500);
        })).catch(errors => {
            // react on errors.
        })
    }, ['load header footer']);

    return (
        <>
            <NextIntlProvider messages={pageProps.messages} onError={() => { }}>
                <div className={showLoader ? 'loader' : 'loader fadeout'}><img src={'/images/Loader.gif'} alt="" width="100" height="100" /></div>
                {loaded && <Layout.DefaultLayout html={{ header: Responses[0].data, footer: Responses[1].data, aside: Responses[2].data }}>
                    <Head>
                        <link rel="stylesheet" href={`${process.env.NEXT_PUBLIC_UNIGATE_BASE_URL}/Templates/Default/assets/css/libs.min.css`} />
                        <link rel="stylesheet" href={`${process.env.NEXT_PUBLIC_UNIGATE_BASE_URL}/Templates/Default/assets/css/app.min.css`} />
                        <link rel="icon" type="image/x-icon" href="./images/favicon.ico" />
                    </Head>
                    <Component {...pageProps} />
                </Layout.DefaultLayout>}
            </NextIntlProvider>
        </>
    );
}
export default MyApp
