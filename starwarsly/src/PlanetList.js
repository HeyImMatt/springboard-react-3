import React from 'react';
import {useSelector} from 'react-redux';
import ItemList from './ItemList'

// Logic needed to wrap item list to make it specific to planets
function PlanetList() {
  const items = useSelector(st => Object.values(st.planets).map(
    p => ({...p, url: `/planets/${p.id}`})
  ));
  return <ItemList title="Planets" items={items} />;
}

export default PlanetList;