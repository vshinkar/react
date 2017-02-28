/* eslint-disable */
import React, { PropTypes, Component } from 'react'
import AttributeSelectOptionType from './AttributeSelectOptionType'

export default class AttributeSelectType extends Component {
    constructor(props) {
        
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.changeEvent(parseInt(this.props.group, 10), parseInt(e.target.value, 10));
    }
    render() {

        var rows = [],
                possibleCombinations = this.props.possibleCombinations,
                group = this.props.group,
                el = this.props.el;

        Object.keys(el.attributes).map(function (objectKey, index) {
            var value = el.attributes[objectKey];
            if(group in possibleCombinations && objectKey in possibleCombinations[group])
                rows.push(<AttributeSelectOptionType key={objectKey} name={value} value={objectKey} />)
        });

        return <select name={'group_' + this.props.group} 
                        id={'group_' + this.props.group} 
                        className="form-control attribute_select no-print"
                        value={this.props.choice}
                        onChange={this.handleChange}>
            {rows}
        </select>
    }
}