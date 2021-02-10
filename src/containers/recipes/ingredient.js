import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    container: {
        padding: 16
    },
    h3: {
        marginTop: '0px',
        padding: '0px'
    },
});

function Ingredient({ ingredients }) {
    const classes = useStyles();

    return (
        <>
            {/* // <Container className={classes.container} maxWidth="lg"> */}
            {!ingredients.length
                ?
                <Typography variant="h6" color="error">No Ingredients to display</Typography>
                :
                (
                    <>
                        <h3 className={classes.h3}>Ingredients</h3>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="right">Quantity</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {ingredients.map((item, index) => {
                                        return (
                                            <TableRow key={index}>
                                                <TableCell component="th" scope="row">
                                                    {item.name}
                                                </TableCell>
                                                <TableCell align="right">{item.quantity} {item.unit}</TableCell>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </>)
            }
            {/* // </Container> */}
        </>
    )

}

export default Ingredient;