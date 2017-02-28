/* eslint-disable */
import React, { PropTypes, Component } from 'react'
import AttributeColorLiType from './AttributeColorLiType'

export default class AttributeColorType extends Component {
    render() {

        var rows = [],
                possibleCombinations = this.props.possibleCombinations,
                group = this.props.group,
                full = this.props.full,
                el = this.props.el,
                changeEvent = this.props.changeEvent,
                choice = this.props.choice

        Object.keys(el.attributes_order).map(function (index) {
            var objectKey = el.attributes_order[index];          
            var value = el.attributes[objectKey];
            if(full || group in possibleCombinations && objectKey in possibleCombinations[group])
                rows.push(<AttributeColorLiType key={objectKey} 
                                                id={objectKey}
                                                group={group}
                                                name={value} 
                                                choice={choice}
                                                changeEvent={changeEvent}
                                                el={el} />);
        });

        return <ul id="color_to_pick_list" className="clearfix">
            {rows}
        </ul>
    }
}
// http://dreamline.com/shower-bases/dreamline-slimline-double-threshold-shower-base_dlt-1036360.html
