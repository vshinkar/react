import React, { Component } from 'react'
import SpecificationRow from './SpecificationRow'
import SpecificationRowAttach from './SpecificationRowAttach'

export default class Specifications extends Component {
    render(){
        const info = this.props.specifications.specification;
        const attach = this.props.specifications.attached;
        const id = this.props.defaultCombinations.idCombination;
        var li = [];

        Object.keys(info).map(function (objectKey, index) {
            li.push(<SpecificationRow key={index} name={objectKey} value={info[objectKey][id]} />)
        })

        li.push(<SpecificationRowAttach attach={attach} 
                                        key="idTab2_" 
                                        id={id} 
                                        prefix="idTab2_"
                                        slug="li"/>)

        return <ul id="idTab2" className="bullet block_hidden_only_for_screen">
            {li}
        </ul>
    }
}
