import React, { useState, Fragment, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

// custom
import classes from '../styles/home.module.scss';
import SelectDropdown from '../components/SelectDropdown/SelectDropdown';
import { LaunchPadHeader } from '../components/Launchpad/LaunchPad';

// utils
import { DIDO_DATA, LISTING_OPTIONS } from '../Utils/data';

const index = () => {
  const router = useRouter();
  return (
    <Fragment>
      <div className='py-7'>
        <LaunchPadHeader route='/id' />

        <section>
          <div className='pt-10 flex flex-col lg:flex-row lg:items-center justify-between gap-x-8'>
            <div className='w-full lg:w-3/5'>
              <h1 className='font-semibold text-center lg:text-left pb-2 lg:pb-0 font-mont text-base lg:text-sm xl:text-base text-[#282828] leading-[24px] lg:leading-[20px]'>
                DeFi Launchpad With Instant Listing And Liquidity Locking
              </h1>
              <div className='w-full flex items-center gap-x-3 py-3 lg:py-5'>
                <input
                  type='text'
                  placeholder='Search outline-none by token address  (Ex 0xfhfk34j4j321...)'
                  className='h-[46px] lg:h-[56px] xl:h-[67px] px-5 xl:pl-9 xl:pr-7 bg-custom-activeNavBgColor rounded-[73px] text-[12px] font-mont text-[#474646] w-3/5'
                />
                <button className='outline-none rounded-[59px] bg-custom-accentColor flex-1 h-[46px] lg:h-[56px] xl:h-[64px] flex justify-center items-center'>
                  <h1 className='font-bold font-mont text-[12px] xl:text-sm text-white'>
                    Search
                  </h1>
                </button>
              </div>
            </div>
            <div className='flex-1 flex py-2 lg:py-0 lg:justify-end'>
              <div className='flex items-center gap-x-5'>
                <h1 className='hidden lg:block font-mont font-medium text-base text-[#A9A9A9]'>
                  Showing
                </h1>
                <div className='w-[200px]'>
                  <SelectDropdown
                    placeholder='All Listings'
                    options={LISTING_OPTIONS}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* cards */}
          <div className='pt-3  flex items-center flex-wrap xl:flex-nowrap justify-center gap-6'>
            {[...Array(4)].map((_, i) => (
              <div className='w-full lg:w-[45%] xl:w-[24.5%] bg-[#FAFBFD] lg:bg-[#F6F7FC82] border-[0.1px] border-solid border-[#FAFBFD] lg:border-none rounded-[20px] py-5 px-5'>
                <div className='flex items-center gap-x-3 border-b-[0.5px] border-solid border-custom-primaryColor pb-6'>
                  <img src='/assets/images/dido-img.svg' alt='' />
                  <div>
                    <h1 className='font-mont font-semibold text-sm lg:text-[13px] leading-4 text-custom-primaryColor uppercase'>
                      Dido
                    </h1>
                    <h1 className='font-mont text-[12px] lg:text-[11px] leading-3 pt-1 text-custom-primaryColor'>
                      Diamond Doge
                    </h1>
                  </div>
                </div>

                {/* table list */}
                <div className='py-4 flex flex-col gap-y-3 lg:gap-y-5'>
                  {DIDO_DATA.map((data, i) => (
                    <div key={i} className='flex justify-between items-center'>
                      <h1 className='font-mont font-medium text-[12px] text-[#474646]'>
                        {data.label}
                      </h1>
                      <h1 className='font-mont font-medium text-[12px] text-[#000000]'>
                        {data.value}
                      </h1>
                    </div>
                  ))}
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-1'>
                      <img src='/assets/icons/verified-icon.svg' alt='' />
                      <h1 className='font-mont text-[12px] font-semibold text-[#000000]'>
                        SaleX Mint Verified
                      </h1>
                    </div>
                    <h1 className='lg:hidden font-bold font-mont text-[12px] text-[#4CAF50]'>
                      Sale Success
                    </h1>
                  </div>
                </div>

                <button className='bg-custom-accentColor min-h-[46px] lg:bg-[#FFEDB3] rounded-[10px] w-full justify-center items-center px-3 py-3'>
                  <h1 className='font-mont text-[12px] font-semibold text-[#000000]'>
                    <span className='hidden lg:inline'>Pending Start</span>
                    <span className=' text-white lg:hidden'>View Details</span>
                  </h1>
                </button>
                <div className='bg-[#E4E4E4] rounded-[26px] h-1 w-full mt-3 lg:mt-2'></div>

                <div className='flex items-center justify-center w-full pt-4 pb-1'>
                  <h1 className='font-mont font-medium text-[12px] text-[#474646]'>
                    Sale Starts in:{' '}
                    <span className='text-custom-accentColor'>04:06:02:21</span>
                  </h1>
                </div>
              </div>
            ))}
          </div>

          {/* pagination */}
          <div className='flex gap-x-8 pr-12 pb-6 lg:pb-0 lg:pr-0 items-center justify-end lg:justify-center pt-8'>
            {[...Array(4)].map((_, i) => (
              <button
                key={i}
                className='outline-none font-semibold first:font-bold font-mont text-sm text-[#A9A9A9] first:text-[#000]'
              >
                <h1 className=''>{i + 1}</h1>
              </button>
            ))}
            <button className='outline-none hidden lg:block'>
              <h1 className='font-semibold font-mont text-sm text-[#A9A9A9]'>
                Next Page
              </h1>
            </button>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default index;
