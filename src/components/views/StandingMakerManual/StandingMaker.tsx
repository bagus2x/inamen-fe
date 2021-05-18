import { ChangeEvent, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TableIcon from '@material-ui/icons/TableChartRounded';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import useStyles from '~components/views/StandingMaker/styles';
import useDebounce from '~libs/hooks/debounce';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Divider } from '@material-ui/core';

interface StandingMakerProps {
    open: boolean;
    onClose: () => void;
}

interface Schema {
    data: Array<Array<any>>;
    column: Array<string>;
}

function StandingMaker({ open, onClose }: StandingMakerProps) {
    const classes = useStyles();
    const [columnsName, setColumnsName] = useState<Array<string>>([]);
    const [column, setColumn] = useState('');
    const [rowsSize, setRowsSize] = useState(0);
    const [rows, setRows] = useState(0);
    const [expand, setExpand] = useState(false);
    const [schema, setSchema] = useState<Schema>({ column: [], data: [] });

    useEffect(() => {
        setSchema({ column: ['a', 'b'], data: [[]] });
    }, []);

    const handleSave = () => {
        onClose();
    };

    const handleCancel = () => {
        onClose();
    };

    const saveColumnsName = useDebounce((columnsStr: string) => {
        const columns = columnsStr
            .replace(/ +/g, ' ')
            .split(',')
            .filter((column) => column !== ' ' && column.length > 0)
            .map((column) => column.trim());
        setColumnsName(columns);
    }, 1000);

    const saveRowsSize = useDebounce((rowsSize: number) => {
        setRowsSize(rowsSize);
    }, 1000);

    const handleColumnChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setColumn(ev.target.value);
        saveColumnsName(ev.target.value);
    };

    const handleRowsChange = (ev: ChangeEvent<HTMLInputElement>) => {
        const size = parseInt(ev.target.value);
        if (!isNaN(size)) {
            setRows(size);
            saveRowsSize(size);
        }
    };

    const handleExpandChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setExpand(ev.target.checked);
    };

    const handleReset = () => {
        setColumnsName([]);
        setColumn('');
        setRowsSize(0);
        setRows(0);
        setExpand(false);
    };

    return (
        <Dialog maxWidth="lg" fullWidth disableScrollLock disableEscapeKeyDown open={open} onClose={onClose} fullScreen>
            <DialogTitle disableTypography classes={{ root: classes.title }}>
                Create Standing
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
                            value={rows}
                            onChange={handleRowsChange}
                        />
                        <Typography variant="caption">
                            Size: {columnsName.length} x {rowsSize}
                        </Typography>
                        <FormControlLabel
                            control={<Checkbox checked={expand} onChange={handleExpandChange} name="expand" />}
                            label={<Typography variant="caption">Expand</Typography>}
                        />
                        <Button variant="outlined" color="primary" onClick={handleReset} size="small">
                            Reset
                        </Button>
                        <Button
                            variant="contained"
                            disableElevation
                            color="secondary"
                            onClick={handleReset}
                            size="small"
                        >
                            Lock
                        </Button>
                    </div>
                    <div className={classes.table}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {columnsName.map((column, index) => (
                                        <TableCell key={index}>{column}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody></TableBody>
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
