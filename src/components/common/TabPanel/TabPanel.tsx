import { DetailedHTMLProps } from 'react';
import Hidden from '~components/common/Hidden';

interface TabPanelDefaultProps {
    visible: boolean;
}

type TabPanelProps = DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & TabPanelDefaultProps;

const TabPanel: React.FC<TabPanelProps> = ({ visible, children, ...rest }) => {
    return (
        <Hidden keepMounted hidden={!visible}>
            <div {...rest}>{children}</div>
        </Hidden>
    );
};

export default TabPanel;
