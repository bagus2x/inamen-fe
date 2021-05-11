import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Tag = styled(Button)((props) => ({
    fontSize: '.7em',
    padding: props.theme.spacing(0, 1)
}));

export default Tag;
