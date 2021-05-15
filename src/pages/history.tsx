import Typography from '@material-ui/core/Typography';
import { GetStaticProps } from 'next';
import AppLayout from '~components/layouts/App';

function History() {
    return (
        <div>
            <Typography variant="h1">History</Typography>
        </div>
    );
}

History.XLayout = AppLayout;

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: { games: 1 },
        revalidate: 60 * 60
    };
};

export default History;
