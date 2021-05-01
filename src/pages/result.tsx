import Head from 'next/head';
import { useRouter } from 'next/router';
import App from '~components/layouts/App';

function Result() {
    const router = useRouter();
    const { search_query } = router.query;

    return (
        <div>
            <Head>
                <title>{search_query ? decodeURIComponent(search_query as string) : '-'} | Inamen</title>
            </Head>
            {search_query ? decodeURIComponent(search_query as string) : 'Tidak ditemukan'}
        </div>
    );
}

Result.XLayout = App;

export default Result;
