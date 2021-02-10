import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import { browserHistory } from "react-router";
import React from "react";

import reducer from "./reducers";

const STATE_NODE_SIZE_LIMIT = 1000;
const TRUNCATE_LARGE_STATE_CHARACTERS = 100;

const devtoolsCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const checkNodeSize = node => {
    try {
        const nodeString = JSON.stringify(node);
        const nodeSize = nodeString && nodeString.length;

        return nodeSize >= STATE_NODE_SIZE_LIMIT;
    } catch (e) {
        return true;
    }
};

const truncateNode = node => {
    try {
        return `${JSON.stringify(node).substring(0, TRUNCATE_LARGE_STATE_CHARACTERS)}…`;
    } catch (e) {
        return "<<CIRCULAR>>";
    }
};

const minimizeStateNode = node => {
    if (typeof node === "function") {
        return {
            node: "<<FUNCTION>>",
            modified: true,
        };
    } else if (node && React.isValidElement(node)) {
        return {
            node: "<<REACT_NODE>>",
            modified: true,
        };
    } else if (node && typeof node === "object" && !Array.isArray(node)) {
        if (checkNodeSize(node)) {
            const copiedNode = {};
            let innerNodeIsLarge = false;

            Object.keys(node).forEach(key => {
                const { node: innerNode, modified } = minimizeStateNode(node[key]);

                copiedNode[key] = innerNode;

                if (!innerNodeIsLarge && modified) {
                    innerNodeIsLarge = modified;
                }
            });

            if (innerNodeIsLarge) {
                return {
                    node: copiedNode,
                    modified: true,
                };
            } else {
                return {
                    node: truncateNode(node),
                    modified: true,
                };
            }
        } else {
            return {
                node,
                modified: false,
            };
        }
    } else if (Array.isArray(node)) {
        let arrayModified = false;
        const arrayNode = node.map(item => {
            const { node, modified } = minimizeStateNode(item);

            if (modified) {
                arrayModified = true;
            }

            return node;
        });

        return {
            node: arrayNode,
            modified: arrayModified,
        };
    } else {
        if (checkNodeSize(node)) {
            return {
                node: truncateNode(node),
                modified: true,
            };
        } else {
            return {
                node,
                modified: false,
            };
        }
    }
};

const minimizePayload = payload => minimizeStateNode(payload).node;

const actionSanitizer = action => {
    const { type, ...actionPayload } = action;
    return { type, ...minimizePayload(actionPayload) };
};

const stateSanitizer = state => minimizePayload(state);

// Use redux devtools compose if available
const composeEnhancers = devtoolsCompose
    ? devtoolsCompose({
          actionSanitizer,
          stateSanitizer,
      })
    : compose;

// Create the react router middleware
const middleware = routerMiddleware(browserHistory);

export default createStore(reducer, composeEnhancers(applyMiddleware(thunk, middleware)));
