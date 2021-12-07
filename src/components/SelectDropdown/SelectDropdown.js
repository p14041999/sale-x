import React, { useState } from 'react';
import Select from 'react-select';

// custom
import { primaryColor } from '../../styles/variables.module.scss';

const SelectDropdown = props => {
  const { options, placeholder } = props;
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Select
      placeholder={placeholder}
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={options}
      styles={listingStyles}
    />
  );
};

const listingStyles = {
  indicatorSeparator: styles => ({
    ...styles,
    border: 'none',
    display: 'none',
  }),
  input: styles => ({
    ...styles,
    fontSize: '12px',
    fontWeight: 700,
    fontFamily: 'Montserrat',
    color: primaryColor,
  }),
  placeholder: styles => ({
    ...styles,
    fontSize: '12px',
    color: primaryColor,
    fontWeight: 700,
    fontFamily: 'Montserrat',
    padding: 0,
  }),
  control: (styles, state) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
    lineHeight: 1.25,
    backgroundColor: 'white',
    border: 'none',
    height: 46,
    border: '1px solid #474646',
    borderRadius: 10,
    width: '100%',
    '@media only screen and (max-width: 1024px)': {
      ...styles['@media only screen and (max-width: 1024px)'],
      padding: 0,
      width: 130,
    },
  }),
};

export default SelectDropdown;
