import { ChangeEvent, useMemo, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import useStyles from '~components/views/StandingMaker/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import participants, { Participant } from '~libs/dummy/participants';
import Autocomplete from '@material-ui/lab/Autocomplete';

interface StandingMakerProps {
    open: boolean;
    onClose: () => void;
}

interface Schema {
    data: Array<Array<string | number>>;
    columns: Array<string>;
}

const parseColumnName = (columnsStr: string) => {
    return columnsStr
        .replace(/ +/g, ' ')
        .split(',')
        .filter((column) => column !== ' ' && column.length > 0)
        .map((column) => column.trim());
};

function StandingMaker({ open, onClose }: StandingMakerProps) {
    const classes = useStyles();
    const [column, setColumn] = useState('');
    const [rowsSize, setRowsSize] = useState<number | ''>(0);
    const [expand, setExpand] = useState(false);
    const [schema, setSchema] = useState<Schema>({ columns: [], data: [] });
    const [participantNameIndex, setParticipantNameIndex] = useState(-1);

    const columnsSize = useMemo(() => parseColumnName(column).length, [column]);

    const autoComplete = {
        options: participants,
        getOptionLabel: (option: Participant) => option.name
    };

    const handleSave = () => {
        // onClose();
        console.log(schema);
    };

    const handleCancel = () => {
        handleReset();
        onClose();
    };

    const handleColumnChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setColumn(ev.target.value);
    };

    const handleRowsChange = (ev: ChangeEvent<HTMLInputElement>) => {
        if (ev.target.value === '') {
            setRowsSize(ev.target.value);
            return;
        }
        const size = parseInt(ev.target.value);
        setRowsSize(size);
    };

    const handleExpandChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setExpand(ev.target.checked);
    };

    const handleReset = () => {
        setColumn('');
        setRowsSize(0);
        setExpand(false);
        setParticipantNameIndex(-1);
        setSchema({ columns: [], data: [] });
    };

    const handleCreateTable = () => {
        const columnArray = parseColumnName(column).map((column, index) => {
            if (column[column.length - 1] === '#') {
                setParticipantNameIndex(index);
                return column.substring(0, column.length - 1);
            }
            return column;
        });

        const data = Array.from({ length: typeof rowsSize === 'string' ? 0 : rowsSize }, () =>
            Array(columnArray.length).fill('')
        );

        // get previous values, cek dulu apakah ada datanya atau nggak
        // o(n^2), Premature optimization is the root of all evil
        if (schema.data.length) {
            for (let i = 0; i < schema.data.length; i++) {
                if (data[i] !== undefined) {
                    for (let j = 0; j < schema.data[0].length; j++) {
                        if (data[i][j] !== undefined) data[i][j] = schema.data[i][j];
                    }
                }
            }
        }

        setSchema({
            columns: columnArray,
            data
        });
    };

    const handleInputChange = (i: number, j: number) => {
        return (ev: ChangeEvent<HTMLInputElement>) => {
            const newRow = [...schema.data[i]];
            newRow[j] = ev.target.value;
            const newRows = [...schema.data];
            newRows[i] = newRow;
            setSchema({ ...schema, data: newRows });
        };
    };

    const handleAutoCompleteChange = (i: number, j: number) => {
        return (_ev: any, value: any) => {
            const newRow = [...schema.data[i]];
            newRow[j] = value === null ? '' : value.name;
            const newRows = [...schema.data];
            newRows[i] = newRow;
            setSchema({ ...schema, data: newRows });
        };
    };

    return (
        <Dialog maxWidth="lg" fullWidth disableScrollLock disableEscapeKeyDown open={open} onClose={onClose} fullScreen>
            <DialogTitle disableTypography classes={{ root: classes.title }}>
                Create Table & Standings
            </DialogTitle>
            <DialogContent dividers>
                <div className={classes.container}>
                    <div className={classes.toolbar}>
                        <TextField spellCheck={false} InputLabelProps={{ shrink: true }} label="Title" size="small" />
                        <TextField
                            spellCheck={false}
                            InputLabelProps={{ shrink: true }}
                            label="Description"
                            size="small"
                            multiline
                        />
                        <TextField
                            spellCheck={false}
                            InputLabelProps={{ shrink: true }}
                            label="Column"
                            size="small"
                            multiline
                            placeholder="col1, col2, col3..."
                            value={column}
                            onChange={handleColumnChange}
                        />
                        <TextField
                            InputLabelProps={{ shrink: true }}
                            label="Rows"
                            size="small"
                            type="number"
                            value={rowsSize}
                            onChange={handleRowsChange}
                        />
                        <Typography variant="caption">
                            Size: {columnsSize} x {rowsSize === '' ? 0 : rowsSize}
                        </Typography>
                        <FormControlLabel
                            control={<Checkbox checked={expand} onChange={handleExpandChange} name="expand" />}
                            label={<Typography variant="caption">Expand</Typography>}
                        />
                        <Button
                            variant="contained"
                            disableElevation
                            color="secondary"
                            onClick={handleCreateTable}
                            size="small"
                        >
                            {schema.data.length && schema.columns.length ? 'Update Table' : 'Create New Table'}
                        </Button>
                        <Button variant="outlined" color="primary" onClick={handleReset} size="small">
                            Reset
                        </Button>
                    </div>
                    <div className={classes.table}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ width: 50 }}>No.</TableCell>
                                    {schema.columns.map((column, index) => (
                                        <TableCell key={index}>{column}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {schema.data.map((rows, i) => (
                                    <TableRow key={i}>
                                        <TableCell>{i + 1}</TableCell>
                                        {rows.map((_cell, j) => (
                                            <TableCell key={j}>
                                                {j === participantNameIndex ? (
                                                    <Autocomplete
                                                        {...autoComplete}
                                                        onChange={handleAutoCompleteChange(i, j)}
                                                        freeSolo
                                                        renderInput={(params) => (
                                                            <TextField
                                                                {...params}
                                                                ref={params.InputProps.ref}
                                                                fullWidth
                                                                onChange={handleInputChange(i, j)}
                                                                value={schema.data[i][j]}
                                                                placeholder="...."
                                                                style={{ minWidth: 100 }}
                                                                InputProps={{
                                                                    ...params.InputProps,
                                                                    disableUnderline: true
                                                                }}
                                                            />
                                                        )}
                                                    />
                                                ) : (
                                                    <TextField
                                                        onChange={handleInputChange(i, j)}
                                                        fullWidth
                                                        value={schema.data[i][j]}
                                                        placeholder="...."
                                                        InputProps={{ disableUnderline: true }}
                                                    />
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
                <Button size="small" color="primary" variant="text" onClick={handleCancel}>
                    Cancel
                </Button>
                <Button size="small" color="primary" variant="text" onClick={handleSave}>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default StandingMaker;
