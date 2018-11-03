import React from 'react';
import PropTypes from 'prop-types';
import './PropertyItems.css';

const PropertyItem = props => {
    var rows = [];
    var propertyList = props.properties;
    var {filterDistrict, filterType} = props;

    propertyList.forEach((item,index,obj) => {
        if(item.district.toLowerCase().indexOf(filterDistrict.toLowerCase()) === -1){
            return;
        }
        if(item.type.toLowerCase().indexOf(filterType.toLowerCase()) === -1){
            return;
        }
        rows.push(
            <div className="property-container" key={item.location}>
                <div className="info-container">
                    <div className="main-info">
                        <p className="text-left">{item.district}</p>
                        <p className="text-right">{item.location}</p>
                    </div>
                    <div className="secondary-info">
                        <p className="text-left">{item.type}</p>
                        <p className="text-right">{item.price}</p>
                    </div>
                </div>
                <div className="button-container">
                    <a href="http://localhost:3000/">CONTACT</a>
                </div>
            </div>
        )
    });

    return (
        <div className="container">{rows}</div>
    );
};

PropertyItem.propTypes = {
    properties: PropTypes.array,
    filterType: PropTypes.string,
    filterDistrict: PropTypes.string
};

export default PropertyItem;