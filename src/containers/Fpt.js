import React, { Component } from 'react'
        import { connect } from 'react-redux'
        import { FPT_TITLE } from '../constants/Global'

        import FptRow from '../components/FptRow'
        import { fetchFptIfNeeded } from '../actions/FptActions'

        class FptBlock extends Component {
    componentDidMount() {
        const dispatch = this.props.dispatch;
        dispatch(fetchFptIfNeeded(this.props.defaultCombinations.reference))
    }
    componentDidUpdate() {
        const dispatch = this.props.dispatch;
        dispatch(fetchFptIfNeeded(this.props.defaultCombinations.reference))

        if (!this.props.isFetching && this.props.fpt.length)
            window.initFpt();
    }
    render() {
        const fpt = this.props.fpt;
        var rows = [];

        if(typeof fpt !== 'object')
            return <div/>;
        
        Object.keys(fpt).map(function (key) {
            rows.push(<FptRow key={key} fpt={fpt[key]} />)
        });

        return rows.length ? <div className="fpt easycarousels">
            <h2 className="title_main_section carousel_title"><span>{FPT_TITLE}</span></h2>
            <div>
                <div id="fpt" className="easycarousel carousel_block grid_arrows">
                    {rows}
                </div>
            </div>
        </div> :
                <div/>;

    }
}

function mapStateToProps(state) {
    const {defaultCombinations, fptReducer} = state

    const {
        isFetching,
        lastUpdated,
        items: fpt
    } = fptReducer.fptByReference[defaultCombinations.reference] || {
        isFetching: true,
        items: []
    }

    return {
        fpt,
        defaultCombinations: state.defaultCombinations,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(FptBlock)

