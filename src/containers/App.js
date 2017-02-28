/* eslint-disable */
import React, { Component } from 'react'
        import { bindActionCreators } from 'redux'
        import { connect } from 'react-redux'

        import createHistory from 'history/createBrowserHistory'
        import AttributeType from '../components/AttributeType'
        import * as pageActions from '../actions/PageActions'

        const history = createHistory()

class AttributesBlock extends Component {
    constructor(props) {
        super(props);
        this.state = props.defaultCombinations.attributes;

        this.stateTemp = this.state;

        this.defaultCombinations = props.defaultCombinations;
        this.handleChange = this.handleChange.bind(this);

        this.possibleCombinations = {};
    }
    handleChange(group, attribute) {
        var prevState = this.state;
        //check is the same
        if (prevState[group] === attribute)
            return;

        prevState[group] = attribute;
        this.stateTemp = prevState;

        if (!this.updateDefaultCombination())
            this.preparePossibleCombinations();
        else
            this.setState(prevState)


    }
    componentWillMount() {
        this.preparePossibleCombinations();
    }
    componentWillUpdate() {
        this.preparePossibleCombinations();
    }
    updateDefaultCombination() {
        var combinations = this.props.combinations,
                state = this.stateTemp,
                currentCombinations = this.defaultCombinations,
                defaultCombinations = {};

        Object.keys(combinations).map(function (objectKey, index) {
            var match = true;

            Object.keys(combinations[objectKey].idsAttributes).map(function (key, i) {
                if (!(key in state) || combinations[objectKey].idsAttributes[key] !== state[key])
                    match = false;

            })

            if (match)
                defaultCombinations = combinations[objectKey];

        })

        if (Object.keys(defaultCombinations).length !== 0) {
            this.defaultCombinations = defaultCombinations;
            this.props.pageActions.setDefaultCombination(defaultCombinations);

            //compatibility with old version start
            window.defaultCombinations = this.defaultCombinations;

            findCombination();
            //compatibility with old version end

            this.updateHistory(currentCombinations);
            return true;
        } else {
            return false;
        }

    }
    checkIfSelectedCombinationExist() {
        var state = this.stateTemp,
                changed = false,
                possibleCombinations = this.possibleCombinations;

        Object.keys(possibleCombinations).map(function (objectKey, index) {
            //set first attribute as default
            if (!(state[objectKey] in possibleCombinations[objectKey])) {
                state[objectKey] = parseInt(Object.keys(possibleCombinations[objectKey])[0], 10);
                changed = true;
            }
        })

        if (changed) {
            this.setState(state);
            this.updateDefaultCombination();
        } 
    }
    updateHistory(oldCombination) {
        var url = history.location.pathname.replace(oldCombination['reference'].toLowerCase(), this.defaultCombinations['reference'].toLowerCase());

        history.push(url);
    }
    preparePossibleCombinations() {
        var combinations = this.props.combinations,
                state = this.stateTemp,
                attributes = this.props.attributes,
                cheked = {},
                matched = false,
                possibleCombinations = {};

        // find all possible combinations for selected attribute
        Object.keys(attributes).map(function (attributeKey, index) {
            cheked = {};
            matched = false;
            Object.keys(state).map(function (checkedKey, i) {
                if (checkedKey === attributeKey)
                    matched = true;

                if (!matched)
                    cheked[checkedKey] = state[checkedKey];
            })

            Object.keys(combinations).map(function (objectKey, j) {

                var exist = true;
                Object.keys(cheked).map(function (chekedKey, n) {
                    if (!((chekedKey in combinations[objectKey].idsAttributes) && cheked[chekedKey] === combinations[objectKey].idsAttributes[chekedKey]))
                        exist = false;

                })

                if (exist) {

                    if (typeof possibleCombinations[parseInt(attributeKey, 10)] !== 'object')
                        possibleCombinations[parseInt(attributeKey, 10)] = {};

                    possibleCombinations[parseInt(attributeKey, 10)][combinations[objectKey].idsAttributes[parseInt(attributeKey, 10)]] = true;
                }

            })

        })

        this.possibleCombinations = possibleCombinations;

        this.checkIfSelectedCombinationExist();
    }
    render() {
        var attr = [],
                attributes = this.props.attributes,
                changeEvent = this.handleChange,
                choice = this.state,
                possibleCombinations = this.possibleCombinations;

        Object.keys(attributes).map(function (objectKey, index) {

            attr.push(<AttributeType key={objectKey} 
               group={objectKey}
               possibleCombinations={possibleCombinations} 
               changeEvent={changeEvent}
               choice={choice[objectKey]}
               element={attributes[objectKey]} />);
        })

        return <div>
                {attr}
            </div>
    }
}

function mapStateToProps(state) {
    return {
        attributes: state.attributes,
        combinations: state.combinations,
        defaultCombinations: state.defaultCombinations,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AttributesBlock)