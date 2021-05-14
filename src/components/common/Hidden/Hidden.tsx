import { cloneElement, isValidElement } from 'react';

interface HiddenProps {
    hidden: boolean;
    keepMounted?: boolean;
}

const Hidden: React.FC<HiddenProps> = ({ children, hidden, keepMounted }) => {
    if (keepMounted && isValidElement(children)) {
        return cloneElement(children, { hidden: hidden, ...children.props });
    }

    return <>{!hidden && children}</>;
};

export default Hidden;
