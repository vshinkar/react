import React, { Component } from 'react'

import { FULL_URL, PRODUCT_MANUAL, PRODUCT_WARRANTY,
        PRODUCT_DRAWING1, PRODUCT_DRAWING2, PRODUCT_DRAWING3,
        BROCHURE_ICON, WARRANTY_ICON,
        PRODUCT_MANUAL_TITLE, PRODUCT_WARRANTY_TITLE, PRODUCT_DRAWING_TITLE
} from '../constants/Global'


export default class SpecificationRowAttachItem extends Component {
    render() {
        var name,
                img,
                className,
                rel,
                fancyboxGroup,
                hideBlock;

        switch (this.props.name) {
            case PRODUCT_MANUAL:
                name = PRODUCT_MANUAL_TITLE;
                img = FULL_URL + BROCHURE_ICON;
                break;

            case PRODUCT_WARRANTY:
                name = PRODUCT_WARRANTY_TITLE;
                img = FULL_URL + WARRANTY_ICON;

                break;

            case PRODUCT_DRAWING1:
                name = PRODUCT_DRAWING_TITLE;
                img = FULL_URL + BROCHURE_ICON;
                className = 'fancybox_tech_doc';
                fancyboxGroup = this.props.prefix+'_technical-drawings_'+this.props.id;
                
                break;
                
            case PRODUCT_DRAWING2:
                name = PRODUCT_DRAWING_TITLE;
                img = FULL_URL + BROCHURE_ICON;
                className = 'fancybox_tech_doc';
                fancyboxGroup = this.props.prefix+'_technical-drawings_'+this.props.id;
                hideBlock = true;

                break;
                
            case PRODUCT_DRAWING3:
                name = PRODUCT_DRAWING_TITLE;
                img = FULL_URL + BROCHURE_ICON;
                className = 'fancybox_tech_doc';
                fancyboxGroup = this.props.prefix+'_technical-drawings_'+this.props.id;
                hideBlock = true;
                
                break;
                
            default:

                break;
        }

        var block = this.props.link ? <a href={this.props.link}
                    className ={className}
                    data-fancybox-group={fancyboxGroup}
                    rel={rel}
                    target="_blank">
                    {!hideBlock ? <img src={img} /> : null}
                    {!hideBlock ? <span>{name}</span> : null}
                </a> : null;

        return <div className="col-sm-4" style={hideBlock ? { display: 'none' } : {}} >
                {block}
            </div>        
    }
}