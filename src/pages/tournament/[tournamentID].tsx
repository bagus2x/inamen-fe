import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import App from '~components/layouts/App';

function TournamentDetail() {
    const router = useRouter();

    useEffect(() => {
        console.log(router.query);
    }, []);

    return (
        <div>
            <div>{JSON.stringify(router.query)}</div>
        </div>
    );
}

TournamentDetail.XLayout = App;

export default TournamentDetail;
