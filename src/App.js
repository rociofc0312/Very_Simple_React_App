import React, { Component } from 'react';
import './App.css';
import PropertyItems from './PropertyItems/PropertyItems';
import SearchPanel from './SearchPanel/SearchPanel'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterDistrict: '',
      filterType: 'All'
    }

    this.handleFilterDistrictChange = this.handleFilterDistrictChange.bind(this);
    this.handleFilterTypeChange = this.handleFilterTypeChange.bind(this);
  }

  handleFilterDistrictChange(district) {
    this.setState({
      filterDistrict: district
    });
  }
  handleFilterTypeChange(type) {
    this.setState({
      filterType: type
    })
  }

  render() {
    var {filterType, filterDistrict} = this.state;
    return (
      <div className="App">
        <div>
          <SearchPanel
            filterType={filterType}
            filterDistrict={filterDistrict}
            onHandleFilterDistrictChange={this.handleFilterDistrictChange}
            onHandleFilterTypeChange={this.handleFilterTypeChange} />
          <PropertyItems
            properties={PROPERTIES}
            filterType={this.state.filterType}
            filterDistrict={this.state.filterDistrict} />
        </div>
      </div>
    );
  }
}

const PROPERTIES = [
  { district: 'Ate', location: 'Flamengos 430', type: "Alquiler", price: '$1,000' },
  { district: 'Ate', location: 'Canastas 760', type: "Alquiler", price: '$1,200' },
  { district: 'Ate', location: 'Las Flores 1410', type: "Venta", price: '$276,000' },
  { district: 'Barranco', location: 'La Rotonda 1320', type: "Venta", price: '$380,000' },
  { district: 'Barranco', location: 'Los Robles 1010', type: "Venta", price: '$430,000' },
  { district: 'La Molina', location: 'Flora Tristan 430', type: "Alquiler", price: '$1,500' },
  { district: 'La Molina', location: 'Camelias 7380', type: "Alquiler", price: '$1,700' },
  { district: 'La Molina', location: 'Tenores 410', type: "Alquiler", price: '$1,950' },
  { district: 'Lima', location: 'Arequipa 779', type: "Alquiler", price: '$1,000' },
  { district: 'Lima', location: 'Naciones 950', type: "Alquiler", price: '$1,180' },
  { district: 'Lima', location: 'Abancay 2490', type: "Venta", price: '$250,000' },
  { district: 'Miraflores', location: 'Pinos 1203', type: "Alquiler", price: '$1,800' },
  { district: 'Miraflores', location: 'Principal 4100', type: "Alquiler", price: '$2,000' },
  { district: 'Miraflores', location: 'Patriotas 678', type: "Venta", price: '$490,000' },
  { district: 'Miraflores', location: 'Madrid 2234', type: "Venta", price: '$580,000' },
  { district: 'Pueblo Libre', location: 'Maranga 1430', type: "Alquiler", price: '$1,500' },
  { district: 'Pueblo Libre', location: 'Barcelona 736', type: "Alquiler", price: '$1,700' },
  { district: 'Pueblo Libre', location: 'Silencio 3264', type: "Alquiler", price: '$2,000' },
  { district: 'San Borja', location: 'Venezuela 1180', type: "Alquiler", price: '$470,000' },
];

export default App;
