import React from 'react';
import PropTypes from 'prop-types';
import './PropertyItems.css';
import PropertyRow from '../PropertyRow/PropertyRow';

const PropertyItems = props => {
    var rows = [];
    var propertyList = props.properties;
    var { filterDistrict, filterType } = props;

    propertyList.forEach((item, index, obj) => {
        if (item.district.toLowerCase().indexOf(filterDistrict.toLowerCase()) === -1) {
            return;
        }
        if(filterType !== 'All' && filterType !== item.type){
            return;
        }
        rows.push(
            <PropertyRow key={item.location}
                property={item} />
        )
    });

    return (
        <div className="container">{rows}</div>
    );
};

PropertyItems.propTypes = {
    properties: PropTypes.array,
    filterType: PropTypes.string,
    filterDistrict: PropTypes.string
};

export default PropertyItems;