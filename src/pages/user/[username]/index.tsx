import { useRouter } from 'next/router';
import AppLayout from '~components/layouts/App';

function User() {
    const router = useRouter();
    return (
        <div>
            <div>{JSON.stringify(router.query)}</div>
        </div>
    );
}

User.XLayout = AppLayout;

export default User;
