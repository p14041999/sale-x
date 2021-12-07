import React, { useState, useEffect, Fragment } from 'react';
import Select from 'react-select';

import { primaryColor } from '../../styles/variables.module.scss';
import { MobileMenu } from '../Sidebar.js/Sidebar';

// dummy
const options = [
  { value: '23eabghd34nrn3nejdks', label: '23eabghd34nrn3nejdks' },
  { value: '23eabghd34nrn3nejdks', label: '23eabghd34nrn3nejdks' },
  { value: '23eabghd34nrn3nejdks', label: '23eabghd34nrn3nejdks' },
];

const MainPanel = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => setMobileMenu(!mobileMenu);

  return (
    <Fragment>
      <main className='flex-1 px-5 py-5 lg:pl-7 xl:pl-10 lg:pr-5  h-screen overflow-auto'>
        {/* top section */}
        {/* mobile nav */}
        <div className='header-m flex items-center justify-between lg:hidden'>
          <div className='logo'>
            <img src='/assets/icons/logo-m.svg' alt='' />
          </div>
          <div className='flex items-center gap-x-2'>
            <Select
              defaultValue={selectedOption}
              placeholder='23eabghd34nrn3nejdks'
              onChange={setSelectedOption}
              options={options}
              styles={DropdownStyles}
            />
            <button className='outline-none' onClick={toggleMobileMenu}>
              <img src='/assets/icons/hamburger-menu.svg' alt='' />
            </button>
          </div>
        </div>

        {/* large */}
        <section className='hidden w-full lg:flex gap-x-5 xl:gap-x-7 items-center'>
          <PanelCard title='SSN Balance' className='bg-[#F5F6F8] border-none'>
            <input
              readOnly
              value='0000.00'
              className='w-full h-[46px] bg-[#FDFDFD] rounded-[10px] text-[12px] xl:text-sm font-normal font-mont text-custom-primaryColor px-3 py-3 mt-1'
            />
          </PanelCard>
          <PanelCard title='BBN Balance' className='bg-[#F5F6F8] border-none'>
            <input
              readOnly
              value='0000.00'
              className='w-full h-[46px] bg-[#FDFDFD] rounded-[10px] text-[12px] xl:text-sm font-normal font-mont text-custom-primaryColor px-3 py-3 mt-1'
            />
          </PanelCard>
          <PanelCard title='Wallet' className='bg-[#F5F6F8] border-none'>
            <div className='w-full flex justify-between items-center h-[46px] bg-[#FDFDFD] rounded-[10px] px-3 py-3 mt-1'>
              <input
                readOnly
                value='23eabghd34nrn3nejdkska....'
                className='w-full text-[12px] font-normal font-mont text-custom-primaryColor'
              />
              <button className='outline-none'>
                <img src='/assets/icons/copy-icon.svg' alt='' />
              </button>
            </div>
          </PanelCard>
          <PanelCard title='BSC Network' className='bg-[#F5F6F8] border-none'>
            <button className='outline-none bg-custom-accentColor w-full h-[46px] mt-2 rounded-[10px] justify-between items-center'>
              <h1 className='font-mont font-bold text-white text-[12px] xl:text-sm'>
                Connect Wallet
              </h1>
            </button>
          </PanelCard>
        </section>

        {/* main section */}
        <Fragment>{children}</Fragment>

        <div className='lg:hidden  lg:py-6 flex flex-col items-center gap-y-4'>
          <img src='/assets/icons/logo-m.svg' alt='' />
          <div className='flex flex-col justify-center items-center gap-y-3'>
            <a
              href='https://'
              className='font-mont font-semibold text-[12px] text-[#A9A9A9]'
            >
              Terms and Condition
            </a>
            <a
              href='https://'
              className='font-mont font-semibold text-[12px] text-[#A9A9A9]'
            >
              Privacy policy
            </a>
          </div>
        </div>
      </main>

      {/* mobile menu */}
      <MobileMenu mobileMenu={mobileMenu} toggleMobileMenu={toggleMobileMenu} />
    </Fragment>
  );
};

export default MainPanel;

// custom
const PanelCard = props => {
  const { title, className, children } = props;
  return (
    <div
      className={`w-[24%] border border-solid rounded-[10px] border-[#000000] p-[10px] ${
        className && className
      }`}
    >
      <h1 className='font-semibold font-mont text-[12px] pb-1 text-custom-primaryColor'>
        {title}
      </h1>
      {children}
    </div>
  );
};

const DropdownStyles = {
  indicatorSeparator: styles => ({
    ...styles,
    border: 'none',
    display: 'none',
  }),
  input: styles => ({
    ...styles,
    fontSize: '12px',
    fontWeight: 400,
    fontFamily: 'Montserrat',
    color: primaryColor,
  }),
  placeholder: styles => ({
    ...styles,
    fontSize: '12px',
    fontWeight: 400,
    fontFamily: 'Montserrat',
    color: primaryColor,
  }),
  dropdownIndicator: styles => ({
    ...styles,
    fontWeight: 700,
    fontFamily: 'Montserrat',
    color: '#000000',
  }),
  control: (styles, state) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '0 5px',
    lineHeight: 1.25,
    backgroundColor: '#DEE6FF',
    border: 'none',
    height: 39,
    borderRadius: 5,
    width: 190,
  }),
};
