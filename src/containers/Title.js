import React, { Component } from 'react'
import { connect } from 'react-redux'

class TitleBlock extends Component {
    render() {
        const id = this.props.defaultCombinations.idCombination;
        const titles = Object.values(this.props.specifications.title);
        var title = '';

        if (id in titles[0])
            title = titles[0][id];

        return <span>{title}</span>
    }
}

function mapStateToProps(state) {
    return {
        defaultCombinations: state.defaultCombinations,
        specifications: state.specifications
    }
}

export default connect(mapStateToProps)(TitleBlock)

