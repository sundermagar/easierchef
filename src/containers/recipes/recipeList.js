import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Ingredient from './ingredient';

const useStyles = makeStyles({
    container: {
        padding: 16
    },
    responsiveImg: {
        width: '100%',
    },
    recipeImage: {
        padding: '15px'
    },
    h2: {
        marginTop: '15px',
        padding: '0px'
    },

});

function RecipeList({ recipes }) {
    const classes = useStyles();
    return (
        <Container className={classes.container} maxWidth="lg">
            {!recipes.length
                ?
                <Typography variant="h6" color="error">No Recipe to display</Typography>
                :
                (<Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={16}
                >
                    {recipes.map((item, index) => {
                        return (
                            <>
                                <Grid xs={12} sm={12} md={6} lg={6} key={index} item className={classes.recipeImage}>
                                    <img src={item.image} alt={item.name} className={classes.responsiveImg} />
                                </Grid>
                                <Grid xs={12} sm={12} md={6} lg={6} key={index} item >
                                    <h2 className={classes.h2}>{item.name}</h2>
                                    <Ingredient ingredients={item.ingredients} />
                                    <h2 className={classes.h2}>Procedure</h2>
                                    <p>
                                    {item.procedure}
                                    </p>
                                    
                                </Grid>
                            </>
                        )
                    })}
                </Grid>)
            }
        </Container>
    )

}

export default RecipeList;