import React, { useState, Fragment, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
// import "sweetalert2/dist"

// custom
import classes from '../styles/home.module.scss';
import SelectDropdown from '../components/SelectDropdown/SelectDropdown';
import { LaunchPadHeader } from '../components/Launchpad/LaunchPad';

// utils
import { DIDO_DATA, LAUNCH_PAD_CARD, LISTING_OPTIONS } from '../Utils/data';

import {LAUNCH_ABI} from '../abis/launch-abi.json';
import {TOKEN_ABI} from '../abis/token-abi.json'
import {RINKEBY} from '../constants/constant.json';
import { useAppContext } from '../contexts/AppContext';

const index = () => {
  const router = useRouter();
  const app = useAppContext();
  const [dataFeed,setDataFeed] = useState(null);
  const [tokenData,setTokenData] = useState(null);

  useEffect(async ()=>{
    if(app.chainID == 4 && app.accountAddress != '0x0' && app.web3){
      let id = router.query.id;
      let launchContract = new app.web3.eth.Contract(LAUNCH_ABI,RINKEBY.LAUNCH);
      let data = await launchContract.methods.getAllOngoingICOs().call();
      // console.log(data);
      setDataFeed(data)
    //   let tokenContract = new app.web3.eth.Contract(TOKEN_ABI,data.ico.data.tokenAddress);
    //   let name_ = await tokenContract.methods.name().call();
    //   let symbol_ = await tokenContract.methods.symbol().call();
    //   let totalSupply_ = await tokenContract.methods.totalSupply().call();
    //   let decimals = await tokenContract.methods.decimals().call();
    //   let totalSupply = Number.parseInt(totalSupply_) / (10**Number(decimals));
    //   setTokenData({name:name_,symbol:symbol_,totalSupply,decimals});
    }
  },[app])
  return (
    <Fragment>
      <div className='py-7'>
        <LaunchPadHeader route='/id' />

        <section>
          <div className='pt-6 flex flex-col lg:flex-row lg:items-center justify-between gap-x-8'>
            <div className='w-full lg:w-3/5'>
              <h1 className='hidden lg:block font-bold text-left pb-2 lg:pb-0 font-mont text-base lg:text-sm xl:text-xl text-custom-primaryColor leading-[24px] lg:leading-[20px]'>
                SaleX Launchpad
              </h1>
              <h1 className='font-semibold text-center lg:text-left lg:font-medium pt-[2px] lg:pb-0 font-mont text-sm text-custom-primaryColor lg:text-[#474646]'>
                DeFi Launchpad With Instant Listing And Liquidity Locking
              </h1>
            </div>
          </div>
          <div className='py-5 flex flex-col-reverse lg:flex-row justify-between lg:items-center'>
            <div className='w-[168px] pt-5 lg:pt-0'>
              <SelectDropdown
                placeholder='All Listings'
                options={LISTING_OPTIONS}
              />
            </div>
            <div className='w-full h-[46px] pl-5 rounded-[73px] xl:w-[42%] flex items-center gap-x-3 bg-[#F6F7FC]'>
              <img src='/assets/icons/search.svg' alt='' />
              <input
                type='text'
                placeholder='Search by token address (Ex 0xfhfk34j4j321...)'
                className='flex-1 outline-none bg-[#F6F7FC] h-full text-[12px] font-mont text-[#000] placeholder-[#474646] '
              />
              <button className='outline-none rounded-[59px] bg-custom-accentColor w-[113px] lg:w-[126px] h-[42px] flex justify-center items-center'>
                <h1 className='font-bold font-mont text-[12px] text-white'>
                  Search
                </h1>
              </button>
            </div>
          </div>

          {/* cards */}
          <div className='pt-3  flex items-center flex-wrap xl:flex-nowrap justify-center gap-6'>
            {dataFeed?.map((dataIO, i) => (
              <div className='drop-shadow w-full lg:w-[45%] xl:w-[24.5%] bg-[#FFFFFF] border-[0.1px] border-solid border-[#FAFBFD] lg:border-none rounded-[20px] py-5 px-5'>
                <div className='flex items-center gap-x-3 border-b-[0.5px] border-solid border-custom-primaryColor pb-4'>
                  <img src={dataIO.ico.data.logoLink} alt='' />
                  <div>
                    <h1 className='font-mont font-semibold text-sm lg:text-[13px] leading-4 text-custom-primaryColor uppercase'>
                      {dataIO.ico.data.icoName}
                    </h1>
                    <h1 className='font-mont text-[12px] lg:text-[11px] leading-3 pt-1 text-custom-primaryColor'>
                      Ends on {new Date(Number(dataIO.ico.data.presaleEndTime)*1000).toLocaleString()}
                    </h1>
                  </div>
                  <div
                    className='lg:hidden rounded-md py-2 px-3 ml-auto self-start'
                    // style={{
                    //   background: data.start
                    //     ? '#FFEDB3'
                    //     : data.success
                    //     ? '#5BD99B'
                    //     : data.failed
                    //     ? '#FFBCBC'
                    //     : data.live
                    //     ? '#DEE6FF'
                    //     : '#FFEDB3',
                    // }}
                  >
                    <h1
                      className='font-mont text-[10px] font-bold'
                      // style={{
                      //   color: data.start
                      //     ? '#FFA800'
                      //     : data.success
                      //     ? '#1A7E1E'
                      //     : data.failed
                      //     ? '#FF5656'
                      //     : data.live
                      //     ? '#375BD2'
                      //     : '#FFA800',
                      // }}
                    >
                      {/* {data.btnText} */}
                    </h1>
                  </div>
                </div>

                {/* table list */}
                <div className='py-4 flex flex-col gap-y-3'>
                  <div key={i} className='flex justify-between items-center'>
                    <h1 className='font-mont font-medium text-[12px] text-[#474646]'>
                      {/* {dataIO.label} */}
                      Soft Cap
                    </h1>
                    <h1 className='font-mont font-medium text-[12px] text-[#000000]'>
                      {Number(dataIO.ico.data.softCap)/10**18}
                    </h1>
                  </div>
                  <div key={i} className='flex justify-between items-center'>
                    <h1 className='font-mont font-medium text-[12px] text-[#474646]'>
                      {/* {dataIO.label} */}
                      Hard Cap
                    </h1>
                    <h1 className='font-mont font-medium text-[12px] text-[#000000]'>
                      {Number(dataIO.ico.data.hardCap)/10**18}
                    </h1>
                  </div>
                  <div key={i} className='flex justify-between items-center'>
                    <h1 className='font-mont font-medium text-[12px] text-[#474646]'>
                      {/* {dataIO.label} */}
                      Presale Supply
                    </h1>
                    <h1 className='font-mont font-medium text-[12px] text-[#000000]'>
                      {Number(dataIO.ico.data.presaleSupply)/10**18}
                    </h1>
                  </div>
                  <div key={i} className='flex justify-between items-center'>
                    <h1 className='font-mont font-medium text-[12px] text-[#474646]'>
                      {/* {dataIO.label} */}
                      Liquidity %
                    </h1>
                    <h1 className='font-mont font-medium text-[12px] text-[#000000]'>
                      {Number(dataIO.ico.data.liquiditySupply)/100}
                    </h1>
                  </div>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-1'>
                      <img src='/assets/icons/verified-icon.svg' alt='' />
                      <h1 className='font-mont text-[12px] font-semibold text-[#000000]'>
                        SaleX Mint Verified
                      </h1>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => router.push('/'+dataIO.ico.id)}
                  className={`bg-custom-accentColor min-h-[46px] rounded-[10px] w-full justify-center items-center px-3 py-3 
                  `}
                  
                  // data.start
                  //   ? 'lg:bg-[#FFEDB3]'
                  //   : data.success
                  //   ? 'lg:bg-[#5BD99B]'
                  //   : data.failed
                  //   ? 'lg:bg-[#FFBCBC]'
                  //   : data.live
                  //   ? 'lg:bg-[#DEE6FF]'
                  //   : 'lg:bg-[#FFEDB3]'
                >
                  <h1 className='font-mont text-[12px] font-semibold text-[#000000]'>
                    <span className='hidden lg:inline'>View Details</span>
                    <span className=' text-white lg:hidden'>View Details</span>
                  </h1>
                </button>
                <div className='bg-[#E4E4E4] rounded-[26px] h-1 w-full mt-3 lg:mt-2'></div>

                <div className='flex items-center justify-center w-full pt-4 pb-1'>
                  <h1 className='font-mont font-medium text-[12px] text-[#474646]'>
                    {/* {data.status} */}
                    {/* {data.date && ( */}
                      <span className='text-custom-accentColor'>
                        {/* {data.date} */}
                      </span>
                    {/* )} */}
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
