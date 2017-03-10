import React, { Component } from 'react'
import { MORE_LINK } from '../constants/Global'

export default class FptRow extends Component {
    render() {
        const { fpt } = this.props;
        var color_list = fpt.color_list ? <div id="fpt-color-list" className="color-list-container"><div dangerouslySetInnerHTML={{__html: fpt.color_list}} /></div> : <div className="no-ftp-color-list"></div>;

        return  <div className="c_col">
                    <div className="c_item  ajax_block_product">
                        <div className="product-container has-price has-buttons" itemScope="" itemType="http://schema.org/Product">
                            <div className="left-block">
                                <div className="product-image-container">
                                    <a className="product_img_link" href={fpt.combination_link} title={fpt.combination_title} itemProp="url">
                                        <img className="replace-2x img-responsive" src={fpt.combination_image} alt={fpt.combination_title} title={fpt.combination_title} itemProp="image"/>
                                    </a>
                                    <a itemProp="url" className="lnk_view btn" href={fpt.combination_link} title="View">
                                        <span>{MORE_LINK}</span>
                                    </a>
                                </div>
                            </div>
                            <div className="right-block">
                                {color_list}
                                <h5 itemProp="name" className="product-name">
                                    <a href={fpt.combination_link} className="product-name" title={fpt.combination_title} itemProp="url" >
                                        {fpt.combination_title}
                                    </a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
    }
}