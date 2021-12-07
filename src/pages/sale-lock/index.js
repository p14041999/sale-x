import React, { useState, Fragment, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Select from 'react-select';

// custom
import { primaryColor } from '../../styles/variables.module.scss';
import { LaunchPadHeader } from '../../components/Launchpad/LaunchPad';
import {
  LockedTokenCard,
  LockOptionsModal,
  ManageLockedTabContent,
  SaleLockTab,
} from '../../components/SaleLock/SaleLock';
import { LOCKED_TOKENS, OWNER_LOCKED_TOKEN } from '../../Utils/data';

const index = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Lock Liquidity');
  const [selectedUnlockTime, setSelectedUnlockTime] = useState(null);
  const [selectedVestingPeriod, setSelectedVestingPeriod] = useState(null);
  const [lockOptionsModal, setLockOptionsModal] = useState(false);
  const [activeLockOption, setActiveLockOption] = useState('self');
  const [proceed, setProceed] = useState(true);

  const handleProceed = () => setProceed(false);
  const handleLockOptions = value => setActiveLockOption(value);
  const handleActiveTab = value => setActiveTab(value);
  const handleLockOptionsModal = () => setLockOptionsModal(!lockOptionsModal);

  return (
    <Fragment>
      <div className='py-7'>
        <button
          onClick={() => router.back()}
          className='outline-none hidden lg:flex items-center gap-x-2'
        >
          <img src='/assets/icons/arrow-left.svg' alt='' />
          <h1 className='font-mont font-semibold text-[#2C2C2C] text-sm'>
            Back
          </h1>
        </button>
        {/* tabs and tab contents */}
        <div className='pt-8'>
          {/* tab */}
          <SaleLockTab activeTab={activeTab} handleActiveTab={handleActiveTab}>
            <div title='Lock Liquidity'>
              <div className='py-8 lg:py-16 flex flex-col items-center'>
                <h1 className='font-semibold text-base lg:text-lg xl:text-2xl text-center font-mont text-custom-primaryColor leading-[29px]'>
                  Salex lock Liquidity Locker
                </h1>
                <h1 className='font-medium pt-1 xl:pt-3 text-center text-[12px] xl:text-sm font-mont text-[#474646] leading-[17px] px-5 lg:px-40'>
                  Use the Salex lock Liquidity Locker to lock your LP tokens to
                  show your <br className='hidden lg:block' /> investors proof
                  of locked liquidity!
                </h1>
                <div className='pt-8 w-full lg:w-1/2'>
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
                      className='w-full block outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[46px] mt-2 rounded-[10px] text-[12px] xl:text-sm text-[#000000] font-medium'
                    />
                  </div>
                  <div className='bg-[#F1EAFF] mt-2 w-[fit-content] p-2 lg:p-2 rounded-[2px] lg:rounded-[10px]'>
                    <h1 className='font-semibold font-mont text-[8px] lg:text-[12px] text-custom-accentColor'>
                      Token Locker Fees 0.1 nan (Flat Rate)
                    </h1>
                  </div>

                  {proceed && (
                    <div className='flex justify-center py-10'>
                      <button
                        onClick={handleProceed}
                        className='outline-none w-[168px] h-[46px] py-3 px-3 bg-custom-accentColor rounded-[10px] flex justify-center items-center'
                      >
                        <h1 className='font-mont font-bold text-[12px] xl:text-sm text-white leading-6'>
                          Proceed
                        </h1>
                      </button>
                    </div>
                  )}

                  {!proceed && (
                    <Fragment>
                      <div className='pt-9 lg:pt-10 flex flex-col gap-y-2 lg:gap-y-3'>
                        <h1 className='font-medium font-mont text-[12px] xl:text-sm text-[#000]'>
                          This Liquidity Pool Contains the Following Tokens
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
                          <div className='flex items-center justify-between'>
                            <h1 className='font-mont text-left font-medium text-[12px] lg:text-sm xl:text-base text-[#474646]'>
                              Amount to lock
                            </h1>
                            <h1 className='font-mont text-left font-medium text-[10px] lg:text-[12px] text-[#A9A9A9]'>
                              9,000,000 SAFEMOON
                            </h1>
                          </div>
                          <div className='w-full bg-[#F6F7FC] h-[46px]  mt-2 rounded-[10px] flex items-center justify-between overflow-hidden'>
                            <input
                              id='pair'
                              type='text'
                              className='outline-none w-full bg-[#F6F7FC] flex-1 px-5  placeholder-[#4A4A4A] h-full text-[12px] xl:text-sm text-[#000000] font-medium'
                            />
                            <h1 className='font-mont pr-4 font-bold text-[12px] xl:text-sm text-custom-accentColor'>
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
                          <div className='w-full bg-[#F6F7FC] h-[46px] mt-2 rounded-[10px] flex items-center justify-between pr-4'>
                            <input
                              id='pair'
                              type='text'
                              className='outline-none w-full bg-[#F6F7FC] flex-1 px-5  placeholder-[#4A4A4A] rounded-tl-[10px] rounded-bl-[10px] h-full text-[12px] xl:text-sm text-[#000000] font-medium'
                            />

                            <img src='/assets/icons/calendar.svg' alt='' />
                            {/* <div className='px-2 flex items-center'>
                              <Select
                                placeholder='Days'
                                defaultValue={selectedUnlockTime}
                                options={LIQUIDITY_UNLOCK_TIME}
                                onChange={setSelectedUnlockTime}
                                styles={selectedUnlockStyles}
                              />
                            </div> */}
                          </div>

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
                              className='outline-none flex-1 h-[46px] py-3 px-3 bg-custom-accentColor rounded-[10px] flex justify-center items-center'
                            >
                              <h1 className='font-mont font-bold text-[12px] xl:text-sm text-white leading-6'>
                                Approve
                              </h1>
                            </button>
                            <button
                              onClick={() =>
                                router.push('/sale-lock/token_locker')
                              }
                              className='outline-none flex-1 h-[46px] py-3 px-3 border border-solid border-custom-accentColor rounded-[10px] flex justify-center items-center bg-white'
                            >
                              <h1 className='font-mont font-bold text-[12px] xl:text-sm text-custom-accentColor leading-6'>
                                Submit
                              </h1>
                            </button>
                          </div>
                        </div>
                      </div>
                    </Fragment>
                  )}
                </div>
              </div>
            </div>
            <ManageLockedTabContent title='Manage Locked Liquidity' />
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
    height: 36,
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
