import React, { Component } from 'react'
import { connect } from 'react-redux'

class TitleBlock extends Component {
    render() {
        const id = this.props.defaultCombinations.idCombination;
        const titles = this.props.specifications.title;
        var title = '';

        Object.keys(titles).map(function(key) {
            if(id in titles[key])
                title = titles[key][id];
        });

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

