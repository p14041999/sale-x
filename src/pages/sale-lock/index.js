import React, { useState, Fragment, useEffect, useRef } from 'react';
import Select from 'react-select';

// custom
import { primaryColor } from '../../styles/variables.module.scss';
import { LaunchPadHeader } from '../../components/Launchpad/LaunchPad';
import {
  LockedTokenCard,
  LockOptionsModal,
  SaleLockTab,
} from '../../components/SaleLock/SaleLock';
import { LOCKED_TOKENS, OWNER_LOCKED_TOKEN } from '../../utils/data';

const index = () => {
  const [activeTab, setActiveTab] = useState('Lock Liquidity');
  const [selectedUnlockTime, setSelectedUnlockTime] = useState(null);
  const [selectedVestingPeriod, setSelectedVestingPeriod] = useState(null);
  const [locker, setLocker] = useState(false);
  const [firstView, setFirstView] = useState(true);
  const [disclaimer, setDisclaimer] = useState(true);
  const [lockOptionsModal, setLockOptionsModal] = useState(false);
  const [activeLockOption, setActiveLockOption] = useState('self');

  const handleLockOptions = value => setActiveLockOption(value);
  const handleLocker = () => setLocker(!locker);
  const handleDisclaimer = () => setDisclaimer(prevState => !prevState);
  const handleFirstView = () => setFirstView(!firstView);
  const handleActiveTab = value => setActiveTab(value);
  const handleLockOptionsModal = () => setLockOptionsModal(!lockOptionsModal);

  return (
    <Fragment>
      <div className='py-7'>
        <LaunchPadHeader
          route='/sale-lock'
          bannerSmallText='View All Lockers In Salex lock'
          btnText='Manage Token Locker'
        />

        {/* tabs and tab contents */}
        <div className='pt-8 lg:pt-10'>
          {/* tab */}
          <SaleLockTab activeTab={activeTab} handleActiveTab={handleActiveTab}>
            <div title='Lock Liquidity'>
              <div className='py-8 lg:py-16 flex flex-col items-center'>
                <h1 className='font-semibold text-base lg:text-lg xl:text-2xl text-center font-mont text-custom-primaryColor leading-[29px]'>
                  {locker
                    ? 'Salex lock Token Locker'
                    : 'Salex lock Liquidity Locker'}
                </h1>
                <h1 className='font-medium pt-1 xl:pt-5 text-center text-[12px] xl:text-sm font-mont text-[#474646] leading-[17px] px-10 lg:px-40'>
                  Use the Salex lock Liquidity Locker to lock your LP tokens to
                  show your <br /> investors proof of locked liquidity!
                </h1>
                <div className='pt-8 w-full lg:w-[60%]'>
                  <div>
                    <h1
                      htmlFor='pair'
                      className='font-mont text-left font-medium text-[12px] lg:text-sm xl:text-base text-[#474646]'
                    >
                      Enter Nan Pair Address
                    </h1>
                    <input
                      id='pair'
                      type='text'
                      className='w-full block outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[46px] lg:h-[56px] xl:h-[64px] mt-2 rounded-[10px] text-[12px] xl:text-sm text-[#000000] font-medium'
                    />
                  </div>

                  <div className='bg-[#F1EAFF] mt-2 w-[fit-content] p-2 lg:p-2 rounded-[2px] lg:rounded-[10px]'>
                    <h1 className='font-semibold font-mont text-[8px] lg:text-[12px] text-custom-accentColor'>
                      Token Locker Fees 0.1 nan (Flat Rate)
                    </h1>
                  </div>

                  <div className='pt-9 lg:pt-6 flex flex-col gap-y-2 lg:gap-y-3'>
                    <h1 className='font-medium font-mont text-[12px] xl:text-sm text-[#000]'>
                      {locker
                        ? 'Token Info'
                        : 'This Liquidity Pool Contains the Following Tokens'}
                    </h1>
                    <h1 className='font-medium font-mont text-[12px] xl:text-sm text-[#606060]'>
                      <span className='text-custom-accentColor underline'>
                        Healthcare Heroes Project
                      </span>
                      &nbsp; &nbsp; {'-'} &nbsp; &nbsp;
                      <span className='font-normal text-[#606060] underline'>
                        0x83c0...822e
                      </span>
                    </h1>
                    <h1 className='font-medium font-mont text-[12px] xl:text-sm text-[#606060]'>
                      <span className='text-custom-accentColor underline'>
                        Wrapped Ether
                      </span>
                      &nbsp; &nbsp; {'-'} &nbsp; &nbsp;
                      <span className='font-normal text-[#606060] underline'>
                        0xC02a...6Cc2
                      </span>
                    </h1>
                    <h1 className='font-medium font-mont text-[12px] xl:text-sm text-[#606060]'>
                      <span className='text-custom-accentColor underline'>
                        LP Token Supply
                      </span>
                      &nbsp; &nbsp; {'-'} &nbsp; &nbsp;
                      <span className='font-normal text-[#606060] underline'>
                        334664.0106
                      </span>
                    </h1>
                  </div>

                  {/* inputs */}
                  <div>
                    <div className='pt-8'>
                      <h1 className='font-mont text-left font-medium text-[12px] lg:text-sm xl:text-base text-[#474646]'>
                        Amount to lock
                      </h1>
                      <div className='w-full bg-[#F6F7FC] h-[46px] lg:h-[56px] xl:h-[64px] mt-2 rounded-[10px] flex items-center justify-between overflow-hidden'>
                        <input
                          id='pair'
                          type='text'
                          className='outline-none w-full bg-[#F6F7FC] flex-1 px-5  placeholder-[#4A4A4A] h-full text-[12px] xl:text-sm text-[#000000] font-medium'
                        />
                        <h1 className='font-mont pr-4 font-bold text-[12px] xl:text-sm text-custom-primaryColor'>
                          Max
                        </h1>
                      </div>
                    </div>
                    <div className='pt-8'>
                      <div className='flex items-center justify-between'>
                        <h1 className='font-mont text-left font-medium text-[12px] lg:text-sm xl:text-base text-[#474646]'>
                          Liquidity Unlock time
                        </h1>
                        <h1 className='font-mont text-left font-medium text-[10px] lg:text-[12px] text-[#A9A9A9]'>
                          November 02, 2021
                        </h1>
                      </div>
                      <div className='w-full bg-[#F6F7FC] h-[46px] lg:h-[56px] xl:h-[64px] mt-2 rounded-[10px] flex items-center justify-between'>
                        <input
                          id='pair'
                          type='text'
                          className='outline-none w-full bg-[#F6F7FC] flex-1 px-5  placeholder-[#4A4A4A] rounded-tl-[10px] rounded-bl-[10px] h-full text-[12px] xl:text-sm text-[#000000] font-medium'
                        />
                        <div className='px-2 flex items-center'>
                          <Select
                            placeholder='Days'
                            defaultValue={selectedUnlockTime}
                            options={LIQUIDITY_UNLOCK_TIME}
                            onChange={setSelectedUnlockTime}
                            styles={selectedUnlockStyles}
                          />
                        </div>
                      </div>

                      {locker && (
                        <div className='pt-8'>
                          <h1 className='font-mont text-left font-medium text-[12px] lg:text-sm xl:text-base text-[#474646]'>
                            Select Vesting period
                          </h1>
                          <div className='mt-2 w-full'>
                            <Select
                              placeholder='No vesting, all tokens will be released at unlock time'
                              defaultValue={selectedVestingPeriod}
                              options={VESTING_PERIOD}
                              onChange={setSelectedVestingPeriod}
                              styles={vestingPeriodStyles}
                            />
                          </div>
                        </div>
                      )}

                      <div className='pt-12 flex flex-col gap-y-3'>
                        <div className='flex items-center justify-between'>
                          <h1 className='font-mont font-medium text-[12px] lg:text-sm xl:text-base text-[#000000]'>
                            Service fee:
                          </h1>
                          <h1 className='font-mont font-medium text-[12px] lg:text-sm xl:text-base text-custom-accentColor'>
                            0.00696SSN
                          </h1>
                        </div>
                        <div className='flex items-center justify-between'>
                          <h1 className='font-mont font-medium text-[12px] lg:text-sm xl:text-base text-[#000000]'>
                            Total Lp Tokens
                          </h1>
                          <h1 className='font-mont font-medium text-[12px] lg:text-sm xl:text-base text-[#474646]'>
                            0.4555322222
                          </h1>
                        </div>
                        <div className='flex items-center justify-between'>
                          <h1 className='font-mont font-medium text-[12px] lg:text-sm xl:text-base text-[#000000]'>
                            Your Lp Tokens to be Locked:
                          </h1>
                          <h1 className='font-mont font-medium text-[12px] lg:text-sm xl:text-base text-[#474646]'>
                            0.00000/0.00000
                          </h1>
                        </div>
                        <div className='flex items-center justify-between'>
                          <h1 className='font-mont font-medium text-[12px] lg:text-sm xl:text-base text-[#000000]'>
                            Unlock date:
                          </h1>
                          <h1 className='font-mont font-medium text-[12px] lg:text-sm xl:text-base text-[#474646]'>
                            25 November, 2025
                          </h1>
                        </div>
                      </div>

                      <div className='flex items-center gap-x-8 pt-6'>
                        <button
                          onClick={handleLockOptionsModal}
                          className='outline-none flex-1 h-[46px] lg:h-[56px] xl:h-[64px] py-3 px-3 bg-custom-accentColor rounded-[10px] flex justify-center items-center'
                        >
                          <h1 className='font-mont font-bold text-[12px] xl:text-sm text-white leading-6'>
                            Approve
                          </h1>
                        </button>
                        {!locker && (
                          <button
                            onClick={() => handleLocker()}
                            className='outline-none flex-1 h-[46px] lg:h-[56px] xl:h-[64px] py-3 px-3 border border-solid border-custom-accentColor rounded-[10px] flex justify-center items-center bg-white'
                          >
                            <h1 className='font-mont font-bold text-[12px] xl:text-sm text-custom-accentColor leading-6'>
                              Submit
                            </h1>
                          </button>
                        )}
                      </div>

                      {locker && (
                        <div className='pt-12'>
                          <h1 className='font-mont text-center font-medium text-[12px] text-[#E32E2E] leading-[18px]'>
                            For tokens with special transfers burns, tax or
                            other fees make sure the Salex lock address is
                            whitelisted(excludeFromFee) before you deposit or
                            you won't be able to withdraw!
                          </h1>

                          <h1 className='text-[#4A4A4A] text-center pt-8 font-mont font-medium text-[12px] xl:text-sm'>
                            SaleXLock Address: nan
                          </h1>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div title='Manage Locked Liquidity'>
              {firstView && (
                <div>
                  <div className='w-full xl:w-3/4 flex items-center gap-x-3 pt-8'>
                    <input
                      type='text'
                      placeholder='Search outline-none by token address  (Ex 0xfhfk34j4j321...)'
                      className='flex-1 h-[46px] lg:h-[58px] xl:h-[67px] px-3 lg:px-6 xl:pl-9 xl:pr-7 bg-custom-activeNavBgColor rounded-[73px] text-[12px] font-mont text-[#474646] lg:w-[75%] xl:w-[65%]'
                    />
                    <button className='outline-none rounded-[59px] bg-custom-accentColor w-[113px] lg:w-[284px] h-[46px] lg:h-[56px] xl:h-[64px] flex justify-center items-center'>
                      <h1 className='font-bold font-mont text-[12px] xl:text-sm text-white'>
                        Search
                      </h1>
                    </button>
                  </div>
                  <div className='pt-10 lg:pt-14 grid grid-col-1 lg:grid-cols-3 gap-7 lg:gap-5 xl:gap-10'>
                    {LOCKED_TOKENS.map((data, i) => (
                      <LockedTokenCard
                        {...data}
                        handleFirstView={handleFirstView}
                      />
                    ))}
                  </div>
                  {/* pagination */}
                  <div className='flex gap-x-8 items-center justify-center pt-12'>
                    {[...Array(4)].map((_, i) => (
                      <button
                        key={i}
                        className='outline-none font-semibold first:font-bold font-mont text-[12px] xl:text-sm text-[#A9A9A9] first:text-[#000]'
                      >
                        <h1 className=''>{i + 1}</h1>
                      </button>
                    ))}
                    <button className='outline-none'>
                      <h1 className='font-semibold font-mont text-[12px] xl:text-sm text-[#A9A9A9]'>
                        Next Page
                      </h1>
                    </button>
                  </div>
                </div>
              )}

              {!firstView && (
                <div className='py-8 lg:flex gap-x-6 w-full'>
                  <div className='w-full mb-6 lg:mb-0 lg:w-[40%] bg-white border-[0.5px] border-solid border-[#1A2B6B] rounded-[10px] py-5 px-4'>
                    <div className='w-full pb-3 border-b-[0.5px] border-solid border-[#A9A9A9]'>
                      <div className='hidden w-[fit-content] overflow-hidden p-1 bg-[#F6F7FC] rounded-[10px] lg:flex gap-x-1'>
                        <div className='border-r-[0.5px] p-[2px] xl:p-1 border-solid border-[#A9A9A9]'>
                          <h1 className='font-medium font-mont text-[8px] xl:text-[12px] text-[#474646]'>
                            Owner
                          </h1>
                        </div>
                        <h1 className='font-medium font-mont text-[8px] xl:text-[12px] text-custom-accentColor p-1'>
                          0x76e4CB2fcf7f931Fd750e93F443536Ee068d1cdE
                        </h1>
                      </div>
                      <div className='lg:pt-2 xl:pt-4 pb-1 flex justify-between items-center'>
                        <div className='flex items-center gap-x-3'>
                          <img
                            src='/assets/images/owner.svg'
                            alt=''
                            className='w-10 xl:w-auto'
                          />
                          <h1 className='font-semibold font-mont text-sm xl:text-2xl text-custom-primaryColor leading-[29px] uppercase'>
                            ZBT/WBNB
                          </h1>
                        </div>
                        <h1 className='font-mont font-semibold text-[10px] xl:text-sm text-custom-accentColor underline'>
                          ZBT Address
                        </h1>
                      </div>
                    </div>
                    <div className='pt-6 pb-4 flex flex-col gap-y-3'>
                      {OWNER_LOCKED_TOKEN.map((data, i) => (
                        <div
                          key={i}
                          className='flex justify-between items-center'
                        >
                          <h1 className='font-medium font-mont text-[10px] xl:text-sm text-[#474646]'>
                            {data.label}{' '}
                          </h1>
                          <h1 className='font-semibold font-mont text-[10px] xl:text-sm text-[#000000]'>
                            {data.value}
                          </h1>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='flex-1'>
                    <div
                      onClick={handleDisclaimer}
                      className='border-[0.5px] border-solid border-[#A9A9A9] bg-[#F6F7FC] rounded-[10px] py-5 lg:py-3 xl:py-4 px-3 xl:px-5 w-full flex flex-col-reverse lg:flex-row items-center'
                    >
                      <div className='pt-6 lg:pt-0 flex items-center justify-between gap-x-5 xl:gap-x-10 pl-4 pr-4'>
                        <h1 className=' font-mont font-semibold text-[12px] lg:text-[10px] xl:text-sm text-custom-accentColor underline'>
                          LP TOKEN Address
                        </h1>
                        <h1 className='font-mont font-semibold text-[12px] lg:text-[10px] xl:text-sm text-custom-accentColor underline'>
                          WBNB Address
                        </h1>
                      </div>
                      <div className='w-full flex lg:block flex-col justify-center items-center border-none lg:border-l-[0.5px] lg:border-solid border-[#A9A9A9] pl-4'>
                        <h1 className='font-mont text-sm lg:text-[12px] xl:text-lg font-medium text-[#474646]'>
                          Timeline to next unlock
                        </h1>
                        <h1 className='pt-1 xl:pt-2 pb-1'>
                          <span className='font-mont text-3xl lg:text-2xl xl:text-5xl font-bold text-custom-accentColor'>
                            64
                          </span>
                          <span className='pl-1 lg:pl-4 font-mont text-sm lg:text-[12px] xl:text-lg font-semibold uppercase text-[#474646]'>
                            DAYS
                          </span>
                        </h1>
                        <h1 className='font-medium text-sm lg:text-[10px] xl:text-sm text-[#2C2C2C]'>
                          5h:33m:22s
                        </h1>
                      </div>
                    </div>
                    <div className='mt-6 border-[0.5px] border-solid border-[#A9A9A9] bg-[#F6F7FC] rounded-[10px] py-5 px-7 w-full'>
                      {disclaimer && (
                        <div>
                          <h1 className='font-mont font-semibold text-sm xl:text-lg text-[#474646]'>
                            Disclaimer
                          </h1>
                          <p className='font-mont text-[10px] xl:text-sm text-[#E21010] leading-5 pt-2 xl:pt-3'>
                            Please be aware that only the LP Tokens are locked
                            in the contract. Circulating tokens are not locked
                            here and any unlocked circulating tokens can be sold
                            at any time to withdraw the underlying liquidity!
                            Please always do strong research before investing in
                            any products.
                          </p>
                        </div>
                      )}

                      {!disclaimer && <div>Vesting Table</div>}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </SaleLockTab>
        </div>
      </div>

      {lockOptionsModal && (
        <LockOptionsModal
          handleToggle={handleLockOptionsModal}
          activeLockOption={activeLockOption}
          handleLockOptions={handleLockOptions}
        />
      )}
    </Fragment>
  );
};

export default index;

const selectedUnlockStyles = {
  indicatorSeparator: styles => ({
    ...styles,
    border: 'none',
    display: 'none',
  }),
  input: styles => ({
    ...styles,
    fontSize: '14px',
    fontWeight: 500,
    fontFamily: 'Montserrat',
    color: primaryColor,
    '@media only screen and (max-width: 1024px)': {
      ...styles['@media only screen and (max-width: 1024px)'],
      fontSize: 12,
      color: '#000',
    },
  }),
  placeholder: styles => ({
    ...styles,
    fontSize: '16px',
    color: '#393939',
    padding: 0,
    '@media only screen and (max-width: 1024px)': {
      ...styles['@media only screen and (max-width: 1024px)'],
      fontSize: 12,
      color: '#000',
    },
  }),
  control: (styles, state) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
    lineHeight: 1.25,
    backgroundColor: 'white',
    border: 'none',
    height: 52,
    borderRadius: 10,
    width: 139,
    '@media only screen and (max-width: 1024px)': {
      ...styles['@media only screen and (max-width: 1024px)'],
      height: 38,
      borderRadius: 5,
      padding: 0,
      width: 81,
    },
  }),
};

const vestingPeriodStyles = {
  indicatorSeparator: styles => ({
    ...styles,
    border: 'none',
    display: 'none',
  }),
  input: styles => ({
    ...styles,
    fontSize: '14px',
    fontWeight: 500,
    fontFamily: 'Montserrat',
    color: primaryColor,
    '@media only screen and (max-width: 1024px)': {
      ...styles['@media only screen and (max-width: 1024px)'],
      fontSize: 10,
      color: '#000',
    },
  }),
  placeholder: styles => ({
    ...styles,
    fontSize: '14px',
    color: '#393939',
    padding: 0,
    '@media only screen and (max-width: 1024px)': {
      ...styles['@media only screen and (max-width: 1024px)'],
      fontSize: 10,
      color: '#000',
    },
  }),
  control: (styles, state) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
    lineHeight: 1.25,
    backgroundColor: 'white',
    border: 'none',
    height: 64,
    borderRadius: 10,
    width: '100%',
    border: '0.5px solid #000248',
    '@media only screen and (max-width: 1024px)': {
      ...styles['@media only screen and (max-width: 1024px)'],
      height: 46,
      borderRadius: 5,
      padding: 0,
    },
  }),
};

const LIQUIDITY_UNLOCK_TIME = [
  { label: 'All Listings', value: 'All Listings' },
  {
    label: 'Admiral Container Lines',
    value: 'ADMU',
  },
  { label: 'Alianca', value: 'ANRM' },
  {
    label: 'American President Lines (APL)',
    value: 'APLU',
  },
  { label: 'Arkas', value: 'ARKU' },
];

const VESTING_PERIOD = [
  { label: '2 vesting period', value: '2 vesting period' },
  {
    label: '3 vesting period',
    value: '3 vesting period',
  },
  {
    label: '4 vesting period',
    value: '4 vesting period',
  },
];
