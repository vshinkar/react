import React, { Component } from 'react'

export default class SpecificationRow extends Component {
    render(){
        return <li>
                <div className="clearfix">
                    <span className="name_bullet col-sm-5 col-xs-5 ">{this.props.name}</span>
                    <span className="value_bullet col-sm-7 col-xs-7">{this.props.value}</span>
                </div>        
            </li>
    }
}