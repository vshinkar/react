import React, { PropTypes, Component } from 'react'
import AttributeSelectType from '../components/AttributeSelectType';
import AttributeColorType from '../components/AttributeColorType';

export default class AttributeType extends Component {
    render() {
        var el = '',
                obj = this.props.element,
                name = '';
        
        if(obj.name == 'Finishes')
            name = obj.attributes[this.props.choice]

        switch (obj.group_type) {
            case 'color':
                el = <AttributeColorType key={obj.group_type + '_' + obj.default} 
                                    group={this.props.group} 
                                    possibleCombinations={this.props.possibleCombinations} 
                                    choice={this.props.choice}
                                    changeEvent={this.props.changeEvent}
                                    el={obj} />
                break;

            case 'select':
                el = <AttributeSelectType key={obj.group_type + '_' + obj.default}  
                                     group={this.props.group} 
                                     possibleCombinations={this.props.possibleCombinations} 
                                     choice={this.props.choice}
                                     changeEvent={this.props.changeEvent}
                                     el={obj} />
                break;

            default:

                break;
        }

        return <fieldset className={'attribute_fieldset ' + obj.class}> 
            <label className="attribute_label">{obj.group_name}:&nbsp;<span>{name}</span></label>
            <div className="attribute_list">
                {el}
            </div>
        </fieldset>
    }
}
