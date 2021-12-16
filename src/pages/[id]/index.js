import React, { useState, Fragment, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

//custom
import { primaryColor } from '../../styles/variables.module.scss';
import {
  LaunchPadHeader,
  ToggleSwitch,
} from '../../components/Launchpad/LaunchPad';

// utils
import { CONTRACT_INFO, REACTIONS } from '../../Utils/data';
import { useAppContext } from '../../contexts/AppContext';

import {LAUNCH_ABI} from '../../abis/launch-abi.json';
import {TOKEN_ABI} from '../../abis/token-abi.json'
import {RINKEBY} from '../../constants/constant.json';

const index = () => {
  const router = useRouter();
  const [dataFeed,setDataFeed] = useState(null);
  const [tokenData,setTokenData] = useState(null);
  const [reaction, setReaction] = useState('');
  const [activeTab, setActiveTab] = useState('comments');
  const [whitelistEnabled, setWhitelistEnabled] = useState(false);
  const app = useAppContext();
  const handleWhitelist = event => {
    setWhitelistEnabled(event.target.checked);
  };

  useEffect(async ()=>{
    if(app.chainID == 4 && app.accountAddress != '0x0' && app.web3){
      let id = router.query.id;
      let launchContract = new app.web3.eth.Contract(LAUNCH_ABI,RINKEBY.LAUNCH);
      let data = await launchContract.methods.getAICO(id).call();
      console.log(data);
      setDataFeed(data)
      let tokenContract = new app.web3.eth.Contract(TOKEN_ABI,data.ico.data.tokenAddress);
      let name_ = await tokenContract.methods.name().call();
      let symbol_ = await tokenContract.methods.symbol().call();
      let totalSupply_ = await tokenContract.methods.totalSupply().call();
      let decimals = await tokenContract.methods.decimals().call();
      let totalSupply = Number.parseInt(totalSupply_) / (10**Number(decimals));
      setTokenData({name:name_,symbol:symbol_,totalSupply,decimals});
      // setTokenData({name:name_,symbol:symbol_});
    }
  },[app])
  // backend logic simulation
  const [pokemon, setPokemon] = useState('first');

  return (
    <Fragment>
      <div className='py-7'>
        <LaunchPadHeader route='/id/start-sale' />

        <h1 className='font-semibold text-xl font-mont text-custom-primaryColor pt-8'>
          Presale Details
        </h1>

        <div className='lg:hidden flex justify-between items-center h-[46px] border-[0.5px] border-solid border-[#000] rounded-[10px] px-4 mt-4'>
          <h1 className='font-mont font-semibold text-[#000] text-[12px]'>
            SaleX Warning System
          </h1>
          <img
            src='/assets/icons/dropdown-arrow.svg'
            alt=''
            className='transform -rotate-90'
          />
        </div>

        {/* section */}
        <div className='w-full lg:flex items-stretch justify-between gap-x-5 pt-5 lg:pt-4'>
          <div className='drop-shadow w-full lg:w-[53%] bg-[#FFFFFF] rounded-[20px] lg:rounded-[10px] p-6 lg:px-4 lg:py-6'>
            <div className='lg:flex justify-between items-center'>
              <div className='flex gap-x-4 lg:gap-x-2 xl:gap-x-4 items-center'>
                <img
                  src={dataFeed?.ico.data.logoLink}
                  alt=''
                  className='w-11'
                />
                <div>
                  <h1 className='font-semibold font-mont text-sm lg:text-[12px] xl:text-base text-custom-primaryColor leading-[22px]'>
                    {tokenData?.symbol}
                  </h1>
                  <h1 className='font-normal font-mont text-[12px] lg:text-[12px] text-custom-primaryColor'>
                    {tokenData?.name}
                  </h1>
                </div>
              </div>
              <div className='hidden lg:block'>
                <Socials data={dataFeed} />
              </div>
            </div>

            <p className='font-mont-font-normal text-[12px] lg:text-[10px] xl:text-[12px] text-[#474646] leading-6 pt-5 '>
              {dataFeed?.ico.data.longDescription}
            </p>

            <div className='pt-5 lg:hidden'>
              <Socials  data={dataFeed} />
            </div>
          </div>

          <div className='lg:hidden'>
            <PresaleInfo  token={dataFeed?.ico.data.tokenAddress}/>
          </div>
          <Sale
            pokemon={pokemon}
            setPokemon={setPokemon}
            whitelistEnabled={whitelistEnabled}
            handleWhitelist={handleWhitelist}
          />
          <div className='pt-7 lg:hidden'>
            <UsefulLinks />
          </div>
        </div>

        {/*  */}
        <div className='lg:flex gap-x-5 lg:pt-8'>
          <div className='w-full lg:w-[53%]'>
            <div className='flex flex-col justify-center items-center text-center'>
              <div className='hidden lg:block'>
                <PresaleInfo  token={dataFeed?.ico.data.tokenAddress} />
              </div>

              {/*  */}
              <div className='w-full mt-7 border-[0.5px] border-solid border-[#1A2B6B] rounded-[10px] py-3 px-4 lg:p-0'>
                <div className='border-b-[0.5px] border-solid border-[#D7D7D7] flex justify-center items-center text-center py-2 px-3'>
                  <h1 className='font-mont font-semibold text-[12px] xl:text-sm text-custom-primaryColor'>
                    Contract Info
                  </h1>
                </div>

                <div className='lg:px-7 py-6 flex flex-col gap-y-4'>
                    <div className='flex justify-between items-center'>
                      <h1 className='font-mont font-medium text-[12px] text-custom-primaryColor'>
                        Sale ID
                      </h1>
                      <h1 className='font-mont font-normal text-[12px] text-[#606060]'>
                        {dataFeed?.ico.id}
                      </h1>
                    </div>
                    <div className='flex justify-between items-center'>
                      <h1 className='font-mont font-medium text-[12px] text-custom-primaryColor'>
                        Total Supply
                      </h1>
                      <h1 className='font-mont font-normal text-[12px] text-[#606060]'>
                        {tokenData?.totalSupply} {tokenData?.symbol}
                      </h1>
                    </div>
                    <div className='flex justify-between items-center'>
                      <h1 className='font-mont font-medium text-[12px] text-custom-primaryColor'>
                        Presale Supply
                      </h1>
                      <h1 className='font-mont font-normal text-[12px] text-[#606060]'>
                        {Number(dataFeed?.ico.data.presaleSupply)/(10**Number(tokenData?.decimals))} {tokenData?.symbol}
                      </h1>
                    </div>
                    <div className='flex justify-between items-center'>
                      <h1 className='font-mont font-medium text-[12px] text-custom-primaryColor'>
                        Liquidity Supply
                      </h1>
                      <h1 className='font-mont font-normal text-[12px] text-[#606060]'>
                      {Number(dataFeed?.ico.data.presaleSupply) * Number(dataFeed?.ico.data.liquiditySupply) / (10000*10**Number(tokenData?.decimals))} {tokenData?.symbol}
                      </h1>
                    </div>
                    <div className='flex justify-between items-center'>
                      <h1 className='font-mont font-medium text-[12px] text-custom-primaryColor'>
                        Soft Cap
                      </h1>
                      <h1 className='font-mont font-normal text-[12px] text-[#606060]'>
                        {Number(dataFeed?.ico.data.softCap)/10**18} BNB
                      </h1>
                    </div>
                    <div className='flex justify-between items-center'>
                      <h1 className='font-mont font-medium text-[12px] text-custom-primaryColor'>
                        Hard Cap
                      </h1>
                      <h1 className='font-mont font-normal text-[12px] text-[#606060]'>
                        {Number(dataFeed?.ico.data.hardCap)/10**18} BNB
                      </h1>
                    </div>
                    <div className='flex justify-between items-center'>
                      <h1 className='font-mont font-medium text-[12px] text-custom-primaryColor'>
                        Presale Rate
                      </h1>
                      <h1 className='font-mont font-normal text-[12px] text-[#606060]'>
                        {dataFeed?.ico.data.ratePerBNB} {tokenData?.symbol} per BNB
                      </h1>
                    </div>
                    <div className='flex justify-between items-center'>
                      <h1 className='font-mont font-medium text-[12px] text-custom-primaryColor'>
                        Minimum Contribution
                      </h1>
                      <h1 className='font-mont font-normal text-[12px] text-[#606060]'>
                        {Number(dataFeed?.ico.data.minAmount)/10**18} BNB
                      </h1>
                    </div>
                    <div className='flex justify-between items-center'>
                      <h1 className='font-mont font-medium text-[12px] text-custom-primaryColor'>
                        Maximum Contribution
                      </h1>
                      <h1 className='font-mont font-normal text-[12px] text-[#606060]'>
                        {Number(dataFeed?.ico.data.maxAmount)/10**18} BNB
                      </h1>
                    </div>
                    <div className='flex justify-between items-center'>
                      <h1 className='font-mont font-medium text-[12px] text-custom-primaryColor'>
                        Presale Start Time
                      </h1>
                      <h1 className='font-mont font-normal text-[12px] text-[#606060]'>
                        {(new Date(Number(dataFeed?.ico.data.presaleStartTime)*1000)).toLocaleString()}
                      </h1>
                    </div>
                    <div className='flex justify-between items-center'>
                      <h1 className='font-mont font-medium text-[12px] text-custom-primaryColor'>
                        Presale End Time
                      </h1>
                      <h1 className='font-mont font-normal text-[12px] text-[#606060]'>
                        {(new Date(Number(dataFeed?.ico.data.presaleEndTime)*1000)).toLocaleString()}
                      </h1>
                    </div>
                    <div className='flex justify-between items-center'>
                      <h1 className='font-mont font-medium text-[12px] text-custom-primaryColor'>
                        PancakeSwap Listing Rate
                      </h1>
                      <h1 className='font-mont font-normal text-[12px] text-[#606060]'>
                        {dataFeed?.ico.data.exchangeListingRateBNB}  {tokenData?.symbol} per BNB
                      </h1>
                    </div>
                    {/* <div className='flex justify-between items-center'>
                      <h1 className='font-mont font-medium text-[12px] text-custom-primaryColor'>
                        PancakeSwap Liquidity %	
                      </h1>
                      <h1 className='font-mont font-normal text-[12px] text-[#606060]'>
                        {tokenData?.totalSupply}
                      </h1>
                    </div> */}
                    {/* <div className='flex justify-between items-center'>
                      <h1 className='font-mont font-medium text-[12px] text-custom-primaryColor'>
                        Liquidity Unlock Date	
                      </h1>
                      <h1 className='font-mont font-normal text-[12px] text-[#606060]'>
                        {tokenData?.totalSupply}
                      </h1>
                    </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className='w-full lg:w-[45%] flex-1'>
            <div className='hidden lg:block'>
              <UsefulLinks />
            </div>
            <div className='w-full py-5 rounded-[20px] lg:rounded-[10px] bg-[#FAFBFD] mt-6'>
              <h1 className='font-semibold py-2 xl:pb-5 px-7 font-mont text-base lg:text-sm xl:text-base text-[#000000] text-center'>
                What do you think?
              </h1>
              <h1 className='text-[12px] font-mont pt-3 text-center lg:hidden'>
                17 Responses
              </h1>

              {/* reactions */}
              <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-6 xl:gap-x-8 gap-y-9 justify-center py-9 lg:py-2 xl:py-5 px-10 lg:px-5 xl:px-14'>
                {REACTIONS.map((data, i) => (
                  <button
                    key={i}
                    onClick={() => setReaction(data.reaction)}
                    className='p-1 xl:p-2 w-full flex items-center justify-center gap-x-1 bg-white border-[0.5px] border-solid border-[#B2B3C8] rounded-[5px]'
                    style={{
                      borderColor: data.reaction === reaction && primaryColor,
                    }}
                  >
                    <img src={data.image} alt='' />
                    <h1 className='font-mont text-[10px] xl:text-[12px] text-[#000000]'>
                      {data.reaction}
                    </h1>
                  </button>
                ))}
              </div>

              {/* comments and community tabs */}
              <div className='pt-2'>
                <div className='flex items-center w-full'>
                  <button
                    onClick={() => setActiveTab('comments')}
                    className='outline-none flex-1 border-b-[0.5px] border-solid border-[#bcbcbc] py-2 px-6 text-center'
                    style={{
                      borderColor: activeTab === 'comments' && primaryColor,
                    }}
                  >
                    <h1
                      className='font-mont font-semibold text-sm xl:text-base text-[#A9A9A9]'
                      style={{
                        color: activeTab === 'comments' && primaryColor,
                      }}
                    >
                      Comments
                    </h1>
                  </button>
                  <button
                    onClick={() => setActiveTab('community')}
                    className='outline-none flex-1 border-b-[0.5px] border-solid border-[#bcbcbc] py-2 px-6 text-center'
                    style={{
                      borderColor: activeTab === 'community' && primaryColor,
                    }}
                  >
                    <h1
                      className='font-mont font-semibold text-sm xl:text-base text-[#A9A9A9]'
                      style={{
                        color: activeTab === 'community' && primaryColor,
                      }}
                    >
                      Community
                    </h1>
                  </button>
                </div>

                <div className='flex justify-end px-5 pt-3'>
                  <button className='flex items-center gap-x-2'>
                    <h1 className='font-mont font-medium text-[12px] xl:text-sm text-[#000000]'>
                      Sort by Best
                    </h1>
                    <img src='/assets/icons/dropdown-arrow.svg' alt='' />
                  </button>
                </div>

                {/* tab contents */}
                <div className='px-10 lg:px-12 pt-6'>
                  <input
                    type='text'
                    placeholder='Start the discussion'
                    className='bg-white outline-custom-primaryColor rounded-[10px] px-3 xl:px-7 py-3 placeholder-[#A9A9A9] text-custom-primaryColor font-mont text-[12px] w-full h-[46px]'
                  />

                  <div className='pt-4 pb-7 lg:pb-7 xl:pt-9'>
                    <h1 className='font-semibold text-sm text-[#000000] font-mont lg:text-center'>
                      Login with
                    </h1>
                    <div className='flex gap-x-5 lg:gap-x-14 items-center lg:justify-center pt-4'>
                      <button className='outline-none'>
                        <a href='https://'>
                          <img
                            src='/assets/icons/twitter.svg'
                            alt=''
                            className='w-6 lg:w-4'
                          />
                        </a>
                      </button>
                      <button className='outline-none'>
                        <a href='https://'>
                          <img
                            src='/assets/icons/telegram.svg'
                            alt=''
                            className='w-6 lg:w-4'
                          />
                        </a>
                      </button>
                      <button className='outline-none'>
                        <a href='https://'>
                          <img
                            src='/assets/icons/reddit.svg'
                            alt=''
                            className='w-6 lg:w-4'
                          />
                        </a>
                      </button>
                      <button className='outline-none'>
                        <a href='https://'>
                          <img
                            src='/assets/icons/instagram.svg'
                            alt=''
                            className='w-6 lg:w-4'
                          />
                        </a>
                      </button>
                    </div>

                    {/* sign up to discuss btn */}
                    <button className='mt-10 lg:mt-5 p-2 w-full h-[46px] flex justify-center items-center bg-custom-accentColor rounded-[10px]'>
                      <h1 className='font-bold font-mont text-white text-[12px]'>
                        Or sign up to discus
                      </h1>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default index;

export const Socials = ({data}) => {
  return (
    <div className='flex gap-x-5 lg:gap-x-3 xl:gap-x-6 items-center'>
      <button className='outline-none'>
        <a target="_blank" href={data?.ico.data.twitterLink}>
          <img
            src='/assets/icons/twitter.svg'
            alt=''
            className='w-6 lg:w-5 xl:w-4'
          />
        </a>
      </button>
      <button className='outline-none'>
        <a target="_blank" href={data?.ico.data.telegramLink}>
          <img
            src='/assets/icons/telegram.svg'
            alt=''
            className='w-6 lg:w-5 xl:w-4'
          />
        </a>
      </button>
      <button className='outline-none'>
        <a target="_blank" href={data?.ico.data.websiteLink}>
          <img
            src='/assets/icons/globe.svg'
            alt=''
            className='w-6 lg:w-5 xl:w-4'
          />
        </a>
      </button>
      <button className='outline-none'>
        <a target="_blank" href={data?.ico.data.githubLink}>
          <img
            src='/assets/icons/github.svg'
            alt=''
            className='w-6 lg:w-5 xl:w-4'
          />
        </a>
      </button>
    </div>
  );
};

export const PresaleInfo = ({token}) => {
  return (
    <div className='lg:flex flex-col justify-center items-center text-center py-10 lg:py-5 lg:rounded-[10px] lg:border-[0.5px] border-solid border-[#1A2B6B]'>
      <div className='lg:px-4 xl:px-8'>
        <h1 className='font-mont font-medium lg:font-normal text-[12px] xl:text-sm text-[#000000] leading-[20px]'>
          Presale Address won't be displayed until tokens are deposited! Sending
          Money To a Sale without Deposited Tokens is very risky!
        </h1>
        <h1 className='hidden lg:block font-medium font-mont text-[#000] py-3 text-[12px] xl:text-sm'>
          Audit Link:
          <a
            href='https://'
            className='font-semibold text-custom-accentColor pl-5'
          >
            Hypersonic.finance
          </a>
        </h1>
        <h1 className='font-medium font-mont text-[#000] text-sm pt-3 lg:pt-0 lg:text-[12px] xl:text-sm'>
          <span className='inline-block lg:inline'>Token Address:</span>
          <a
            href={'https://rinkeby.etherscan.io/token/'+token}
            className='font-semibold text-custom-accentColor lg:pl-5 text-[12px]'
          >
            {token}
          </a>
        </h1>
      </div>
      <div className='bg-[#FFDDDD] w-[fit-content] mx-auto py-2 xl:py-[10px] px-8 xl:px-11 mt-3 rounded-[5px]'>
        <h1 className='font-mont font-medium text-[10px] text-[#C80707]'>
          Do not send BNB to the token address!
        </h1>
      </div>
      {/* warning */}
      <div className='flex items-center justify-center gap-x-3 pt-3'>
        <img src='/assets/icons/warning-icon.svg' alt='' />
        <h1 className='font-mont font-semibold text-[10px] xl:text-[12px] text-[#000000]'>
          {' '}
          This Token uses a Custom Contract
        </h1>
      </div>
    </div>
  );
};

export const Sale = props => {
  return (
    <div className='flex-1'>
      {(props.pokemon === 'live' || props.pokemon === 'failed') && (
        <div className='hidden lg:block'>
          <SaleTime failed={props.pokemon === 'failed'} />
        </div>
      )}

      {props.pokemon === 'failed' && (
        <div className='border-[0.5px] border-solid border-[#1A2B6B] bg-transparent lg:drop-shadow lg:bg-white rounded-[20px] lg:rounded-[10px] lg:border-none px-2 lg:px-7 py-5 flex flex-col justify-center items-center'>
          <h1 className='font-bold text-base font-mont text-[#E32E2E]'>
            This Sale has failed!
          </h1>
          <h1 className='font-medium text-[12px] text-[#000] text-center leading-[15px] pt-2'>
            Please click the button below to withdraw your contributions. (Note
            only presale particpants can withdraw)
          </h1>

          <button className='mt-5 lg:mt-8 w-[fit-content] px-7 py-2 h-[46px] bg-custom-accentColor rounded-[10px] flex justify-center items-center'>
            <h1 className='font-mont font-bold text-[12px] lg:text-[10px] xl:text-[12px] xl:text-sm text-white'>
              Withdraw Funds
            </h1>
          </button>
        </div>
      )}

      {props.pokemon !== 'failed' && (
        <div className='drop-shadow bg-white rounded-[20px] lg:rounded-[10px] pb-4 xl:py-2'>
          <Fragment>
            <div className='flex flex-col justify-center py-6 lg:py-2 px-4 border-b-[0.5px] border-solid border-[#A9A9A9]'>
              {props.pokemon === 'first' && (
                <div>
                  <h1 className='font-medium font-mont text-center text-sm lg:text-[12px] xl:text-sm text-[#474646] leading-[22px]'>
                    Sale Starts in:
                  </h1>
                  <h1 className='text-center font-bold font-mont text-2xl xl:text-3xl text-custom-accentColor'>
                    04:06:02:21
                  </h1>
                </div>
              )}

              {props.pokemon === 'live' && (
                <div className='lg:flex items-start gap-x-5'>
                  <div className='lg:hidden'>
                    <SaleTime />
                  </div>
                  <div className='w-full lg:w-1/2'>
                    <div className='rounded-[10px] bg-[#F6F7FC] px-6 overflow-hidden h-[46px] flex lg:justify-center items-center'>
                      <h1 className='font-mont text-[12px] lg:text-[10px] xl:text-[12px] text-[#474646]'>
                        1BNB=1000BABYPOKEMON
                      </h1>
                    </div>
                    <h1 className='hidden lg:block pt-2 font-mont font-medium text-[10px] xl:text-[12px] text-[#474646]'>
                      You will get 0HSN
                    </h1>
                  </div>
                  <div className='flex-1 mt-5 lg:mt-0'>
                    <button className='w-full h-[46px] bg-custom-accentColor rounded-[10px] flex justify-center items-center'>
                      <h1 className='font-mont font-bold text-[12px] lg:text-[10px] xl:text-[12px] xl:text-sm text-white'>
                        Contribute
                      </h1>
                    </button>
                    <div className='flex justify-end items-center gap-x-1'>
                      <h1 className='font-mont font-medium text-sm lg:text-[12px] xl:text-sm text-[#474646]'>
                        Auto Claim
                      </h1>

                      {/* switch */}
                      <ToggleSwitch
                        whitelistEnabled={props.whitelistEnabled}
                        handleWhitelist={props.handleWhitelist}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className='lg:flex justify-between gap-x-8 pt-6 lg:py-6 px-6'>
              {[
                {
                  title: 'Your Contributed amount',
                  value: '0000.00',
                  pokemon: 'live',
                },
                {
                  title: 'Your reserved token',
                  value: '0000BABYPOKEMON',
                  pokemon: 'failed',
                },
              ].map((data, i) => (
                <div
                  key={i}
                  onClick={() => props.setPokemon(data.pokemon)}
                  className={`w-full rounded-[10px] mb-7 lg:mb-0 bg-[#F5F6F8] p-4 lg:p-2 xl:p-[14px] `}
                >
                  <h1 className='font-semibold font-mont text-[12px] text-custom-primaryColor'>
                    {data.title}
                  </h1>
                  <input
                    readOnly
                    value={data.value}
                    className='w-full h-[46px] bg-[#fff] rounded-[10px] text-[12px] font-normal font-mont text-custom-primaryColor px-3 py-3 mt-2'
                  />
                </div>
              ))}
            </div>
          </Fragment>
        </div>
      )}
    </div>
  );
};

export const SaleTime = props => {
  return (
    <div className='bg-transparent lg:bg-[#FAFBFD] rounded-[10px] py-3 px-3 xl:px-6 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-7 mb-5'>
      <div className='flex flex-col justify-center items-center'>
        <h1
          className='font-medium font-mont text-center text-sm lg:text-[12px] xl:text-sm text-[#474646] '
          style={{
            color: props.failed && '#000',
          }}
        >
          {props.failed ? 'This presale has ended. ' : 'Sale Starts in:'}
        </h1>
        {!props.failed && (
          <h1 className='text-center font-bold font-mont text-2xl lg:text-lg xl:text-2xl text-custom-accentColor '>
            04:06:02:21
          </h1>
        )}
      </div>
      <div>
        <h1 className='font-mont text-center pb-1 xl:pb-3 text-base lg:text-[12px] xl:text-base text-[#000000] leading-[22px]'>
          80.065 / 1000 BNB Raised
        </h1>
        <div className='h-[5px] rounded-[31px] bg-[#DEDEDE] w-[220px] overflow-hidden'>
          <div
            className='h-full w-[50%] bg-[#13D274]'
            style={{
              background: props.failed && '#000',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export const UsefulLinks = props => {
  return (
    <div className='w-full py-4 px-6 lg:py-4 lg:px-7 rounded-[10px] border-[0.5px] border-solid border-[#1A2B6B]'>
      <h1 className='font-semibold font-mont text-[12px] text-[#000000] text-center'>
        Token Metrics
      </h1>

      <div className='flex items-center justify-center gap-x-8 xl:gap-x-16 pt-6 pb-4'>
        <img
          src='/assets/icons/token-metrics.svg'
          alt=''
          className='w-28 lg:w-auto'
        />

        <div className='flex flex-col gap-y-4'>
          <div className='flex items-center gap-x-2'>
            <div className='w-[11px] h-[11px] lg:w-[15px] lg:h-[15px] bg-[#FFDF78] rounded-[3px]'></div>
            <h1 className='flex-1 font-medium font-mont text-[#000000] text-[10px] lg:text-[12px]'>
              Presale
            </h1>
          </div>
          <div className='flex items-center gap-x-2'>
            <div className='w-[11px] h-[11px] lg:w-[15px] lg:h-[15px] bg-[#FF8989] rounded-[3px]'></div>
            <h1 className='flex-1 font-medium font-mont text-[#000000] text-[10px] lg:text-[12px]'>
              Liquidity
            </h1>
          </div>
          <div className='flex items-center gap-x-2'>
            <div className='w-[11px] h-[11px] lg:w-[15px] lg:h-[15px] bg-[#375BD2] rounded-[3px]'></div>
            <h1 className='flex-1 font-medium font-mont text-[#000000] text-[10px] lg:text-[12px]'>
              Locked
            </h1>
          </div>
          <div className='flex items-center gap-x-2'>
            <div className='w-[11px] h-[11px] lg:w-[15px] lg:h-[15px] bg-[#535478] rounded-[3px]'></div>
            <h1 className='flex-1 font-medium font-mont text-[#000000] text-[10px] lg:text-[12px]'>
              Unlocked
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
