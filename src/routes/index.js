import React, { Component } from "react";
import {
    BrowserRouter,
    Route,
    Switch
} from "react-router-dom";

import { connect } from "react-redux";

import Recipe from "../containers/recipes";
import AddRecipe from "../containers/recipes/addRecipe";

class Routes extends Component {
    shouldComponentUpdate() {
        // Router is always static
        return false;
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route component={AddRecipe} path="/add-recipe" />
                    <Route component={Recipe} path="" />
                </Switch>
            </BrowserRouter>
        );
    }
}

Routes.propTypes = {
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Routes);