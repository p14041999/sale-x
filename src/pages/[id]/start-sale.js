import React, { useState, Fragment, useEffect, useRef } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

//custom
import { primaryColor } from '../../styles/variables.module.scss';
import { LaunchPadHeader } from '../../components/Launchpad/LaunchPad';
import SelectDropdown from '../../components/SelectDropdown/SelectDropdown';
import Input from '../../components/Input/Input';

// utils
import { EXCHANGE_OPTIONS } from '../../Utils/data';

const index = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [disclaimer, setDisclaimer] = useState(false);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

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
              Current Fees: 1 BNB + 2% of Tokens Sold + 2% of BNB Raised
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
                    label='Enter your token address'
                    className='w-full lg:w-[50%]'
                  />

                  <div className='pt-2 flex flex-col gap-y-2'>
                    <h1 className='font-mont text-[12px] lg:text-sm text-[#000000] leading-6'>
                      Token Name:
                    </h1>
                    <h1 className='font-mont text-[12px] lg:text-sm text-[#000000] leading-6'>
                      Token Symbol:
                    </h1>
                    <h1 className='font-mont text-[12px] lg:text-sm text-[#000000] leading-6'>
                      Token Symbol:
                    </h1>
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
                  Presale Rate
                </h1>
              </StepLabel>
              <StepContent>
                <div>
                  <h1 className='font-mont text-[12px] lg:text-sm text-[#4A4A4A] leading-6'>
                    Enter your presale price: (If I pay 1 BNB, how many tokens
                    do I get?)
                  </h1>

                  <Input placeholder='Ex. 600' className='w-full lg:w-[50%]' />

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
                        className='w-full'
                      />
                    </div>
                    <div className='w-full lg:w-[30%]'>
                      <Input
                        label='Hard Cap:'
                        placeholder='Ex. 600'
                        className='w-full'
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
                        className='w-full'
                      />
                    </div>
                    <div className='w-full lg:w-[30%]'>
                      <Input
                        label=' Maximum Contribution Limit:'
                        placeholder='Ex. 0.3'
                        className='w-full'
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
                      placeholder='Ex. 0.6'
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
                    <Input placeholder='Ex. 40' className='w-full lg:w-[50%]' />
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
                  Audit link
                </h1>
              </StepLabel>
              <StepContent>
                <div>
                  <h1 className='font-mont text-[12px] lg:text-sm text-[#4A4A4A] leading-6'>
                    Enter audit url
                  </h1>

                  <div className='pt-3'>
                    <Input className='w-full lg:w-[50%]' />
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
                        placeholder='Ex. 0.6'
                        className='w-full lg:w-[50%]'
                      />
                    </div>
                    <div>
                      <Input
                        label='Website Link:'
                        placeholder='Ex. 0.6'
                        className='w-full lg:w-[50%]'
                      />
                    </div>
                    <div>
                      <Input
                        label='Github Link:'
                        placeholder='Ex. 0.6'
                        className='w-full lg:w-[50%]'
                      />
                    </div>
                    <div>
                      <Input
                        label='Twitter Link:'
                        placeholder='Ex. 0.6'
                        className='w-full lg:w-[50%]'
                      />
                    </div>
                    <div>
                      <Input
                        label='Reddit Link:'
                        placeholder='Ex. 0.6'
                        className='w-full lg:w-[50%]'
                      />
                    </div>
                    <div>
                      <Input
                        label='Telegram Link:'
                        placeholder='Ex. 0.6'
                        className='w-full lg:w-[50%]'
                      />
                    </div>
                    <div>
                      <Input
                        label='Project Description:'
                        placeholder='Ex. 0.6'
                        className='w-full lg:w-[50%]'
                      />
                    </div>
                    <div>
                      <Input
                        label='Any update you want to provide to participants:'
                        placeholder='Ex. 0.6'
                        className='w-full lg:w-[50%]'
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
                        <Input
                          label='Presale Start/End Time'
                          placeholder='Ex. 0.6'
                          className='w-full'
                        />
                      </div>
                      <div className='w-full pt-3 lg:pt-0 lg:w-[30%]'>
                        <Input
                          label='Presale Start/End Time'
                          placeholder='Ex. 0.6'
                          className='w-full'
                        />
                      </div>
                    </div>
                    <div className='flex items-center gap-x-6 '>
                      <div className='w-full lg:w-[30%]'>
                        <Input
                          label='Liquidity Lockup Time'
                          placeholder='Ex. 0.6'
                          className='w-full'
                        />
                      </div>
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
                    <div>
                      <input
                        type='text'
                        readOnly
                        placeholder='Token Name'
                        className='w-full lg:w-[50%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
                      />
                    </div>
                    <div>
                      <input
                        type='text'
                        readOnly
                        placeholder='Presale Rate (Per BNB)'
                        className='w-full lg:w-[50%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
                      />
                    </div>
                    <div>
                      <input
                        type='text'
                        readOnly
                        placeholder='Presale Rate (Per BNB)'
                        className='w-full lg:w-[50%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
                      />
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
                          className='w-1/2 lg:w-[25%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
                        />
                        <input
                          type='text'
                          readOnly
                          placeholder='Hard Cap:'
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
                          className='w-1/2 lg:w-[25%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
                        />
                        <input
                          type='text'
                          readOnly
                          placeholder='Max:'
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
                          className='w-1/2 lg:w-[25%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[10px] lg:text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
                        />
                        <input
                          type='text'
                          readOnly
                          placeholder='Ends: 11 AUG 2021 at 00:41'
                          className='w-1/2 lg:w-[30%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[10px] lg:text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
                        />
                      </div>
                    </div>
                    <div>
                      <h1 className='font-mont font-medium text-[12px] text-[#000000]'>
                        PancakeSwap Liquidity
                      </h1>
                      <div className='flex items-center pt-1'>
                        <input
                          type='text'
                          readOnly
                          placeholder='%'
                          className='w-1/2 lg:w-[25%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
                        />
                        <input
                          type='text'
                          readOnly
                          placeholder='Ends: 11 AUG 2021 at 00:41'
                          className='w-1/2 lg:w-[30%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
                        />
                      </div>
                    </div>
                    <div>
                      <input
                        type='text'
                        readOnly
                        placeholder='PancakeSwap Rate (Per BNB)'
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
                    <button
                      onClick={handleNext}
                      className='outline-none w-[284px] h-[46px] py-3 px-3 bg-custom-accentColor rounded-[10px] flex justify-center items-center'
                    >
                      <h1 className='font-mont font-bold text-[12px] lg:text-sm text-white leading-6'>
                        Submit
                      </h1>
                    </button>
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
              Current Fees: 1 BNB + 2% of Tokens Sold + 2% of BNB Raised
            </h1>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default index;
