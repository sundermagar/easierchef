import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import RecipeList from './recipeList';

class Recipe extends Component {
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        const { recipes } = this.props;

        return (
            <Fragment>
                <RecipeList recipes={recipes}></RecipeList>
            </Fragment >
        )
    }
    static propTypes = {
    };
}

const mapStateToProps = state => ({
    recipes: state.recipes.recipes
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);