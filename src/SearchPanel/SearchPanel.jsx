import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchPanel.css'

class SearchPanel extends Component {

    constructor(props) {
        super(props);
        this.handleFilterDistrictChange = this.handleFilterDistrictChange.bind(this);
        this.handleFilterTypeChange = this.handleFilterTypeChange.bind(this);
    }

    handleFilterDistrictChange(e) {
        this.props.onHandleFilterDistrictChange(e.target.value);
    }

    handleFilterTypeChange(e) {
        this.props.onHandleFilterTypeChange(e.target.value);
    }

    render() {
        var { filterDistrict, filterType } = this.props;
        return (
            <div className="form-container">
                <form className="district-form">
                    <input type="text" placeholder="Filter by district..." className="search" value={filterDistrict} onChange={this.handleFilterDistrictChange} />
                </form>
                <form className="type-form">
                <label htmlFor="">Filter by: </label>
                    <select type="text" className="search" value={filterType} onChange={this.handleFilterTypeChange}>
                        <option value="All">All</option>
                        <option value="Alquiler">Alquiler</option>
                        <option value="Venta">Venta</option>
                    </select>
                </form>
            </div>
        )
    }
}

SearchPanel.propTypes = {
    filterDistrict: PropTypes.string,
    filterType: PropTypes.string,
    onHandleFilterDistrictChange: PropTypes.func,
    onHandleFilterTypeChange: PropTypes.func
}

export default SearchPanel;
