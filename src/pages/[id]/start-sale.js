import React, { useState, Fragment, useEffect, useRef } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Web3 from 'web3';
import Swal from 'sweetalert2'

import {LAUNCH_ABI} from '../../abis/launch-abi.json';
import {TOKEN_ABI} from '../../abis/token-abi.json'
import {RINKEBY} from '../../constants/constant.json';
//custom
import { primaryColor } from '../../styles/variables.module.scss';
import { LaunchPadHeader } from '../../components/Launchpad/LaunchPad';
import SelectDropdown from '../../components/SelectDropdown/SelectDropdown';
import Input from '../../components/Input/Input';

// utils
import { EXCHANGE_OPTIONS } from '../../Utils/data';
import { useAppContext } from '../../contexts/AppContext';
import DateInput from '../../components/Input/Date';
import { switchChain } from '../../Utils/chain-util';

const index = () => {
  const [approved,setApproved] = useState(false);

  const dropdownRef = React.createRef();
  const [activeStep, setActiveStep] = useState(0);
  const [disclaimer, setDisclaimer] = useState(false);
  const [contract, setContract] = useState(null);
  const [tokenContract,setTokenContract] = useState(null);
  const app = useAppContext();
  const [chainID,setChainID] = useState(4);
  const [data,setData] = useState(null);
  const [totalFee,setTotalFee] = useState(2000);

  // Input field
  const [tokenAddress,setTokenAddress] = useState("0x5D78cde7106732BC0B1CEF6C63637595C28DfCEb");
  const [rate,setRate] = useState(600);
  const [softCap,setSoftCap] = useState(0.1);
  const [hardCap,setHardCap] = useState(0.5);
  const [minAmount,setMinAmount] = useState(0.005);
  const [maxAmount,setMaxAmount] = useState(0.05);
  const [selectedSwap,setSelectedSwap] = useState('Pancakeswap');

  const [exchangeLiquidity,setExchangeLiquidity] = useState(70);
  const [exchangeListingRate,setExchangeListingRate] = useState(400);
  const [auditLink,setAuditLink] = useState("");
  const [projectUpdate,setProjectUpdate] = useState("");
  const [description,setDescription] = useState("");
  const [telegramLink,setTelegramLink] = useState("");
  const [redditLink,setRedditLink] = useState("");
  const [twitterLink,setTwitterLink] = useState("");
  const [githubLink,setGithubLink] = useState("");
  const [websiteLink,setWebsiteLink] = useState("");
  const [logoLink,setLogoLink] = useState("");
  let d = new Date();

  const [startDate,setStartDate] = useState(d.toLocaleDateString());
  const [startDate2,setStartDate2] = useState(Date.now());
  const [endDate,setEndDate] = useState(d.toLocaleDateString());
  const [endDate2,setEndDate2] = useState(Date.now());
  const [lockTime,setLockTime] = useState(90)

  // Field Errors
  const [tokenError,setTokenError] = useState("");
  const [capError,setCapError] = useState("");
  const [contributionError,setContributionError] = useState("");
  const [liquidityError,setLiquidityError] = useState("");
  const [listingError,setListingError] = useState("");
  const [timingError,setTimingError] = useState("");

  const handleNext = () => {
    // console.log(dropdownRef.selected);
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const isValidAddress = (addr)=>{
    try {
      let web3 = new Web3('https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');
      web3.utils.toChecksumAddress(addr);
      return true;
    } catch (error) {
      return false;
    }
  }
  const validateToken = (next)=>{
    if(tokenAddress != null && tokenAddress != "" && isValidAddress(tokenAddress)){
      if(data !=null){
        if(next){
          handleNext();
          // new Swal("ERROR","Please enter valid token info or wait for fetch","error");
        }
      }else{
        setTokenError("Invalid Token");
        // new Swal("ERROR","Please enter valid token info or wait for fetch","error");
      }
    }
  }
  const validateCap = (data)=>{
    console.log({
      sc:Number(data.soft),
      hc:Number(data.hard)
    })
    setHardCap(data.hard)
    setSoftCap(data.soft)
    if(Number(data.soft) <= 0){
      setCapError("Value can't be Zero or Less!!");
      return;
    }
    if(Number(data.hard) <= 0){
      setCapError("Value can't be Zero or Less!!");
      return;
    }
    if(Number(data.soft) >= Number(data.hard)){
      setCapError("Soft Cap must be Lower!!");
    }else{
      setCapError("");
    }
  }
  const handleCapNext = ()=>{
    if(capError == ""){
      handleNext();
    }
  }


  // Validate Contribution
  const validateContribution = (data)=>{
    console.log({
      sc:Number(data.soft),
      hc:Number(data.hard)
    })
    setMaxAmount(data.hard)
    setMinAmount(data.soft)
    if(Number(data.soft) <= 0){
      setContributionError("Value can't be Zero or Less!!");
      return;
    }
    if(Number(data.hard) <= 0){
      setContributionError("Value can't be Zero or Less!!");
      return;
    }
    if(Number(data.soft) >= Number(data.hard)){
      setContributionError("Min Contribution must be Lower!!");
    }else{
      setContributionError("");
    }
  }
  const handleContributionNext = ()=>{
    if(contributionError == ""){
      handleNext();
    }
  }
  const validateLiquidity = (value)=>{
    setExchangeLiquidity(value);
    if(Number(value) < 51){
      setLiquidityError("Can't be Less than 51%");
      return;
    }
    if(Number(value) > 98){
      setLiquidityError("Can't be greater than 98%");
      return;
    }
    setLiquidityError("");
  }
  const handleLiquidityNext = ()=>{
    if(liquidityError == ""){
      handleNext();
    }
  }
  const validateListingRate = (value)=>{
    setExchangeListingRate(value);
    if(Number(value) > Number(rate)){
      setListingError("Can't be greater than "+rate);
      return;
    }
    setListingError("");
  }
  const handleListingNext = ()=>{
    if(listingError == ""){
      handleNext();
    }
  }
  const handleTimingNext = ()=>{
    if(startDate2 > endDate2){
      setTimingError("Invalid period!!");
      return;
    }else{
      setTimingError("");
      handleNext();
    }
  }

  useEffect(async ()=>{
    if(!window.ethereum.isConnected){
      window.ethereum.enable().then(async e=>{
        let web3 = new Web3(window.ethereum);
        setChainID(await web3.eth.getChainId());
      })
    }else{

    }
    // if(chainID == 4){
      let ExternalWeb3 = new Web3('https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');
      let LaunchContract = new ExternalWeb3.eth.Contract(LAUNCH_ABI,RINKEBY.LAUNCH);
      let adminFee = await LaunchContract.methods.adminWalletFee().call();
      let stakingFee = await LaunchContract.methods.stakingPoolFee().call();
      let burnFee = await LaunchContract.methods.burnFee().call();
      let totalFee = (Number(adminFee) + Number(stakingFee) + Number(burnFee))/(10**18);
      setTotalFee(totalFee);
      setContract(LaunchContract);
      let TokenContract = new ExternalWeb3.eth.Contract(TOKEN_ABI,RINKEBY.TOKEN);
      setTokenContract(TokenContract);
    // }
  },[chainID])

  

  const setLoading = (status)=>{

  }

  const getInfo = async (address)=>{
    try{
      setLoading(true);
      if(chainID == 4){
        let ExternalWeb3 = new Web3('https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');
        let customToken = new ExternalWeb3.eth.Contract(TOKEN_ABI,address);
        let name = await customToken.methods.name().call();
        let symbol = await customToken.methods.symbol().call();
        let totalSupply = await customToken.methods.totalSupply().call();
        let decimal = await customToken.methods.decimals().call();
        let actualTotalSupply = Number(totalSupply)/(10**Number(decimal));
        let TokenData = {
          name,symbol,totalSupply:actualTotalSupply
        } 
        setLoading(false);
        setData(TokenData);
        setTokenError("");
      console.log(TokenData)
      }
    }catch(e){
      console.log("Invalid Address",e);
        setData(null);
        setTokenError("Invalid Token");
    }
  }
  const createObject = async ()=>{
    let icoName = data.name + " ICO";
    let longDescription = description;
    let tokenAddress_ = tokenAddress;
    let presaleSupply = app.web3.utils.toWei((Number(hardCap) * Number(rate)).toString(),'ether');
    let liquiditySupply = Number(exchangeLiquidity)*100;
    let presaleStartTime = Math.round(startDate2/1000);
    let presaleEndTime = Math.round(endDate2/1000);
    let listingOn = selectedSwap;
    let softCap_ = app.web3.utils.toWei(softCap.toString(),'ether');
    let hardCap_ = app.web3.utils.toWei(hardCap.toString(),'ether');
    let ratePerBNB = rate;
    let exchangeListingRateBNB = exchangeListingRate;
    let minAmount_ = app.web3.utils.toWei(minAmount.toString(),'ether');
    let maxAmount_ = app.web3.utils.toWei(maxAmount.toString(),'ether');
    let lockLiquidity = true;
    let burnLiquidity = false;
    let liquidityLockTime = Number(lockTime);
    let whiteListEnabled = false;
    let whitelistLastDate = 0;
    return [ icoName,
     longDescription,
     tokenAddress_,
     presaleSupply,
     liquiditySupply,
     presaleStartTime,
     presaleEndTime,
     listingOn,
     softCap_,
     hardCap_,
     ratePerBNB,
     exchangeListingRateBNB,
     minAmount_,
     maxAmount_,
     lockLiquidity,
     burnLiquidity,
     liquidityLockTime,
     whiteListEnabled,
     whitelistLastDate]
  }
  const getRequiredToken = ()=>{
    let presaleAmount = Number(hardCap) * Number(rate);
    let fee = presaleAmount * 0.02;
    let liquidity = Number(hardCap) * Number(exchangeListingRate) * Number(exchangeLiquidity) / 100 ;
    return (presaleAmount + fee + liquidity)
  }
  const handleCreate = async ()=>{
    try{
      if(approved){
        let web3 = new Web3(window.ethereum);
        let chainId = await web3.eth.getChainId()
        if(chainId != 4){
          await switchChain();
        }
        let data = await createObject();
        let launchContract = new web3.eth.Contract(LAUNCH_ABI,RINKEBY.LAUNCH);
        let gas = await launchContract.methods.createNewICO(data).estimateGas({from:app.accountAddress});
        launchContract.methods.createNewICO(data).send({from:app.accountAddress}).on('confirmation',hash=>{
          new Swal("Submitted","Transaction Submitted!","success");
        })
      }else{
        handleApprove();
      }
    }catch(e){
      console.log(e);
    }

  }
  const handleApprove = async ()=>{
    try {
      let web3 = app.web3;
      let ssnToken = new web3.eth.Contract(TOKEN_ABI,RINKEBY.TOKEN);
      let token  = new web3.eth.Contract(TOKEN_ABI,tokenAddress);
      let allowance = await ssnToken.methods.allowance(app.accountAddress,RINKEBY.LAUNCH).call();
      let allowance2 = await token.methods.allowance(app.accountAddress,RINKEBY.LAUNCH).call();
      let balance = await ssnToken.methods.balanceOf(app.accountAddress).call();
      let balance2 = await token.methods.balanceOf(app.accountAddress).call();
      let totalTokenRequired = getRequiredToken();
      if(totalTokenRequired <= balance2 && totalFee <= balance){
        console.log(balance2,balance);
        if(Number(web3.utils.fromWei(allowance,'ether')) > totalFee){
          // setApproved(true);
          if(Number(web3.utils.fromWei(allowance2,'ether')) > totalFee){
              new Swal("Success","Token was approved previously!","success");
              setApproved(true);
          }else{
            ssnToken.methods.approve(RINKEBY.LAUNCH,'1000000000000000000000000000000000000000000').send({from:app.accountAddress}).once('confirmation',()=>{
              setApproved(true);
              new Swal("Success","Successfully approved token!","success");
            })
          }
        }else{
          ssnToken.methods.approve(RINKEBY.LAUNCH,'1000000000000000000000000000000000000000000').send({from:app.accountAddress}).once('confirmation',()=>{
            // setApproved(true);
            if(Number(web3.utils.fromWei(allowance2,'ether')) > totalFee){
                new Swal("Success","Successfully approved token!","success");
                setApproved(true);
            }else{
                ssnToken.methods.approve(RINKEBY.LAUNCH,'1000000000000000000000000000000000000000000').send({from:app.accountAddress}).once('confirmation',()=>{
                new Swal("Success","Successfully approved token!","success");
                setApproved(true);
              })
            }
          })
        }
      }else{
        console.log(balance2,balance);
        new Swal("Error","Don\'t have enough Balance!","success");
        setApproved(false);
      }
    }catch(error){
        console.log(error);
        new Swal("Error","Error while approving!","success");
        setApproved(false);
    }
  }
  return (
    <Fragment>
      <div className='py-7'>
        <LaunchPadHeader route='/id/manage-sale' btnText='Manage Sale' />

        {/* start sale */}
        <div className='pt-5 lg:pt-10'>
          <div>
            <h1 className='font-semibold font-mont text-base lg:text-xl text-custom-primaryColor'>
              Start Sale
            </h1>
            <h1 className='font-mont text-[12px] lg:text-sm text-[#474646]'>
              Get started in just a few simple steps!
            </h1>
          </div>

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

          <div className='hidden lg:flex items-center gap-x-8 pt-3'>
            <h1 className='font-bold text-base font-mont text-custom-accentColor'>
              Current Fees: {totalFee} SSN + 2% of Tokens Sold + 2% of BNB Raised
            </h1>

            <div
              onClick={() => setDisclaimer(!disclaimer)}
              className='drop-shadow hover:cursor-pointer flex items-center gap-1 rounded-[10px] py-3 px-5'
            >
              <img
                src='/assets/icons/warning-icon.svg'
                alt=''
                className='w-4'
              />
              <h1 className='font-semibold text-base text-[#000]'>
                Check warning here
              </h1>
            </div>
          </div>
        </div>

        {/* multi step dropdown */}
        <div className='pt-5'>
          <Stepper activeStep={activeStep} orientation='vertical'>
            <Step>
              <StepLabel>
                <h1 className='font-medium font-mont text-sm lg:text-base text-custom-primaryColor'>
                  Token Address
                </h1>
              </StepLabel>
              <StepContent>
                <div>
                  <Input
                    value={tokenAddress}
                    onChange={e=>{
                      setTokenAddress(e.target.value);
                      getInfo(e.target.value);
                    }}
                    label='Enter your token address'
                    className='w-full lg:w-[50%]'
                    error={tokenError}
                  />

                  <div className='pt-2 flex flex-col gap-y-2'>
                    <h1 className='font-mont text-[12px] lg:text-sm text-[#000000] leading-6'>
                      Token Name: <strong>{data?.name}</strong>
                    </h1>
                    <h1 className='font-mont text-[12px] lg:text-sm text-[#000000] leading-6'>
                      Token Symbol: <strong>{data?.symbol}</strong>
                    </h1>
                    <h1 className='font-mont text-[12px] lg:text-sm text-[#000000] leading-6'>
                      Token Total Supply: <strong>{data?.totalSupply}</strong>
                    </h1>
                  </div>

                  <div className='flex justify-center lg:justify-start items-center gap-x-14 lg:gap-x-6 pt-4'>
                    {/* <button onClick={handleBack} className='outline-none'>
                      <h1 className='font-mont font-semibold lg:font-normal text-[12px] lg:text-sm text-custom-accentColor lg:text-[#A9A9A9] leading-6'>
                        Back
                      </h1>
                    </button> */}
                    <button
                      onClick={e=>validateToken(true)}
                      className='outline-none p-2 rounded-[10px] bg-custom-accentColor h-[40px] w-[108px] lg:bg-transparent lg:p-0 lg:w-[fit-content]'
                    >
                      <h1 className='font-mont font-semibold lg:underline text-[12px] lg:text-sm text-white lg:text-custom-accentColor leading-6'>
                        Next
                      </h1>
                    </button>
                  </div>
                </div>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h1 className='font-medium font-mont text-sm lg:text-base text-custom-primaryColor'>
                  Presale Rate
                </h1>
              </StepLabel>
              <StepContent>
                <div>
                  <h1 className='font-mont text-[12px] lg:text-sm text-[#4A4A4A] leading-6'>
                    Enter your presale price: (If I pay 1 BNB, how many tokens
                    do I get?)
                  </h1>

                  <Input placeholder='Ex. 600'
                        type="number"
                        value={rate}
                        onChange={
                          e=>{
                            setRate(e.target.value);
                          }
                        }
                        className='w-full lg:w-[50%]' 
                  />

                  <div className='flex justify-center lg:justify-start items-center gap-x-14 lg:gap-x-6 pt-4'>
                    <button onClick={handleBack} className='outline-none'>
                      <h1 className='font-mont font-semibold lg:font-normal text-[12px] lg:text-sm text-custom-accentColor lg:text-[#A9A9A9] leading-6'>
                        Back
                      </h1>
                    </button>
                    <button
                      onClick={handleNext}
                      className='outline-none p-2 rounded-[10px] bg-custom-accentColor h-[40px] w-[108px] lg:bg-transparent lg:p-0 lg:w-[fit-content]'
                    >
                      <h1 className='font-mont font-semibold lg:underline text-[12px] lg:text-sm text-white lg:text-custom-accentColor leading-6'>
                        Next
                      </h1>
                    </button>
                  </div>
                </div>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h1 className='font-medium font-mont text-sm lg:text-base text-custom-primaryColor'>
                  Soft/Hard Cap
                </h1>
              </StepLabel>
              <StepContent>
                <div>
                  <h1 className='font-mont text-[12px] lg:text-sm text-[#4A4A4A] leading-6'>
                    Enter your presale price: (If I pay 1 BNB, how many tokens
                    do I get?)
                  </h1>

                  <div className='flex flex-col lg:flex-row items-center gap-6 pt-3'>
                    <div className='w-full lg:w-[30%]'>
                      <Input
                        label='Soft Cap:'
                        placeholder='Ex. 600'
                        type="number"
                        className='w-full'
                        value={softCap}
                        error={capError}
                        onChange={
                          e=>{
                            // setSoftCap(e.target.value);
                            validateCap({soft:e.target.value,hard:hardCap});
                          }
                        }
                      />
                    </div>
                    <div className='w-full lg:w-[30%]'>
                      <Input
                        label='Hard Cap:'
                        placeholder='Ex. 600'
                        type="number"
                        className='w-full'
                        value={hardCap}
                        error={capError}
                        onChange={
                          e=>{
                            // setHardCap(e.target.value).;
                            validateCap({soft:softCap,hard:e.target.value});
                          }
                        }
                      />
                    </div>
                  </div>

                  <div className='flex justify-center lg:justify-start items-center gap-x-14 lg:gap-x-6 pt-4'>
                    <button onClick={handleBack} className='outline-none'>
                      <h1 className='font-mont font-semibold lg:font-normal text-[12px] lg:text-sm text-custom-accentColor lg:text-[#A9A9A9] leading-6'>
                        Back
                      </h1>
                    </button>
                    <button
                      onClick={handleCapNext}
                      className='outline-none p-2 rounded-[10px] bg-custom-accentColor h-[40px] w-[108px] lg:bg-transparent lg:p-0 lg:w-[fit-content]'
                    >
                      <h1 className='font-mont font-semibold lg:underline text-[12px] lg:text-sm text-white lg:text-custom-accentColor leading-6'>
                        Next
                      </h1>
                    </button>
                  </div>
                </div>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h1 className='font-medium font-mont text-sm lg:text-base text-custom-primaryColor'>
                  Contribution Limits
                </h1>
              </StepLabel>
              <StepContent>
                <div>
                  <h1 className='font-mont text-[12px] lg:text-sm text-[#4A4A4A] leading-6'>
                    Enter the minimum and maximum amounts each wallet can
                    contribute: (min,max)
                  </h1>

                  <div className='flex flex-col lg:flex-row items-center gap-6 pt-3'>
                    <div className='w-full lg:w-[30%]'>
                      <Input
                        label=' Minimum Contribution Limit:'
                        placeholder='Ex. 0.1'
                        type="number"
                        className='w-full'
                        value={minAmount}
                        error={contributionError}
                        onChange={
                          e=>{
                            // setMinAmount(e.target.value);
                            validateContribution({soft:e.target.value,hard:maxAmount})
                          }
                        }
                      />
                    </div>
                    <div className='w-full lg:w-[30%]'>
                      <Input
                        label=' Maximum Contribution Limit:'
                        placeholder='Ex. 0.3'
                        type="number"
                        className='w-full'
                        value={maxAmount}
                        error={contributionError}
                        onChange={
                          e=>{
                            // setMaxAmount(e.target.value);
                            validateContribution({hard:e.target.value,soft:minAmount})
                          }
                        }
                      />
                    </div>
                  </div>

                  <div className='flex justify-center lg:justify-start items-center gap-x-14 lg:gap-x-6 pt-4'>
                    <button onClick={handleBack} className='outline-none'>
                      <h1 className='font-mont font-semibold lg:font-normal text-[12px] lg:text-sm text-custom-accentColor lg:text-[#A9A9A9] leading-6'>
                        Back
                      </h1>
                    </button>
                    <button
                      onClick={handleContributionNext}
                      className='outline-none p-2 rounded-[10px] bg-custom-accentColor h-[40px] w-[108px] lg:bg-transparent lg:p-0 lg:w-[fit-content]'
                    >
                      <h1 className='font-mont font-semibold lg:underline text-[12px] lg:text-sm text-white lg:text-custom-accentColor leading-6'>
                        Next
                      </h1>
                    </button>
                  </div>
                </div>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h1 className='font-medium font-mont text-sm lg:text-base text-custom-primaryColor'>
                  Select Exchange
                </h1>
              </StepLabel>
              <StepContent>
                <div>
                  <h1 className='font-mont text-[12px] lg:text-sm text-[#4A4A4A] leading-6'>
                    Select exchange for token to be listed on
                  </h1>

                  <div className='w-full lg:w-[184px] pt-3'>
                    <SelectDropdown
                      placeholder='Pancakeswap'
                      options={EXCHANGE_OPTIONS}
                      ref={dropdownRef}
                      selected={selectedSwap}
                      onSelectedChange={e=>{
                        setSelectedSwap(e);
                      }}
                    />
                  </div>

                  <div className='flex justify-center lg:justify-start items-center gap-x-14 lg:gap-x-6 pt-4'>
                    <button onClick={handleBack} className='outline-none'>
                      <h1 className='font-mont font-semibold lg:font-normal text-[12px] lg:text-sm text-custom-accentColor lg:text-[#A9A9A9] leading-6'>
                        Back
                      </h1>
                    </button>
                    <button
                      onClick={handleNext}
                      className='outline-none p-2 rounded-[10px] bg-custom-accentColor h-[40px] w-[108px] lg:bg-transparent lg:p-0 lg:w-[fit-content]'
                    >
                      <h1 className='font-mont font-semibold lg:underline text-[12px] lg:text-sm text-white lg:text-custom-accentColor leading-6'>
                        Next
                      </h1>
                    </button>
                  </div>
                </div>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h1 className='font-medium font-mont text-sm lg:text-base text-custom-primaryColor'>
                  Exchange Liquidity
                </h1>
              </StepLabel>
              <StepContent>
                <div>
                  <h1 className='font-mont text-[12px] lg:text-sm text-[#4A4A4A] leading-6'>
                    Enter the percentage of raised funds that should be
                    allocated to Liquidity on Exchange (Min 51%, Max 100%, We
                    recommend {'>'} 70%)
                  </h1>

                  <div className='pt-3'>
                    <Input
                      placeholder='Ex. 70'
                      value={exchangeLiquidity}
                      error={liquidityError}
                      onChange={e=>{
                        validateLiquidity(e.target.value)
                      }}
                      className='w-full lg:w-[50%]'
                    />
                  </div>

                  <div className='flex justify-center lg:justify-start items-center gap-x-14 lg:gap-x-6 pt-4'>
                    <button onClick={handleBack} className='outline-none'>
                      <h1 className='font-mont font-semibold lg:font-normal text-[12px] lg:text-sm text-custom-accentColor lg:text-[#A9A9A9] leading-6'>
                        Back
                      </h1>
                    </button>
                    <button
                      onClick={handleLiquidityNext}
                      className='outline-none p-2 rounded-[10px] bg-custom-accentColor h-[40px] w-[108px] lg:bg-transparent lg:p-0 lg:w-[fit-content]'
                    >
                      <h1 className='font-mont font-semibold lg:underline text-[12px] lg:text-sm text-white lg:text-custom-accentColor leading-6'>
                        Next
                      </h1>
                    </button>
                  </div>
                </div>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h1 className='font-medium font-mont text-sm lg:text-base text-custom-primaryColor'>
                  Exchange Listing Rate
                </h1>
              </StepLabel>
              <StepContent>
                <div>
                  <h1 className='font-mont text-[12px] lg:text-sm text-[#4A4A4A] leading-6'>
                    Enter the PancakeSwap listing price: (If I buy 1 BNB worth
                    on PancakeSwap how many tokens do I get? Usually this amount
                    is lower than presale rate to allow for a higher listing
                    price on PancakeSwap)
                  </h1>

                  <div className='pt-3'>
                    <Input placeholder='Ex. 400' className='w-full lg:w-[50%]' 
                     value={exchangeListingRate}
                     error={listingError}
                     onChange={e=>{
                       validateListingRate(e.target.value);
                     }}
                    />
                  </div>

                  <div className='flex justify-center lg:justify-start items-center gap-x-14 lg:gap-x-6 pt-4'>
                    <button onClick={handleBack} className='outline-none'>
                      <h1 className='font-mont font-semibold lg:font-normal text-[12px] lg:text-sm text-custom-accentColor lg:text-[#A9A9A9] leading-6'>
                        Back
                      </h1>
                    </button>
                    <button
                      onClick={handleListingNext}
                      className='outline-none p-2 rounded-[10px] bg-custom-accentColor h-[40px] w-[108px] lg:bg-transparent lg:p-0 lg:w-[fit-content]'
                    >
                      <h1 className='font-mont font-semibold lg:underline text-[12px] lg:text-sm text-white lg:text-custom-accentColor leading-6'>
                        Next
                      </h1>
                    </button>
                  </div>
                </div>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h1 className='font-medium font-mont text-sm lg:text-base text-custom-primaryColor'>
                  Audit link
                </h1>
              </StepLabel>
              <StepContent>
                <div>
                  <h1 className='font-mont text-[12px] lg:text-sm text-[#4A4A4A] leading-6'>
                    Enter audit url
                  </h1>

                  <div className='pt-3'>
                    <Input className='w-full lg:w-[50%]' 
                      value={auditLink}
                      onChange={e=>{
                        setAuditLink(e.target.value);
                      }}
                    />
                  </div>

                  <div className='flex justify-center lg:justify-start items-center gap-x-14 lg:gap-x-6 pt-4'>
                    <button onClick={handleBack} className='outline-none'>
                      <h1 className='font-mont font-semibold lg:font-normal text-[12px] lg:text-sm text-custom-accentColor lg:text-[#A9A9A9] leading-6'>
                        Back
                      </h1>
                    </button>
                    <button
                      onClick={handleNext}
                      className='outline-none p-2 rounded-[10px] bg-custom-accentColor h-[40px] w-[108px] lg:bg-transparent lg:p-0 lg:w-[fit-content]'
                    >
                      <h1 className='font-mont font-semibold lg:underline text-[12px] lg:text-sm text-white lg:text-custom-accentColor leading-6'>
                        Next
                      </h1>
                    </button>
                  </div>
                </div>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h1 className='font-medium font-mont text-sm lg:text-base text-custom-primaryColor'>
                  Additional Information
                </h1>
              </StepLabel>
              <StepContent>
                <div>
                  <h1 className='font-mont text-[12px] lg:text-sm text-[#4A4A4A] leading-6'>
                    Please fill out the additional information below to display
                    it on your presale. (Information in this section is
                    optional, but a description and logo link is recommended)
                    <span className='font-medium'>
                      Note the information in this section can be updated at any
                      time by the presale creator while the presale is active.
                      Any links left blank will not be displayed on your sale.
                    </span>
                  </h1>

                  <div className='flex flex-col gap-4 pt-3'>
                    <div>
                      <Input
                        label='Logo Link: (URL must end with a supported image
                      extension png, jpg, jpeg or gif)'
                        placeholder='Ex. https://example.com/logo.png'
                        className='w-full lg:w-[50%]'
                        value={logoLink}
                        onChange={e=>{
                          setLogoLink(e.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <Input
                        label='Website Link:'
                        placeholder='Ex. https://www.example.com'
                        className='w-full lg:w-[50%]'
                        value={websiteLink}
                        onChange={e=>{
                          setWebsiteLink(e.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <Input
                        label='Github Link:'
                        placeholder='Ex. https://github.com/hello-world/'
                        className='w-full lg:w-[50%]'
                        value={githubLink}
                        onChange={e=>{
                          setGithubLink(e.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <Input
                        label='Twitter Link:'
                        placeholder='Ex. https://twitter.com/hello-world'
                        className='w-full lg:w-[50%]'
                        value={twitterLink}
                        onChange={e=>{
                          setTwitterLink(e.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <Input
                        label='Reddit Link:'
                        placeholder='Ex. https://reddit.com/hello-world'
                        className='w-full lg:w-[50%]'
                        value={redditLink}
                        onChange={e=>{
                          setRedditLink(e.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <Input
                        label='Telegram Link:'
                        placeholder='Ex. https://t.me/hello-world'
                        className='w-full lg:w-[50%]'
                        value={telegramLink}
                        onChange={e=>{
                          setTelegramLink(e.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <Input
                        label='Project Description:'
                        placeholder='Ex. Some Big Decription'
                        className='w-full lg:w-[50%]'
                        value={description}
                        onChange={e=>{
                          setDescription(e.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <Input
                        label='Any update you want to provide to participants:'
                        placeholder='Ex. Project Update: New Feature Added'
                        className='w-full lg:w-[50%]'
                        value={projectUpdate}
                        onChange={e=>{
                          setProjectUpdate(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className='flex justify-center lg:justify-start items-center gap-x-14 lg:gap-x-6 pt-4'>
                    <button onClick={handleBack} className='outline-none'>
                      <h1 className='font-mont font-semibold lg:font-normal text-[12px] lg:text-sm text-custom-accentColor lg:text-[#A9A9A9] leading-6'>
                        Back
                      </h1>
                    </button>
                    <button
                      onClick={handleNext}
                      className='outline-none p-2 rounded-[10px] bg-custom-accentColor h-[40px] w-[108px] lg:bg-transparent lg:p-0 lg:w-[fit-content]'
                    >
                      <h1 className='font-mont font-semibold lg:underline text-[12px] lg:text-sm text-white lg:text-custom-accentColor leading-6'>
                        Next
                      </h1>
                    </button>
                  </div>
                </div>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h1 className='font-medium font-mont text-sm lg:text-base text-custom-primaryColor'>
                  Timings
                </h1>
              </StepLabel>
              <StepContent>
                <div>
                  <h1 className='font-mont text-[12px] lg:text-sm text-[#4A4A4A] leading-6'>
                    Please set the start and end time for the following
                    parameters!
                  </h1>

                  <div className='pt-3 flex flex-col gap-4'>
                    <div className='flex flex-col lg:flex-row items-center gap-x-6 '>
                      <div className='w-full lg:w-[30%]'>
                        <DateInput
                          label='Presale Start/End Time'
                          placeholder='Ex. 0.6'
                          className='w-full'
                          // value={startDate}
                          onChange={e=>{
                            let x = e.target.value;
                            let d = new Date(x);
                            setStartDate(x);
                            setStartDate2(d.getTime());
                          }}
                        />
                      </div>
                      <div className='w-full pt-3 lg:pt-0 lg:w-[30%]'>
                        <DateInput
                          label='Presale Start/End Time'
                          placeholder='Ex. 0.6'
                          className='w-full'
                          // value={endDate}
                          onChange={e=>{
                            let x = e.target.value;
                            let d = new Date(x);
                            setEndDate(x);
                            setEndDate2(d.getTime());
                          }}
                        />
                      </div>
                    </div>
                    <div className='flex items-center gap-x-6 '>
                      <div className='w-full lg:w-[30%]'>
                        <Input
                          label='Liquidity Lockup Time (Days)'
                          placeholder='Ex. 20'
                          className='w-full'
                          value={lockTime}
                          onChange={
                            e=>{
                              setLockTime(e.target.value);
                            }
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <p style={{fontSize:'11px',color:'red'}}>{timingError}</p>
                  <div className='flex justify-center lg:justify-start items-center gap-x-14 lg:gap-x-6 pt-4'>
                    <button onClick={handleBack} className='outline-none'>
                      <h1 className='font-mont font-semibold lg:font-normal text-[12px] lg:text-sm text-custom-accentColor lg:text-[#A9A9A9] leading-6'>
                        Back
                      </h1>
                    </button>
                    <button
                      onClick={handleTimingNext}
                      className='outline-none p-2 rounded-[10px] bg-custom-accentColor h-[40px] w-[108px] lg:bg-transparent lg:p-0 lg:w-[fit-content]'
                    >
                      <h1 className='font-mont font-semibold lg:underline text-[12px] lg:text-sm text-white lg:text-custom-accentColor leading-6'>
                        Next
                      </h1>
                    </button>
                  </div>
                </div>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h1 className='font-medium font-mont text-sm lg:text-base text-custom-primaryColor'>
                  Finalize
                </h1>
              </StepLabel>
              <StepContent>
                <div>
                  <h1 className='font-mont text-[12px] lg:text-sm text-[#000000] leading-6'>
                    Review your details below then press submit to create your
                    presale on the DxSale <br /> deployer! Or press edit to go
                    back and edit information
                  </h1>
                  <h1 className='font-mont font-semibold text-[12px] lg:text-sm text-[#2F2F2F] pt-2 leading-6'>
                    Warning: Once submitted this information can never be
                    changed!
                  </h1>

                  <h1 className='pt-5 font-mont text-[12px] text-[#000000] leading-6'>
                    Note: You will need atleast 0 tokens (0 for Presale, 0 for
                    PancakeSwap Listing and 0 for platform fees and an extra{' '}
                    <br />
                    12% to avoid issues due to fees or exploits) in your wallet
                    to start this sale.
                  </h1>
                  <ul className='pl-7'>
                    <li className='list-disc'>
                      <h1 className='font-mont text-[12px] py-2 text-[#474646] leading-6'>
                        You can adjust your total number of tokens required by
                        adjusting the presale rate, uniswap rate or your
                        hardcap!
                      </h1>
                    </li>
                    <li className='list-disc'>
                      <h1 className='font-mont text-[12px] text-[#474646] leading-6'>
                        Tokens that are not used will remain locked in the
                        presale contract (consider them burned)!
                      </h1>
                    </li>
                  </ul>

                  <form className='pt-7 flex flex-col gap-y-4'>
                    <h1 className='font-mont font-medium text-[12px] text-[#000000]'>
                        Name - SYMBOL
                    </h1>
                    <div>
                      <input
                        type='text'
                        readOnly
                        placeholder='Token Name'
                        value={`${data?.name} - ${data?.symbol}`}
                        className='w-full lg:w-[50%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
                      />
                    </div>
                    <h1 className='font-mont font-medium text-[12px] text-[#000000]'>
                        Rate per BNB
                    </h1>
                    <div>
                      <input
                        type='text'
                        readOnly
                        placeholder='Presale Rate (Per BNB)'
                        value={rate}
                        className='w-full lg:w-[50%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
                      />
                    </div>
                    <div>
                      {/* <input
                        type='text'
                        readOnly
                        placeholder='Exchange Rate (Per BNB)'
                        value={exchangeListingRate}
                        className='w-full lg:w-[50%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
                      /> */}
                    </div>
                    <div>
                      <h1 className='font-mont font-medium text-[12px] text-[#000000]'>
                        Soft/Hard Caps (BNB)
                      </h1>
                      <div className='flex items-center pt-1'>
                        <input
                          type='text'
                          readOnly
                          placeholder='Soft Cap:'
                          value={softCap}
                          className='w-1/2 lg:w-[25%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
                        />
                        <input
                          type='text'
                          readOnly
                          placeholder='Hard Cap:'
                          value={hardCap}
                          className='w-1/2 lg:w-[30%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
                        />
                      </div>
                    </div>
                    <div>
                      <h1 className='font-mont font-medium text-[12px] text-[#000000]'>
                        Contribution Limits (BNB)
                      </h1>
                      <div className='flex items-center pt-1'>
                        <input
                          type='text'
                          readOnly
                          placeholder='Min:'
                          value={minAmount}
                          className='w-1/2 lg:w-[25%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
                        />
                        <input
                          type='text'
                          readOnly
                          placeholder='Max:'
                          value={maxAmount}
                          className='w-1/2 lg:w-[30%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
                        />
                      </div>
                    </div>
                    <div>
                      <h1 className='font-mont font-medium text-[12px] text-[#000000]'>
                        Presale Timings
                      </h1>
                      <div className='flex items-center pt-1'>
                        <input
                          type='text'
                          readOnly
                          placeholder='Starts: 11 AUG 2021 at 00:41'
                          value={startDate}
                          className='w-1/2 lg:w-[25%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[10px] lg:text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
                        />
                        <input
                          type='text'
                          readOnly
                          placeholder='Ends: 11 AUG 2021 at 00:41'
                          value={endDate}
                          className='w-1/2 lg:w-[30%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[10px] lg:text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
                        />
                      </div>
                    </div>
                    <div>
                      <h1 className='font-mont font-medium text-[12px] text-[#000000]'>
                        PancakeSwap Liquidity / Listing Rate
                      </h1>
                      <div className='flex items-center pt-1'>
                        <input
                          type='text'
                          readOnly
                          placeholder='%'
                          value={exchangeLiquidity}
                          className='w-1/2 lg:w-[25%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
                        />
                        {/* <input
                          type='text'
                          readOnly
                          placeholder='Ends: 11 AUG 2021 at 00:41'
                          className='w-1/2 lg:w-[30%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
                        /> */}
                      </div>
                    </div>
                    <div>
                      <input
                        type='text'
                        readOnly
                        placeholder='PancakeSwap Rate (Per BNB)'
                        value={exchangeListingRate}
                        className='w-full lg:w-[50%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
                      />
                    </div>
                  </form>

                  <div className='flex items-center gap-x-6 pt-11'>
                    <button
                      onClick={handleBack}
                      className='outline-none w-[284px] h-[46px] py-3 px-3 border border-solid border-custom-accentColor rounded-[10px] flex justify-center items-center bg-white'
                    >
                      <h1 className='font-mont font-bold text-[12px] lg:text-sm text-custom-accentColor leading-6'>
                        Edit
                      </h1>
                    </button>
                    {!approved?
                    <button
                      onClick={handleApprove}
                      className='outline-none w-[284px] h-[46px] py-3 px-3 bg-custom-accentColor rounded-[10px] flex justify-center items-center'
                    >
                      <h1 className='font-mont font-bold text-[12px] lg:text-sm text-white leading-6'>
                        Approve
                      </h1>
                    </button>
                    :
                    <button
                      onClick={handleCreate}
                      className='outline-none w-[284px] h-[46px] py-3 px-3 bg-custom-accentColor rounded-[10px] flex justify-center items-center'
                    >
                      <h1 className='font-mont font-bold text-[12px] lg:text-sm text-white leading-6'>
                        Submit
                      </h1>
                    </button>}
                  </div>
                </div>
              </StepContent>
            </Step>
          </Stepper>
        </div>
      </div>

      {/* disclaimer modal */}
      {disclaimer && (
        <div
          onClick={() => setDisclaimer(false)}
          className='fixed top-0 left-0 w-full h-full z-50 bg-[#00000070] flex justify-center items-center'
        >
          <div className='w-[50%] mx-auto py-6 px-5 xl:py-12 xl:px-8 rounded-[10px] bg-[#F6F7FC] mt-5 lg:flex flex-col gap-y-4'>
            <p className='font-mont text-sm xl:text-base leading-6 text-[#000000]'>
              <img src='/assets/icons/warning-icon.svg' alt='' /> Disclaimer:
              This process is entirely decentralized, we cannot be held
              responsible for incorrect entry of information or be held liable
              for anything related to your use of our platform. Please ensure
              you enter all your details to the best accuracy possible and that
              you are in compliance with your local laws and regulations.
            </p>

            <h1 className='font-mont text-sm xl:text-base xl:leading-6 text-[#000000]'>
              This is a beta version! We cannot guarantee there will be no bugs.
              Use at your own risk!
            </h1>

            <h1 className='font-mont text-sm xl:text-base leading-6 text-[#C80707]'>
              For tokens with burns, rebase or other special transfers please
              ensure you have a way to whitelist multiple addresses or turn off
              the special transfer events (By setting fees to 0 for example for
              the duration of the presale)
            </h1>

            <h1 className='font-mont font-bold text-sm xl:text-base leading-6 text-custom-accentColor'>
              Current Fees: {totalFee} SSN + 2% of Tokens Sold + 2% of BNB Raised
            </h1>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default index;
