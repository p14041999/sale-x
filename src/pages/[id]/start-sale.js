import React, { useState, Fragment, useEffect, useRef } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import { Button } from '@mui/material';

//custom
import { primaryColor } from '../../styles/variables.module.scss';
import { LaunchPadHeader } from '../../components/Launchpad/LaunchPad';
import SelectDropdown from '../../components/SelectDropdown/SelectDropdown';

// utils
import { EXCHANGE_OPTIONS } from '../../utils/data';

const steps = [
  {
    label: 'Token Address',
    description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Presale Rate',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Soft/Hard Cap',
    description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
  },
  {
    label: 'Soft/Hard Cap',
    description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
  },
  {
    label: 'Contribution Limits',
    description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
  },
  {
    label: 'Select Exchange for Listing',
    description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
  },
  {
    label: 'Exchange Liquidity(Change to exchange selected above)',
    description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
  },
];

const index = () => {
  const [activeStep, setActiveStep] = React.useState(0);

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
        <div className='pt-14'>
          <div>
            <h1 className='font-bold font-mont text-[32px] leading-[39px] text-custom-primaryColor'>
              Start Sale
            </h1>
            <h1 className='font-mont text-base text-[#474646] pt-1'>
              Get started in just a few simple steps!
            </h1>
          </div>
          <div className='py-12 px-8 rounded-[10px] bg-[#F6F7FC] mt-5 flex flex-col gap-y-8'>
            <p className='font-mont text-base leading-6 text-[#000000]'>
              Disclaimer: This process is entirely decentralized, we cannot be
              held responsible for incorrect entry of information or be held
              liable for anything related to your use of our platform. Please
              ensure you enter all your details to the best accuracy possible
              and that you are in compliance with your local laws and
              regulations.
            </p>

            <h1 className='font-mont text-base leading-6 text-[#000000]'>
              This is a beta version! We cannot guarantee there will be no bugs.
              Use at your own risk!
            </h1>

            <h1 className='font-mont text-base leading-6 text-[#C80707]'>
              For tokens with burns, rebase or other special transfers please
              ensure you have a way to whitelist multiple addresses or turn off
              the special transfer events (By setting fees to 0 for example for
              the duration of the presale)
            </h1>

            <h1 className='font-mont font-bold text-base leading-6 text-custom-accentColor'>
              Current Fees: 1 BNB + 2% of Tokens Sold + 2% of BNB Raised
            </h1>
          </div>
        </div>

        {/* multi step dropdown */}
        <div className='pt-10'>
          <Stepper activeStep={activeStep} orientation='vertical'>
            <Step>
              <StepLabel>
                <h1 className='font-medium font-mont text-base text-custom-primaryColor'>
                  Token Address
                </h1>
              </StepLabel>
              <StepContent>
                <div>
                  <h1 className='font-mont text-sm text-[#4A4A4A] leading-6'>
                    Enter your token address
                  </h1>
                  <input
                    type='text'
                    className='w-[80%] outline-none pl-7 pr-5 bg-[#F6F7FC] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
                  />

                  <div className='pt-2 flex flex-col gap-y-2'>
                    <h1 className='font-mont text-sm text-[#000000] leading-6'>
                      Token Name:
                    </h1>
                    <h1 className='font-mont text-sm text-[#000000] leading-6'>
                      Token Symbol:
                    </h1>
                    <h1 className='font-mont text-sm text-[#000000] leading-6'>
                      Token Symbol:
                    </h1>
                  </div>

                  <div className='flex items-center gap-x-6 pt-4'>
                    <button onClick={handleBack} className='outline-none'>
                      <h1 className='font-mont text-sm text-[#A9A9A9] leading-6'>
                        Back
                      </h1>
                    </button>
                    <button onClick={handleNext} className='outline-none'>
                      <h1 className='font-mont font-semibold underline text-sm text-custom-accentColor leading-6'>
                        Next
                      </h1>
                    </button>
                  </div>
                </div>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h1 className='font-medium font-mont text-base text-custom-primaryColor'>
                  Presale Rate
                </h1>
              </StepLabel>
              <StepContent>
                <div>
                  <h1 className='font-mont text-sm text-[#4A4A4A] leading-6'>
                    Enter your presale price: (If I pay 1 BNB, how many tokens
                    do I get?)
                  </h1>
                  <input
                    type='text'
                    placeholder='Ex. 600'
                    className='w-[80%] outline-none pl-7 pr-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
                  />

                  <div className='flex items-center gap-x-6 pt-6'>
                    <button onClick={handleBack} className='outline-none'>
                      <h1 className='font-mont text-sm text-[#A9A9A9] leading-6'>
                        Back
                      </h1>
                    </button>
                    <button onClick={handleNext} className='outline-none'>
                      <h1 className='font-mont font-semibold underline text-sm text-custom-accentColor leading-6'>
                        Next
                      </h1>
                    </button>
                  </div>
                </div>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h1 className='font-medium font-mont text-base text-custom-primaryColor'>
                  Soft/Hard Cap
                </h1>
              </StepLabel>
              <StepContent>
                <div>
                  <h1 className='font-mont text-sm text-[#4A4A4A] leading-6'>
                    Enter your presale price: (If I pay 1 BNB, how many tokens
                    do I get?)
                  </h1>

                  <div className='flex items-center gap-x-6 pt-3'>
                    <div>
                      <label
                        htmlFor='soft-cap'
                        className='font-mont font-medium text-sm text-custom-primaryColor'
                      >
                        Soft Cap:
                      </label>
                      <input
                        id='soft-cap'
                        type='text'
                        placeholder='Ex. 600'
                        className='w-full outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='hard-cap'
                        className='font-mont font-medium text-sm text-custom-primaryColor'
                      >
                        Hard Cap:
                      </label>
                      <input
                        id='hard-cap'
                        type='text'
                        placeholder='Ex. 600'
                        className='w-full outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
                      />
                    </div>
                  </div>

                  <div className='flex items-center gap-x-6 pt-6'>
                    <button onClick={handleBack} className='outline-none'>
                      <h1 className='font-mont text-sm text-[#A9A9A9] leading-6'>
                        Back
                      </h1>
                    </button>
                    <button onClick={handleNext} className='outline-none'>
                      <h1 className='font-mont font-semibold underline text-sm text-custom-accentColor leading-6'>
                        Next
                      </h1>
                    </button>
                  </div>
                </div>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h1 className='font-medium font-mont text-base text-custom-primaryColor'>
                  Contribution Limits
                </h1>
              </StepLabel>
              <StepContent>
                <div>
                  <h1 className='font-mont text-sm text-[#4A4A4A] leading-6'>
                    Enter the minimum and maximum amounts each wallet can
                    contribute: (min,max)
                  </h1>

                  <div className='flex items-center gap-x-6 pt-3'>
                    <div>
                      <label
                        htmlFor='soft-cap'
                        className='font-mont font-medium text-sm text-custom-primaryColor'
                      >
                        Minimum Contribution Limit:
                      </label>
                      <input
                        id='soft-cap'
                        type='text'
                        placeholder='Ex. 0.1'
                        className='w-full outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='hard-cap'
                        className='font-mont font-medium text-sm text-custom-primaryColor'
                      >
                        Maximum Contribution Limit:
                      </label>
                      <input
                        id='hard-cap'
                        type='text'
                        placeholder='Ex. 0.3'
                        className='w-full outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
                      />
                    </div>
                  </div>

                  <div className='flex items-center gap-x-6 pt-6'>
                    <button onClick={handleBack} className='outline-none'>
                      <h1 className='font-mont text-sm text-[#A9A9A9] leading-6'>
                        Back
                      </h1>
                    </button>
                    <button onClick={handleNext} className='outline-none'>
                      <h1 className='font-mont font-semibold underline text-sm text-custom-accentColor leading-6'>
                        Next
                      </h1>
                    </button>
                  </div>
                </div>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h1 className='font-medium font-mont text-base text-custom-primaryColor'>
                  Select Exchange
                </h1>
              </StepLabel>
              <StepContent>
                <div>
                  <h1 className='font-mont text-sm text-[#4A4A4A] leading-6'>
                    Select exchange for token to be listed on
                  </h1>

                  <div className='w-[184px] pt-3'>
                    <SelectDropdown
                      placeholder='Pancakeswap'
                      options={EXCHANGE_OPTIONS}
                    />
                  </div>

                  <div className='flex items-center gap-x-6 pt-6'>
                    <button onClick={handleBack} className='outline-none'>
                      <h1 className='font-mont text-sm text-[#A9A9A9] leading-6'>
                        Back
                      </h1>
                    </button>
                    <button onClick={handleNext} className='outline-none'>
                      <h1 className='font-mont font-semibold underline text-sm text-custom-accentColor leading-6'>
                        Next
                      </h1>
                    </button>
                  </div>
                </div>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h1 className='font-medium font-mont text-base text-custom-primaryColor'>
                  Exchange Liquidity
                </h1>
              </StepLabel>
              <StepContent>
                <div>
                  <h1 className='font-mont text-sm text-[#4A4A4A] leading-6'>
                    Enter the percentage of raised funds that should be
                    allocated to Liquidity on Exchange (Min 51%, Max 100%, We
                    recommend {'>'} 70%)
                  </h1>

                  <div className='pt-3'>
                    <input
                      id='soft-cap'
                      type='text'
                      placeholder='Ex. 60'
                      className='w-[60%] outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
                    />
                  </div>

                  <div className='flex items-center gap-x-6 pt-6'>
                    <button onClick={handleBack} className='outline-none'>
                      <h1 className='font-mont text-sm text-[#A9A9A9] leading-6'>
                        Back
                      </h1>
                    </button>
                    <button onClick={handleNext} className='outline-none'>
                      <h1 className='font-mont font-semibold underline text-sm text-custom-accentColor leading-6'>
                        Next
                      </h1>
                    </button>
                  </div>
                </div>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h1 className='font-medium font-mont text-base text-custom-primaryColor'>
                  Exchange Listing Rate
                </h1>
              </StepLabel>
              <StepContent>
                <div>
                  <h1 className='font-mont text-sm text-[#4A4A4A] leading-6'>
                    Enter the PancakeSwap listing price: (If I buy 1 BNB worth
                    on PancakeSwap how many tokens do I get? Usually this amount
                    is lower than presale rate to allow for a higher listing
                    price on PancakeSwap)
                  </h1>

                  <div className='pt-3'>
                    <input
                      id='soft-cap'
                      type='text'
                      placeholder='Ex. 40'
                      className='w-[60%] outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
                    />
                  </div>

                  <div className='flex items-center gap-x-6 pt-6'>
                    <button onClick={handleBack} className='outline-none'>
                      <h1 className='font-mont text-sm text-[#A9A9A9] leading-6'>
                        Back
                      </h1>
                    </button>
                    <button onClick={handleNext} className='outline-none'>
                      <h1 className='font-mont font-semibold underline text-sm text-custom-accentColor leading-6'>
                        Next
                      </h1>
                    </button>
                  </div>
                </div>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h1 className='font-medium font-mont text-base text-custom-primaryColor'>
                  Audit link
                </h1>
              </StepLabel>
              <StepContent>
                <div>
                  <h1 className='font-mont text-sm text-[#4A4A4A] leading-6'>
                    Enter audit url
                  </h1>

                  <div className='pt-3'>
                    <input
                      id='soft-cap'
                      type='text'
                      placeholder=''
                      className='w-[60%] outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
                    />
                  </div>

                  <div className='flex items-center gap-x-6 pt-6'>
                    <button onClick={handleBack} className='outline-none'>
                      <h1 className='font-mont text-sm text-[#A9A9A9] leading-6'>
                        Back
                      </h1>
                    </button>
                    <button onClick={handleNext} className='outline-none'>
                      <h1 className='font-mont font-semibold underline text-sm text-custom-accentColor leading-6'>
                        Next
                      </h1>
                    </button>
                  </div>
                </div>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h1 className='font-medium font-mont text-base text-custom-primaryColor'>
                  Additional Information
                </h1>
              </StepLabel>
              <StepContent>
                <div>
                  <h1 className='font-mont text-sm text-[#4A4A4A] leading-6'>
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
                      <label
                        htmlFor='logo-link'
                        className='font-mont font-medium text-sm text-custom-primaryColor'
                      >
                        Logo Link: (URL must end with a supported image
                        extension png, jpg, jpeg or gif)
                      </label>
                      <input
                        id='logo-link'
                        type='text'
                        placeholder='Ex. 0.1'
                        className='w-[60%] block outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='website-link'
                        className='font-mont font-medium text-sm text-custom-primaryColor'
                      >
                        Website Link:
                      </label>
                      <input
                        id='website-link'
                        type='text'
                        placeholder='Ex. 0.1'
                        className='w-[60%] block outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='github-link'
                        className='font-mont font-medium text-sm text-custom-primaryColor'
                      >
                        Github Link:
                      </label>
                      <input
                        id='github-link'
                        type='text'
                        placeholder='Ex. 0.1'
                        className='w-[60%] block outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='twitter-link'
                        className='font-mont font-medium text-sm text-custom-primaryColor'
                      >
                        Twitter Link:
                      </label>
                      <input
                        id='twitter-link'
                        type='text'
                        placeholder='Ex. 0.1'
                        className='w-[60%] block outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='reddit-link'
                        className='font-mont font-medium text-sm text-custom-primaryColor'
                      >
                        Reddit Link:
                      </label>
                      <input
                        id='reddit-link'
                        type='text'
                        placeholder='Ex. 0.1'
                        className='w-[60%] block outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='telegram-link'
                        className='font-mont font-medium text-sm text-custom-primaryColor'
                      >
                        Telegram Link:
                      </label>
                      <input
                        id='telegram-link'
                        type='text'
                        placeholder='Ex. 0.1'
                        className='w-[60%] block outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='project-desc'
                        className='font-mont font-medium text-sm text-custom-primaryColor'
                      >
                        Project Description:
                      </label>
                      <input
                        id='project-desc'
                        type='text'
                        placeholder='Ex. 0.1'
                        className='w-[60%] block outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='update'
                        className='font-mont font-medium text-sm text-custom-primaryColor'
                      >
                        Any update you want to provide to participants:
                      </label>
                      <input
                        id='update'
                        type='text'
                        placeholder='Ex. 0.1'
                        className='w-[60%] block outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
                      />
                    </div>
                  </div>

                  <div className='flex items-center gap-x-6 pt-6'>
                    <button onClick={handleBack} className='outline-none'>
                      <h1 className='font-mont text-sm text-[#A9A9A9] leading-6'>
                        Back
                      </h1>
                    </button>
                    <button onClick={handleNext} className='outline-none'>
                      <h1 className='font-mont font-semibold underline text-sm text-custom-accentColor leading-6'>
                        Next
                      </h1>
                    </button>
                  </div>
                </div>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h1 className='font-medium font-mont text-base text-custom-primaryColor'>
                  Timings
                </h1>
              </StepLabel>
              <StepContent>
                <div>
                  <h1 className='font-mont text-sm text-[#4A4A4A] leading-6'>
                    Please set the start and end time for the following
                    parameters!
                  </h1>

                  <div className='pt-3 flex flex-col gap-4'>
                    <div className='flex items-center gap-x-6 '>
                      <div>
                        <label
                          htmlFor='Start Time'
                          className='font-mont font-medium text-sm text-custom-primaryColor'
                        >
                          Presale Start/End Time
                        </label>
                        <input
                          id='Start Time'
                          type='text'
                          placeholder='Start Time'
                          className='w-full outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
                        />
                      </div>
                      <div>
                        <label
                          htmlFor='end-time'
                          className='font-mont font-medium text-sm text-custom-primaryColor'
                        >
                          Presale Start/End Time
                        </label>
                        <input
                          id='end-time'
                          type='text'
                          placeholder='End Time'
                          className='w-full outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
                        />
                      </div>
                    </div>
                    <div className='flex items-center gap-x-6 '>
                      <div>
                        <label
                          htmlFor='Liquidity Lockup Time'
                          className='font-mont font-medium text-sm text-custom-primaryColor'
                        >
                          Liquidity Lockup Time
                        </label>
                        <input
                          id='Liquidity Lockup Time'
                          type='text'
                          placeholder='Liquidity Lockup Time'
                          className='w-full outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
                        />
                      </div>
                    </div>
                  </div>

                  <div className='flex items-center gap-x-6 pt-6'>
                    <button onClick={handleBack} className='outline-none'>
                      <h1 className='font-mont text-sm text-[#A9A9A9] leading-6'>
                        Back
                      </h1>
                    </button>
                    <button onClick={handleNext} className='outline-none'>
                      <h1 className='font-mont font-semibold underline text-sm text-custom-accentColor leading-6'>
                        Next
                      </h1>
                    </button>
                  </div>
                </div>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h1 className='font-medium font-mont text-base text-custom-primaryColor'>
                  Finalize
                </h1>
              </StepLabel>
              <StepContent>
                <div>
                  <h1 className='font-mont text-sm text-[#000000] leading-6'>
                    Review your details below then press submit to create your
                    presale on the DxSale <br /> deployer! Or press edit to go
                    back and edit information
                  </h1>
                  <h1 className='font-mont font-semibold text-sm text-[#2F2F2F] pt-2 leading-6'>
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
                        className='w-[70%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
                      />
                    </div>
                    <div>
                      <input
                        type='text'
                        readOnly
                        placeholder='Presale Rate (Per BNB)'
                        className='w-[70%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
                      />
                    </div>
                    <div>
                      <input
                        type='text'
                        readOnly
                        placeholder='Presale Rate (Per BNB)'
                        className='w-[70%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
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
                          className='w-[25%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
                        />
                        <input
                          type='text'
                          readOnly
                          placeholder='Hard Cap:'
                          className='w-[45%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
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
                          className='w-[25%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
                        />
                        <input
                          type='text'
                          readOnly
                          placeholder='Max:'
                          className='w-[45%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
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
                          className='w-[25%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
                        />
                        <input
                          type='text'
                          readOnly
                          placeholder='Ends: 11 AUG 2021 at 00:41'
                          className='w-[45%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
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
                          className='w-[25%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
                        />
                        <input
                          type='text'
                          readOnly
                          placeholder='Ends: 11 AUG 2021 at 00:41'
                          className='w-[45%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
                        />
                      </div>
                    </div>
                    <div>
                      <input
                        type='text'
                        readOnly
                        placeholder='PancakeSwap Rate (Per BNB)'
                        className='w-[70%] outline-none border-b-[0.5px] border-solid border-[#9F9F9F] text-[12px] font-mont leading-[15px] text-[#000000] placeholder-[#606060] py-2'
                      />
                    </div>
                  </form>

                  <div className='flex items-center gap-x-6 pt-11'>
                    <button
                      onClick={handleBack}
                      className='outline-none w-[284px] h-[64px] py-3 px-3 border border-solid border-custom-accentColor rounded-[10px] flex justify-center items-center bg-white'
                    >
                      <h1 className='font-mont font-bold text-sm text-custom-accentColor leading-6'>
                        Edit
                      </h1>
                    </button>
                    <button
                      onClick={handleNext}
                      className='outline-none w-[284px] h-[64px] py-3 px-3 bg-custom-accentColor rounded-[10px] flex justify-center items-center'
                    >
                      <h1 className='font-mont font-bold text-sm text-white leading-6'>
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
    </Fragment>
  );
};

export default index;
