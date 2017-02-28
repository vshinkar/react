import React, { Component } from 'react'
import { PRODUCT_LINK } from '../constants/Global'

export default class AttributeColorLiType extends Component {
    constructor(props) {
        
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        e.preventDefault();
        e.stopPropagation();
        this.props.changeEvent(parseInt(this.props.group, 10), parseInt(this.props.id, 10));
        
        return false;
    }
    render() {
        var el = this.props.el

    var img = el.path[this.props.id] ?
                <img src={el.path[this.props.id]} alt={this.props.name} title={this.props.name} /> : '';

        return <li className={this.props.choice === parseInt(this.props.id, 10) ? 'selected checked' : ''} onClick={this.handleChange}>
            <a href={PRODUCT_LINK} 
               id={el.group_type + '_' + this.props.id} 
               name={this.props.name} 
               className="color_pick" 
               title={this.props.name}
               style={{background: !el.path[this.props.id] ? this.props.name : '' }}>
               {img}
            </a>
        </li>
    }
}
