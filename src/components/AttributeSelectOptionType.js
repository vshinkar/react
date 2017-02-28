import React, { Component } from 'react'

export default class AttributeSelectOptionType extends Component {
    render() {
        return <option value={this.props.value} title={this.props.name}>{this.props.name}</option>
    }
}
