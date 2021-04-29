import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import HistoryIcon from '@material-ui/icons/HistoryRounded';
import CloseIcon from '@material-ui/icons/CloseRounded';
import IconButton from '@material-ui/core/IconButton';
import useStyles from '~components/views/SearchInput/styles';
import clsx from 'clsx';
import { useRouter } from 'next/router';

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
                <button type="submit" className={clsx(classes.searchIcon, { [classes.searchIconActive]: !!text })}>
                    <SearchIcon />
                </button>
                <div
                    id="autocomplete"
                    className={clsx(classes.autoComplete, { [classes.autoCompleteVisible]: active || mobile })}
                >
                    <div className={classes.autoCompleteResult}>
                        <div className={classes.autoItemHistory}>
                            <HistoryIcon fontSize="small" color="secondary" />
                            <span>Apex</span>
                            <IconButton size="small">
                                <CloseIcon />
                            </IconButton>
                        </div>
                        {/* <div className={classes.autoItemResult}>Dua</div> */}
                    </div>
                </div>
            </form>
        </ClickAwayListener>
    );
}

export default SearchInput;
