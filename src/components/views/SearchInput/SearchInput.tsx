import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import HistoryIcon from '@material-ui/icons/HistoryRounded';
import CloseIcon from '@material-ui/icons/CloseRounded';
import IconButton from '@material-ui/core/IconButton';
import ButtonBase from '@material-ui/core/ButtonBase';
import useStyles from '~components/views/SearchInput/styles';
import Link from '~components/common/Link';

interface SearchInput {
    mobile?: boolean;
    onActive?: () => void;
    onInactive?: () => void;
}

function SearchInput({ mobile, onActive, onInactive }: SearchInput) {
    const classes = useStyles();
    const [active, setActive] = useState(false);
    const [text, setText] = useState('');
    const router = useRouter();
    const ref = useRef<HTMLInputElement>(null);

    const handleInputFocus = () => {
        if (onActive) onActive();
        setActive(true);
    };

    const handleInputBlur = () => {
        if (onInactive) onInactive();
        if (ref.current) ref.current.blur();
        setActive(false);
    };

    const handleInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setText(ev.target.value);
    };

    const handleSubmit = (ev: FormEvent) => {
        ev.preventDefault();
        router.push({
            pathname: 'result',
            query: {
                search_query: encodeURIComponent(text)
            }
        });

        handleInputBlur();
    };

    return (
        <ClickAwayListener onClickAway={handleInputBlur}>
            <form className={clsx(classes.search, { [classes.mobileSearch]: !!mobile })} onSubmit={handleSubmit}>
                <InputBase
                    fullWidth
                    placeholder="Search…"
                    onFocus={handleInputFocus}
                    inputRef={ref}
                    classes={{
                        root: classes.inputRoot,
                        input: clsx(classes.inputInput, { [classes.inputFocus]: active || mobile })
                    }}
                    onChange={handleInputChange}
                />
                <ButtonBase
                    type="submit"
                    disabled={!text}
                    className={clsx(classes.searchIcon, { [classes.searchIconActive]: !!text })}
                >
                    <SearchIcon />
                </ButtonBase>
                <div
                    id="autocomplete"
                    className={clsx(classes.autoComplete, { [classes.autoCompleteVisible]: active || mobile })}
                >
                    <div className={classes.autoCompleteResult}>
                        <Link className={classes.autoItemHistory} href="/result?search_query=Apex">
                            <HistoryIcon fontSize="small" color="secondary" />
                            <span onClick={handleInputBlur}>Apex</span>
                            <IconButton size="small">
                                <CloseIcon />
                            </IconButton>
                        </Link>
                        {/* <div className={classes.autoItemResult}>Dua</div> */}
                    </div>
                </div>
            </form>
        </ClickAwayListener>
    );
}

export default SearchInput;
