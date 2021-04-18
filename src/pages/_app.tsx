import { ComponentType, Fragment, useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '~libs/theme';
import Progress from '~components/common/Progress';

interface InamenAppProps extends AppProps {
    Component: ComponentType<{}> & {
        XLayout: ComponentType;
        XAuth: ComponentType;
    };
}

function InamenApp({ Component, pageProps }: InamenAppProps) {
    const Layout = Component.XLayout ?? Fragment;
    const Auth = Component.XAuth ?? Fragment;

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles !== null) {
            jssStyles.parentElement!.removeChild(jssStyles);
        }
    }, []);

    return (
        <>
            <Head>
                <title>Inamen | Tournament Info</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                <Progress />
                <CssBaseline />
                <Auth>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </Auth>
            </ThemeProvider>
        </>
    );
}

export default InamenApp;
