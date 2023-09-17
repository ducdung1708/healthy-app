import React, { createContext, useState } from 'react';

const FilterContext = createContext();

const FilterContextProvider = (props) => {
  const [filterSelected, setFilterSelected] = useState('');

  return (
    // Step 2: Cung cấp giá trị cho Context bằng Provider
    <FilterContext.Provider value={{filterSelected,setFilterSelected}}>
      {props.children}
    </FilterContext.Provider>
  );
};
export { FilterContext, FilterContextProvider }
