import React, { Component } from 'react'
import SpecificationRowAttachItem from './SpecificationRowAttachItem'

export default class SpecificationRowAttach extends Component {
    render() {
        var attach = this.props.attach,
            id = this.props.id,
            prefix = this.props.prefix,
            div = [];
        
        Object.keys(attach).map(function (objectKey, index) {
            div.push(<SpecificationRowAttachItem key={index+prefix} 
                                                name={objectKey} 
                                                link={attach[objectKey][id]}
                                                id={id}
                                                prefix={prefix}/>)
        })

        return <this.props.slug className="row document-icon">
            {div}
        </this.props.slug>
    }
}