import React from 'react';
import Proptypes from 'prop-types';
import './PropertyRow.css'

const PropertyRow = props => {
    var {property} = props;
    return (
        <div className="property-container" key={property.location}>
            <div className="info-container">
                <div className="main-info">
                    <p className="text-left">{property.district}</p>
                    <p className="text-right">{property.location}</p>
                </div>
                <div className="secondary-info">
                    <p className="text-left">{property.type}</p>
                    <p className="text-right">{property.price}</p>
                </div>
            </div>
            <div className="button-container">
                <a href="http://localhost:3000/">CONTACT</a>
            </div>
        </div>
    );
};

PropertyRow.propTypes = {
    property: Proptypes.any
};

export default PropertyRow;