import React, { useState, Fragment, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Select from 'react-select';
import Web3  from 'web3';
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
import  DateTime from '../../components/Input/Date';
import { borderRight } from '@mui/system';
import { useAppContext } from '../../contexts/AppContext';
import {RINKEBY} from '../../constants/constant.json';
import TOKEN_ABI from '../../abis/token-abi.json';

const index = () => {
  const [dataFeed,setDataFeed] = useState(null);
  var lpLock = require('../../abis/lp-abi.json');
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Lock Liquidity');
  const [selectedUnlockTime, setSelectedUnlockTime] = useState(null);
  const [selectedVestingPeriod, setSelectedVestingPeriod] = useState(null);
  const [lockOptionsModal, setLockOptionsModal] = useState(false);
  const [activeLockOption, setActiveLockOption] = useState('self');
  const [proceed, setProceed] = useState(true);
  const [lpAddress, setLpAddress] = useState("");
  const [totalSupply, setTotalSupply] = useState(0);
  const [balance, setBalance] = useState(0);
  const [symbol, setSymbol] = useState("");
  const [amount, setAmount] = useState(0);
  const [lockDate, setLockDate]=useState("");

  const [token0, setToken0] = useState({
    address : "",
    name : "",
  });const [token1, setToken1] = useState({
    address : "",
    name : "",
  });
  

  const app = useAppContext();
  const handleLockOptions = value => setActiveLockOption(value);
  const handleActiveTab = value => setActiveTab(value);
  const handleLockOptionsModal = () => setLockOptionsModal(!lockOptionsModal);
  let inputSec = 0;

  const handleProceed = async ()=>{
    try{
      var adr=document.getElementById('lpAddress').value;
      setLpAddress(adr);
      
        // if(accountAddress != "0x0"){
            let web3 = new Web3(window.ethereum);
            // let bal = await web3.eth.getBalance(window.ethereum.selectedAddress);
            // setEthBal(web3.utils.fromWei(bal));
            // console.log(bal)
            let lpContract = new web3.eth.Contract(lpLock,adr);
            

            // setToken0({...token0, address: await lpContract.methods.token0().call(), name: await tkContract.methods.name().call() });
            // setToken1({...token0, address: await lpContract.methods.token1().call(), name: await tkContract.methods.name().call() });

            let token0Adr = await lpContract.methods.token0().call();
            let tk0Contract = new web3.eth.Contract(TOKEN_ABI.TOKEN_ABI,token0Adr);
            let token0Name = await tk0Contract.methods.name().call();
            let token1Adr = await lpContract.methods.token1().call();
            let tk1Contract = new web3.eth.Contract(TOKEN_ABI.TOKEN_ABI,token1Adr);
            let token1Name = await tk1Contract.methods.name().call();

            setToken0({...token0, address: token0Adr, name: token0Name});
            setToken1({...token1, address: token1Adr, name: token1Name});

            setTotalSupply(await lpContract.methods.totalSupply().call());
            setBalance(await lpContract.methods.balanceOf(app.accountAddress).call());
            setSymbol(await lpContract.methods.symbol().call());

            setProceed(false);
            document.getElementById("errAdr").innerHTML = "";
            // setTokenName(await lpContract.methods.name().call());

        
            
       
          // setSSNBal(web3.utils.fromWei(SSNBal));
        // }

}catch(er){
  document.getElementById("errAdr").innerHTML = "Invalid Address";
  console.log(er)
  }
}

function handleAmount(e){
  setAmount(e.target.value);

}


async function setMax(){


  document.getElementById('lockAmount').value=balance;
}
  

  function setDate(e){
    console.log("inside date "+e.target.value);
    let lockSec = new Date(e.target.value).getTime();
    setLockDate(String(new Date(lockSec)));
    
  }

  async function handleSubmit (){
    let ts = Date.now();
    let lockSec = new Date(lockDate);
    inputSec =  Math.round((lockSec.getTime())/1000);
    // let tokenAddress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";
    // let web3 = new Web3(window.ethereum);
    // await window.ethereum.enable();
    // let as = JSON.parse(TokenTimelock);
    // const lockContract = new web3.eth.Contract(as.deploy({data: 0x9D7f74d0C41E726EC95884E0e97Fa6129e3b5E99, arguments: [ tokenAddress, app.accountAddress, inputSec]}), app.accountAddress);
    // let rs = lockContract.methods.releaseTime().call();
    // console.log(rs);



  }
  // useEffect(async ()=>{
  //   if(app.chainID == 4 && app.accountAddress != '0x0' && app.web3){

  //     let launchContract = new app.web3.eth.Contract(JSON.parse(Userinfo),RINKEBY.LAUNCH);
  //     let data = await launchContract.methods.UserBalance(app.accountAddress).call();
  //     console.log(data);
  //     setDataFeed(data)
  //   //   let tokenContract = new app.web3.eth.Contract(TOKEN_ABI,data.ico.data.tokenAddress);
  //   //   let name_ = await tokenContract.methods.name().call();
  //   //   let symbol_ = await tokenContract.methods.symbol().call();
  //   //   let totalSupply_ = await tokenContract.methods.totalSupply().call();
  //   //   let decimals = await tokenContract.methods.decimals().call();
  //   //   let totalSupply = Number.parseInt(totalSupply_) / (10**Number(decimals));
  //   //   setTokenData({name:name_,symbol:symbol_,totalSupply,decimals});
  //   }
  // });
  

  return (
    <Fragment>
      <div className='py-6'>
        <button
          onClick={() => router.back()}
          className='outline-none hidden lg:flex items-center gap-x-2'
        >
          <img src='/assets/icons/arrow-left.svg' alt='' />
          <h1 className='font-mont font-semibold text-[#2C2C2C] text-sm'>
            Back
          </h1>
        </button>

        <h1 className='lg:hidden font-bold font-mont text-base text-custom-primaryColor'>
          SaleX Lock
        </h1>
        {/* tabs and tab contents */}
        <div className='pt-3 lg:pt-4'>
          {/* tab */}
          <SaleLockTab activeTab={activeTab} handleActiveTab={handleActiveTab}>
            <div title='Lock Liquidity'>
              <div className='py-6 lg:py-16 flex flex-col lg:items-center'>
                <h1 className='font-semibold text-base lg:text-lg xl:text-2xl text-left lg:text-center font-mont text-custom-primaryColor leading-[29px]'>
                  <span className='hidden lg:inline'>Salex lock </span>{' '}
                  Liquidity Locker
                </h1>
                <h1 className='font-medium pt-1 xl:pt-3 text-left lg:text-center text-[12px] xl:text-sm font-mont text-[#474646] leading-[17px] pr-6 lg:px-40'>
                  Use the Salex lock Liquidity Locker to lock your LP tokens to
                  show your <br className='hidden lg:block' /> investors proof
                  of locked liquidity!
                </h1>
                <div className='pt-6 lg:pt-8 w-full lg:w-1/2'>
                  <div>
                    <h1
                      htmlFor='pair'
                      className='font-mont text-left font-medium text-[12px] lg:text-sm  text-[#474646]'
                    >
                      Enter Nan Pair Address
                    </h1>
                    <input
                      id='lpAddress'
                      type='text'
                      className='w-full block outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[46px] mt-2 rounded-[10px] text-[12px] xl:text-sm text-[#000000] font-medium'
                    />
                  </div>
                  <div className='pt-2'>
                  <div className='bg-[#F1EAFF] mt-2 w-[fit-content] p-2 lg:p-2 rounded-[2px] lg:rounded-[10px]'>
                    <h1 className='font-semibold font-mont text-[8px] lg:text-[12px] text-custom-accentColor'>
                      Token Locker Fees 0.1 nan (Flat Rate)
                    </h1>
                          </div>
                            <h1 id="errAdr" className='font-mont text-center font-medium text-[12px] text-[#E32E2E] leading-[18px]'>
                              
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
                            {token0.name}
                          </span>
                          &nbsp; &nbsp; {'-'} &nbsp; &nbsp;
                          <span className='font-normal text-[#606060] underline'>
                            {token0.address}
                          </span>
                        </h1>
                        <h1 className='font-medium font-mont text-[12px] xl:text-sm text-[#606060]'>
                          <span className='text-custom-accentColor underline'>
                            {token1.name}
                          </span>
                          &nbsp; &nbsp; {'-'} &nbsp; &nbsp;
                          <span className='font-normal text-[#606060] underline'>
                            {token1.address}
                          </span>
                        </h1>
                        <h1 className='font-medium font-mont text-[12px] xl:text-sm text-[#606060]'>
                          <span className='text-custom-accentColor underline'>
                          LP Token Supply
                          </span>
                          &nbsp; &nbsp; {'-'} &nbsp; &nbsp;
                          <span className='font-normal text-[#606060] underline'>
                          {totalSupply}
                          </span>
                        </h1>
                      </div>

                      {/* inputs */}
                      <div>
                        <div className='pt-8'>
                          <div className='flex items-center justify-between'>
                            <h1 className='font-mont text-left font-medium text-[12px] lg:text-sm text-[#474646]'>
                              Amount to lock
                            </h1>
                            <h1 className='font-mont text-left font-medium text-[10px] lg:text-[12px] text-[#A9A9A9]'>
                              {balance+" "+symbol} 
                            </h1>
                          </div>
                          <div className='w-full bg-[#F6F7FC] h-[46px]  mt-2 rounded-[10px] flex items-center justify-between overflow-hidden'>
                            <input
                              id='lockAmount'
                              type='text'
                              onChange={handleAmount}
                              className='outline-none w-full bg-[#F6F7FC] flex-1 px-5  placeholder-[#4A4A4A] h-full text-[12px] xl:text-sm text-[#000000] font-medium'
                            />
                            <div onClick={setMax} ><h1
                            className='font-mont pr-4 font-bold text-[12px] xl:text-sm text-custom-accentColor'>
                              Max
                            </h1>
                            </div>
                          </div>
                        </div>
                        <div className='pt-8'>
                          <div className='flex items-center justify-between'>
                            <h1 className='font-mont text-left font-medium text-[12px] lg:text-sm  text-[#474646]'>
                              Liquidity Unlock time
                            </h1>
                            <h1 className='font-mont text-left font-medium text-[10px] lg:text-[12px] text-[#A9A9A9]'>
                            </h1>
                          </div>
                          <div className='w-full bg-[#F6F7FC] h-[46px] mt-2 rounded-[10px] flex items-center justify-between pr-4'>
                            <input
                              id='date'
                              type='text'
                              className='outline-none w-full bg-[#F6F7FC] flex-1 px-5  placeholder-[#4A4A4A] rounded-tl-[10px] rounded-bl-[10px] h-full text-[12px] xl:text-sm text-[#000000] font-medium'
                            />
                            
                            <DateTime onChange={setDate} />


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
                                {totalSupply}
                              </h1>
                            </div>
                            <div className='flex items-center justify-between'>
                              <h1 className='font-mont font-medium text-[12px] lg:text-sm xl:text-base text-[#000000]'>
                                Your Lp Tokens to be Locked:
                              </h1>
                              <h1 className='font-mont font-medium text-[12px] lg:text-sm  text-[#474646]'>
                                {amount}/{balance}
                              </h1>
                              
                             
                             
                            </div>
                            <div className='flex items-center justify-between'>
                              <h1 className='font-mont font-medium text-[12px] lg:text-sm xl:text-base text-[#000000]'>
                              Unlock date:
                              </h1>
                              <h1 className='font-mont font-medium text-[12px] lg:text-sm xl:text-base text-[#474646]'>
                              {lockDate}
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
            <ManageLockedTabContent 
            title='Manage Lock Liquidity' />
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
    // textAlign: 'right',
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
