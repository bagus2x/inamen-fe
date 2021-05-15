import { useRouter } from 'next/router';
import AppLayout from '~components/layouts/App';

function Settings() {
    const router = useRouter();

    return (
        <div>
            <div>{JSON.stringify(router.query)}</div>
        </div>
    );
}

Settings.XLayout = AppLayout;

export default Settings;
