import React, { Component } from 'react'
import SpecificationRowAttach from './SpecificationRowAttach'

export default class Description extends Component {
    render(){
        const description = Object.values(this.props.specifications.description);
        const id = this.props.defaultCombinations.idCombination;
        var text = '';
            
        if(id in description[0])
            text = description[0][id];

        return <div id="idTab1">
                <h3 className="for_print">Description</h3>
                <div dangerouslySetInnerHTML={{__html: text}} />
                <SpecificationRowAttach attach={this.props.specifications.attached} 
                                    id={id} 
                                    key="idTab1_" 
                                    prefix="idTab1_"
                                    slug="div"
                                    />
            </div>
    }
    
}