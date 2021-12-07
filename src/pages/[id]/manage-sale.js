import React, { Fragment } from 'react';
import {
  LaunchPadHeader,
  ToggleSwitch,
  ProgressBar,
} from '../../components/Launchpad/LaunchPad';
import Input from '../../components/Input/Input';

const index = () => {
  const [whitelistEnabled, setWhitelistEnabled] = React.useState(true);

  const handleWhitelist = event => {
    setWhitelistEnabled(event.target.checked);
  };

  return (
    <Fragment>
      <div className='py-7'>
        <LaunchPadHeader route='/start-sale' btnText='Start Sale' />

        <div className='pt-5 lg:pt-14'>
          <h1 className='font-mont font-semibold text-base lg:text-2xl text-custom-primaryColor'>
            Manage Presale
          </h1>
          <h1 className='font-mont font-medium text-[#282828] text-[12px] lg:text-sm lg:pt-1 '>
            Manage settings for your existing presale here
          </h1>
        </div>

        <div className='flex flex-col-reverse lg:flex-row items-start gap-x-6 mt-7 lg:mt-10'>
          {/* summary */}
          <div className='mt-7 lg:mt-0 drop-shadow w-full lg:w-3/5 py-8 px-5 rounded-[10px] bg-[#ffffff]'>
            <div className='pb-6 flex flex-col items-center text-center'>
              <h1 className='font-medium font-mont text-[12px] lg:text-sm text-[#282828] pb-2 leading-[17px]'>
                0/1500BNB Raised
              </h1>

              {/* progress */}
              <ProgressBar />
            </div>

            <div className='py-4 flex flex-col gap-y-4'>
              <div className='flex items-center justify-between '>
                <h1 className='font-medium font-mont text-[12px] lg:text-sm text-[#282828] leading-[17px]'>
                  Name:
                </h1>
                <h1 className='font-semibold font-mont text-[12px] lg:text-sm text-[#282828] leading-[17px] pl-2'>
                  HYPERSONIC
                </h1>
              </div>
              <div className='flex items-center justify-between '>
                <h1 className='font-medium font-mont text-[12px] lg:text-sm text-[#282828] leading-[17px]'>
                  Symbol:{' '}
                </h1>
                <h1 className='font-semibold font-mont text-[12px] lg:text-sm text-[#282828] leading-[17px] pl-2'>
                  HYPERSONIC
                </h1>
              </div>

              <div className='flex justify-between items-center'>
                <h1 className='font-medium font-mont  text-[12px] lg:text-sm text-[#000000] '>
                  Token Address:
                </h1>
                <h1 className='font-semibold font-mont text-[12px] lg:text-sm  text-custom-accentColor'>
                  <span className='lg:hidden'>0x76e4C</span>{' '}
                  <span className='hidden lg:inline'>
                    0x76e4CB2fcf7f931Fd750e93F443536Ee068d1cdE
                  </span>
                </h1>
              </div>

              <div className='flex justify-between items-center '>
                <h1 className='font-medium font-mont text-[12px] lg:text-sm text-[#000000]'>
                  Shareable Presale Link :
                </h1>
                <h1 className='font-semibold font-mont  text-[12px] lg:text-sm  text-custom-accentColor'>
                  <span className='lg:hidden'>0x76e4C</span>{' '}
                  <span className='hidden lg:inline'>
                    0x76e4CB2fcf7f931Fd750e93F443536Ee068d1cdE
                  </span>
                </h1>
              </div>

              <div className='lg:py-2 flex items-center justify-between '>
                <h1 className='font-medium font-mont text-[12px] lg:text-sm text-[#282828] leading-[17px]'>
                  Status:
                </h1>{' '}
                <h1 className='font-mont font-semibold text-[12px] lg:text-sm text-[#282828] leading-[17px]'>
                  Running
                </h1>
              </div>

              <div className='flex items-center justify-between pt-2'>
                <h1 className='font-semibold text-[12px] lg:text-sm font-mont text-[#000000]'>
                  Current token balance of presale address :{' '}
                </h1>
                <h1 className='font-semibold text-[12px] lg:text-sm font-mont text-[#000000]'>
                  0
                </h1>
              </div>

              <div className='w-[fit-content] mx-auto rounded-[5px] lg:rounded-sm py-2 px-5 lg:px-7 text-center bg-[#FFEDB3]'>
                <h1 className='font-mont font-medium text-[10px] text-[#FF9F00]'>
                  You need to deposite 2345678 Hypersonic to complete your
                  presale (Total <br className='hidden lg:block' /> tokens for
                  Presale + Pancake swap + Platfrom fees)
                </h1>
              </div>

              {/* deposit token btn */}
              <button
                onClick={() => {}}
                className='mt-3 outline-none w-[240px] lg:min-w-[178px] mx-auto h-[46px] py-3 px-3 bg-custom-accentColor rounded-[10px] flex justify-center items-center'
              >
                <h1 className='font-mont font-bold text-[12px] text-white leading-6'>
                  Deposit Tokens
                </h1>
              </button>
              <h1 className='w-2/3 mx-auto lg:w-full font-mont font-medium text-[8px] text-[#E32E2E] text-center pt-1'>
                Make sure you disable fees before depositing tokens or whitelist
                presale address
              </h1>

              <div className='text-center'>
                <div className='flex items-center justify-center gap-x-8 pt-3 pb-5 lg:pb-10 lg:pt-6'>
                  <button
                    onClick={() => {}}
                    className='mt-2 outline-none w-[118px] lg:min-w-[178px] h-[46px] py-3 px-3 bg-custom-accentColor lg:bg-[#A9A9A947] rounded-[10px] flex justify-center items-center'
                  >
                    <h1 className='font-mont font-bold text-[10px] lg:text-[12px] text-white leading-6'>
                      Call Finalize
                    </h1>
                  </button>
                  <button
                    onClick={() => {}}
                    className='mt-2 outline-none w-[118px] lg:min-w-[178px] h-[46px] py-3 px-3 bg-white rounded-[10px] flex justify-center items-center'
                  >
                    <h1 className='font-mont font-bold text-[10px] lg:text-[12px] text-[#FF5555] leading-6'>
                      Cancel Sale
                    </h1>
                  </button>
                </div>

                <h1 className='w-3/4 mx-auto text-center font-mont font-semibold text-[8px] lg:text-[12px] text-[#606060]'>
                  If you have trouble with finalizing please ensure the required
                  addresses are whitelisted or special transfer <br /> functions
                  are disabled!
                </h1>
                <h1 className='w-3/4 mx-auto pt-4 lg:py-3 text-center font-mont font-semibold text-[8px] lg:text-[12px] text-[#606060]'>
                  If you have If you still cannot finalize please cancel sale
                  and test your contract thoroughly
                </h1>
              </div>
            </div>
          </div>
          <div className='w-full flex-1 bg-[#FAFBFD] rounded-[10px] pt-7 px-5 lg:px-7 pb-10'>
            <h1 className='font-mont font-semibold text-sm lg:text-base text-custom-primaryColor'>
              NOTE:
            </h1>
            <p className='font-medium text-[12px] lg:text-sm text-[#E32E2E] leading-5 pb-4'>
              If your token contains special transfers such as burn, rebase or
              something else you must ensure the salex LP Router address and the
              presale Address are excluded from these features! Or you must set
              fees, burns, or whatever else to be 0 or disabled for the duration
              of the presale and until the finalize button is clicked!
            </p>
            <div className='pt-2 lg:pt-4'>
              <h1 className='font-medium pb-1 lg:pb-0 font-mont text-[12px] lg:text-sm text-[#000000]'>
                SaleX LP Router Address:{' '}
              </h1>
              <h1 className=' font-mont text-[10px] lg:text-sm font-semibold  text-custom-accentColor'>
                0x76e4CB2fcf7f931Fd750e93F443536Ee068d1cdE
              </h1>
            </div>
            <div className='pt-2 lg:pt-4'>
              <h1 className='font-medium pb-1 lg:pb-0 font-mont text-[12px] lg:text-sm text-[#000000]'>
                Presale Address:{' '}
              </h1>
              <h1 className=' font-mont text-[10px] lg:text-sm  font-semibold  text-custom-accentColor'>
                0x76e4CB2fcf7f931Fd750e93F443536Ee068d1cdE
              </h1>
            </div>
          </div>
        </div>

        {/* presale white list */}
        <div className='border-[0.5px] border-solid border-custom-primaryColor lg:border-none rounded-[20px] mt-6 lg:mt-0 pt-7 pb-10 px-7 lg:pt-10 lg:pb-0 lg:pl-0 lg:pr-14'>
          <h1 className='font-semibold text-base lg:text-2xl font-mont text-custom-primaryColor leading-[29px]'>
            Presale whitelist
          </h1>
          <h1 className='font-medium text-[12px] lg:text-sm font-mont text-[#282828] lg:pt-3 lg:leading-[17px]'>
            Whitelist Specific users that can contribute to the sale
          </h1>

          <div className='pt-4 lg:pt-8'>
            <div className='flex items-center gap-x-1'>
              <h1 className='font-semibold text-sm lg:text-base font-mont text-[#282828]'>
                Whitelist:{' '}
                <span className='pl-1 font-medium text-[#474646] text-sm'>
                  {whitelistEnabled ? 'Enabled' : 'Disabled'}
                </span>{' '}
              </h1>

              {/* switch */}
              <ToggleSwitch
                whitelistEnabled={whitelistEnabled}
                handleWhitelist={handleWhitelist}
              />
            </div>

            {whitelistEnabled && (
              <div className='flex justify-between lg:pt-4'>
                <div className='flex items-center gap-x-6 '>
                  <div>
                    <label
                      htmlFor='Start date'
                      className='font-mont font-medium text-[12px] lg:text-sm text-[#4A4A4A]'
                    >
                      Start date
                    </label>
                    <input
                      id='Start date'
                      type='text'
                      placeholder='12-09-2021'
                      className='w-full outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[46px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='end-date'
                      className='font-mont font-medium text-[12px] lg:text-sm text-[#4A4A4A]'
                    >
                      End date
                    </label>
                    <input
                      id='end-date'
                      type='text'
                      placeholder='12-09-2021'
                      className='w-full outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[46px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
                    />
                  </div>
                </div>
                <div className='hidden lg:block'>
                  <h1 className='font-semibold text-sm xl:text-base font-mont text-custom-accentColor underline leading-[20px]'>
                    Switch to remove
                  </h1>
                </div>
              </div>
            )}

            <div className='pt-8'>
              <div className='flex flex-col-reverse lg:flex-row items-center justify-between'>
                <h1 className='font-semibold text-[12px] lg:text-base font-mont text-[#282828] lg:leading-[20px]'>
                  Add Wallet Addresses from your whitelist (Comma seperated)
                </h1>
                <h1 className='font-semibold text-[12px] lg:text-sm xl:text-base font-mont text-custom-accentColor underline leading-[20px] self-end pb-1 lg:pb-0'>
                  Switch to remove
                </h1>
              </div>
              <div className='pt-3 pb-5'>
                <input
                  type='text'
                  placeholder='0x76e4CB2fcf7f931Fd750e93F443536Ee068d1cdE'
                  className='w-full outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[46px] mt-1 rounded-[10px] text-[12px] lg:text-sm text-[#000000] font-medium'
                />
              </div>
              <div className='flex items-center gap-x-6'>
                <button className='outline-none w-[159px] h-[46px] py-3 px-3 bg-custom-accentColor rounded-[10px] flex justify-center items-center'>
                  <h1 className='font-mont font-bold text-[10px] lg:text-sm text-white leading-6'>
                    Add
                  </h1>
                </button>
                <button className='outline-none w-[159px] h-[46px] py-3 px-3 border-2 border-solid border-custom-accentColor rounded-[10px] flex justify-center items-center bg-white'>
                  <h1 className='font-mont font-bold text-[10px] lg:text-sm text-custom-accentColor leading-6'>
                    Show Whitelist
                  </h1>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* additional presale details */}
        <div className='pt-10 lg:pt-16'>
          <h1 className='font-semibold text-base lg:text-2xl font-mont text-custom-primaryColor leading-[29px]'>
            Additional presale details
          </h1>
          <h1 className='font-medium text-[12px] lg:text-sm font-mont text-[#282828] pt-1 lg:pt-3 leading-[17px]'>
            Modify any additional information for your presale below:
          </h1>

          {/* inputs */}

          <div className='flex flex-col gap-4 lg:gap-6 pt-8'>
            <div>
              <Input
                label='Logo Url'
                labelColor='#474646'
                className='w-full lg:w-[60%]'
              />

              <h1 className='w-5/6 lg:w-full pt-[2px] lg:pt-0 font-mont text-[8px] lg:text-[12px] text-[#4A4A4A]'>
                Must end with supported with supported image extension jpg,
                jpeg, png or gif
              </h1>
            </div>
            <div>
              <Input
                label=' Website Link:'
                labelColor='#474646'
                className='w-full lg:w-[60%]'
              />
            </div>
            <div>
              <Input
                label=' Github Link:'
                labelColor='#474646'
                className='w-full lg:w-[60%]'
              />
            </div>
            <div>
              <Input
                label='Twitter Link:'
                labelColor='#474646'
                className='w-full lg:w-[60%]'
              />
            </div>
            <div>
              <Input
                label='Reddit Link:'
                labelColor='#474646'
                className='w-full lg:w-[60%]'
              />
            </div>
            <div>
              <Input
                label='Telegram Link:'
                labelColor='#474646'
                className='w-full lg:w-[60%]'
              />
            </div>
            <div>
              <Input
                label='Project Description:'
                labelColor='#474646'
                className='w-full lg:w-[60%]'
              />
            </div>
            <div>
              <Input
                label='Any update you want to provide to participants:'
                labelColor='#474646'
                className='w-full lg:w-[60%]'
              />
            </div>

            {/* update btn */}
            <button className='outline-none mt-7 lg:mt-0 w-full lg:w-[284px] h-[46px] py-3 px-3 bg-custom-accentColor  rounded-[10px] flex justify-center items-center '>
              <h1 className='font-mont font-bold text-[12px] text-white leading-4'>
                Update Data
              </h1>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default index;
