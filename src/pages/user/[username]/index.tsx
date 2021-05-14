import { useRouter } from 'next/router';
import App from '~components/layouts/App';

function User() {
    const router = useRouter();
    return (
        <div>
            <div>{JSON.stringify(router.query)}</div>
        </div>
    );
}

User.XLayout = App;

export default User;
