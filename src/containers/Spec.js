import React, { Component } from 'react'
import { connect } from 'react-redux'
import Description from '../components/Description'
import Specifications from '../components/Specifications'

class SpecificationBlock extends Component {
    render() {
        const specifications = this.props.specifications        
        return <div>
            <Description specifications={specifications} defaultCombinations={this.props.defaultCombinations} />
            <Specifications specifications={specifications} defaultCombinations={this.props.defaultCombinations}/>
        </div>
    }
}

function mapStateToProps(state) {
  return {
    defaultCombinations: state.defaultCombinations,
    specifications: state.specifications
  }
}

export default connect(mapStateToProps)(SpecificationBlock)

