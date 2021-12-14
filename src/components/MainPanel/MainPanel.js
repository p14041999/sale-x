import React, { useState, useEffect, Fragment } from 'react';
import Select from 'react-select';

import { primaryColor } from '../../styles/variables.module.scss';
import { MobileMenu } from '../Sidebar.js/Sidebar';
import { DropdownIcon } from '../SvgIcons/SvgIcons';

// dummy
const options = [
  { value: '23eabghd34nrn3nejdks', label: '23eabghd34nrn3nejdks' },
  { value: '23eabghd34nrn3nejdks', label: '23eabghd34nrn3nejdks' },
  { value: '23eabghd34nrn3nejdks', label: '23eabghd34nrn3nejdks' },
];
import { useAppContext } from '../../contexts/AppContext';

const MainPanel = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [menuDrop, setMenuDrop] = useState(false);

  const app = useAppContext();

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
          <div className='flex items-center gap-x-4'>
            <div
              className='relative z-40'
              style={{
                boxShadow: menuDrop && '0px 4px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div
                onClick={() => setMenuDrop(!menuDrop)}
                className='p-2 w-[198px] h-[39px] flex items-center gap-x-3 rounded-[5px] bg-[#DEE6FF]'
                style={{
                  borderBottomLeftRadius: menuDrop && 0,
                  borderBottomRightRadius: menuDrop && 0,
                }}
              >
                <h1 className='font-mont text-[12px] text-custom-primaryColor'>
                  {app.accountAddress}
                </h1>
                <div className='text-[#000]'>
                  <DropdownIcon />
                </div>
              </div>

              <div
                className={`w-full bg-[#DEE6FF] absolute z-40 px-3 overflow-hidden transition-all duration-150 ${
                  menuDrop ? 'h-auto ease-in max-h-screen' : 'max-h-0 ease-out'
                }`}
                style={{
                  borderBottomLeftRadius: menuDrop && 5,
                  borderBottomRightRadius: menuDrop && 5,
                  boxShadow: menuDrop && '0px 4px 4px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className='w-full flex justify-between items-center h-[34px] bg-[#FFFFFF] rounded-[5px] px-3 py-3'>
                  <input
                    readOnly
                    value={app.accountAddress}
                    className='w-full text-[12px] font-normal font-mont text-custom-primaryColor'
                  />
                  <button className='outline-none'>
                    <img src='/assets/icons/copy-icon.svg' alt='' />
                  </button>
                </div>
                <div className='py-5 flex flex-col gap-y-3'>
                  <div className='flex items-center gap-x-3'>
                    <h1 className='font-mont font-semibold text-[12px] text-custom-primaryColor'>
                      BNB Balance
                    </h1>
                    <div className='flex-1 bg-white rounded-[5px] h-[32px] px-3 flex justify-center items-center'>
                      <h1 className='font-mont text-[12px] text-custom-primaryColor'>
                        0000.00
                      </h1>
                    </div>
                  </div>
                  <div className='flex items-center gap-x-3'>
                    <h1 className='font-mont font-semibold text-[12px] text-custom-primaryColor'>
                      SSN Balance
                    </h1>
                    <div className='flex-1 bg-white rounded-[5px] h-[32px] px-3 flex justify-center items-center'>
                      <h1 className='font-mont text-[12px] text-custom-primaryColor'>
                        0000.00
                      </h1>
                    </div>
                  </div>

                  <button className='h-[36px] w-full rounded-[5px] bg-custom-accentColor flex justify-center items-center'>
                    <h1 className='font-mont font-bold text-white text-[12px]'>
                      Buy SSN
                    </h1>
                  </button>
                </div>
              </div>
            </div>
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
          <PanelCard title='BNB Balance' className='bg-[#F5F6F8] border-none'>
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
                value={app.accountAddress}
                className='w-full text-[12px] font-normal font-mont text-custom-primaryColor'
              />
              <button className='outline-none'>
                <img src='/assets/icons/copy-icon.svg' alt='' />
              </button>
            </div>
          </PanelCard>
          {app.walletConnected?
          <PanelCard title='BSC Network' className='bg-[#F5F6F8] border-none'>
            <button className='outline-none bg-custom-accentColor w-full h-[46px] mt-2 rounded-[10px] justify-between items-center'>
              <h1 className='font-mont font-bold text-white text-[12px] xl:text-sm'>
                Buy SSN
              </h1>
            </button>
          </PanelCard>:
          <PanelCard title='BSC Network' className='bg-[#F5F6F8] border-none'>
            <button className='outline-none bg-custom-accentColor w-full h-[46px] mt-2 rounded-[10px] justify-between items-center'>
              <h1 className='font-mont font-bold text-white text-[12px] xl:text-sm'>
                Connect Wallet
              </h1>
            </button>
          </PanelCard>}
        </section>

        {/* main section */}
        <Fragment>
          {children}
          <div className='lg:hidden lg:py-6 flex flex-col items-center gap-y-4'>
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
        </Fragment>
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
