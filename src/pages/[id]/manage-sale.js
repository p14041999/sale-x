import React, { Fragment } from 'react';
import {
  LaunchPadHeader,
  ToggleSwitch,
  ProgressBar,
} from '../../components/Launchpad/LaunchPad';

const index = () => {
  const [whitelistEnabled, setWhitelistEnabled] = React.useState(true);

  const handleWhitelist = event => {
    setWhitelistEnabled(event.target.checked);
  };
  return (
    <Fragment>
      <div className='py-7'>
        <LaunchPadHeader route='/start-sale' btnText='Start Sale' />

        <div className='pt-14'>
          <h1 className='font-mont font-semibold text-2xl text-custom-primaryColor leading-[29px]'>
            Manage Presale
          </h1>
          <h1 className='font-mont font-medium text-[#282828] text-sm pt-1 leading-[17px]'>
            Manage settings for your existing presale here
          </h1>

          <div className='pt-14'>
            <h1 className='font-semibold font-mont text-base text-[#157E4A] leading-[20px]'>
              Congratulation your presale has been created successfully
            </h1>
            <p className='font-medium text-sm text-[#E32E2E] leading-6 py-3 pr-72'>
              If your token contains special transfers such as burn, rebase or
              something else you must ensure the salex LP Router address and the
              presale Address are excluded from these features! Or you must set
              fees, burns, or whatever else to be 0 or disabled for the duration
              of the presale and until the finalize button is clicked!
            </p>
            <h1 className='font-medium font-mont text-sm text-[#000000]'>
              SaleX LP Router Address:{' '}
              <span className='font-semibold pl-7 text-custom-accentColor'>
                0x76e4CB2fcf7f931Fd750e93F443536Ee068d1cdE
              </span>
            </h1>
            <h1 className='font-medium font-mont text-sm text-[#000000] pt-2'>
              Presale Address:{' '}
              <span className='font-semibold pl-7 text-custom-accentColor'>
                0x76e4CB2fcf7f931Fd750e93F443536Ee068d1cdE
              </span>
            </h1>
          </div>
        </div>

        {/* summary */}
        <div className='py-12 px-12 rounded-[10px] bg-[#FAFBFD] border-[0.5px] border-solid border-custom-accentColor flex flex-col items-center mt-10'>
          <h1 className='font-semibold font-mont text-base text-[#282828] leading-5'>
            Here is a summary of your presale (More details on the presale page)
          </h1>

          <div className='py-6 text-center'>
            <h1 className='font-medium font-mont text-sm text-[#282828] pb-2 leading-[17px]'>
              0/1500BNB Raised
            </h1>

            {/* progress */}
            <ProgressBar />
            {/* <div className='rounded-[10px] w-[284px] h-[17px] bg-[#DCCFF854]'></div> */}
          </div>

          <div className='py-4 flex flex-col gap-y-2 text-center'>
            <h1 className='font-medium font-mont text-sm text-[#282828] leading-[17px]'>
              Name: <span className='font-semibold pl-2'>HYPERSONIC</span>
            </h1>
            <h1 className='font-medium font-mont text-sm pb-2 text-[#282828] leading-[17px]'>
              Symbol: <span className='font-semibold pl-2'>HYPERSONIC</span>
            </h1>

            <h1 className='font-medium font-mont text-sm text-[#000000]'>
              Token Address:
              <span className='font-semibold pl-7 text-custom-accentColor'>
                0x76e4CB2fcf7f931Fd750e93F443536Ee068d1cdE
              </span>
            </h1>

            <h1 className='font-medium font-mont text-sm text-[#000000] pt-2'>
              Shareable Presale Link :
              <span className='font-semibold pl-7 text-custom-accentColor'>
                0x76e4CB2fcf7f931Fd750e93F443536Ee068d1cdE
              </span>
            </h1>

            <h1 className='py-2 font-medium font-mont text-sm text-[#282828] leading-[17px]'>
              Status: <span className='font-semibold pl-2'>Running</span>
            </h1>

            <div className='w-[fit-content] mx-auto rounded-sm py-2 px-7 text-center bg-[#FFEDB3]'>
              <h1 className='font-mont font-medium text-[10px] text-[#FF9F00]'>
                You need to deposite 2345678 Hypersonic to complete your presale
                (Total <br /> tokens for Presale + Pancake swap + Platfrom fees)
              </h1>
            </div>

            {/* deposit token btn */}
            <button
              onClick={() => {}}
              className='mt-3 outline-none w-[284px] mx-auto h-[64px] py-3 px-3 bg-custom-accentColor rounded-[10px] flex justify-center items-center'
            >
              <h1 className='font-mont font-bold text-sm text-white leading-6'>
                Deposit Tokens
              </h1>
            </button>
            <h1 className='font-mont font-medium text-[8px] text-[#E32E2E] pt-1'>
              Make sure you disable fees before depositing tokens or whitelist
              presale address
            </h1>

            <div className='text-center'>
              <h1 className='font-semibold text-base font-mont text-[#000000] pt-2'>
                Current token balance of presale address : <span>0</span>
              </h1>

              <div className='flex items-center justify-center gap-x-8 pt-6 pb-4'>
                <button
                  onClick={() => {}}
                  className='mt-2 outline-none w-[284px] h-[64px] py-3 px-3 bg-[#A9A9A947] rounded-[10px] flex justify-center items-center'
                >
                  <h1 className='font-mont font-bold text-sm text-white leading-6'>
                    Call Finalize
                  </h1>
                </button>
                <button
                  onClick={() => {}}
                  className='mt-2 outline-none w-[284px] h-[64px] py-3 px-3 bg-white rounded-[10px] flex justify-center items-center'
                >
                  <h1 className='font-mont font-bold text-sm text-[#FF5555] leading-6'>
                    Cancel Sale
                  </h1>
                </button>
              </div>

              <h1 className='text-center font-mont font-semibold text-[12px] text-[#606060]'>
                If you have trouble with finalizing please ensure the required
                addresses are whitelisted or special transfer <br /> functions
                are disabled!
              </h1>
              <h1 className='py-3 text-center font-mont font-semibold text-[12px] text-[#606060]'>
                If you have If you still cannot finalize please cancel sale and
                test your contract thoroughly
              </h1>
            </div>
          </div>
        </div>

        {/* presale white list */}
        <div className='pt-10 pr-14'>
          <h1 className='font-semibold text-2xl font-mont text-custom-primaryColor leading-[29px]'>
            Presale whitelist
          </h1>
          <h1 className='font-medium text-sm font-mont text-[#282828] pt-3 leading-[17px]'>
            Whitelist Specific users that can contribute to the sale
          </h1>

          <div className='pt-8'>
            <div className='flex items-center gap-x-1'>
              <h1 className='font-semibold text-base font-mont text-[#282828]'>
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
              <div className='flex justify-between pt-4'>
                <div className='flex items-center gap-x-6 '>
                  <div>
                    <label
                      htmlFor='Start date'
                      className='font-mont font-medium text-sm text-[#4A4A4A]'
                    >
                      Start date
                    </label>
                    <input
                      id='Start date'
                      type='text'
                      placeholder='12-09-2021'
                      className='w-full outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='end-date'
                      className='font-mont font-medium text-sm text-[#4A4A4A]'
                    >
                      End date
                    </label>
                    <input
                      id='end-date'
                      type='text'
                      placeholder='12-09-2021'
                      className='w-full outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
                    />
                  </div>
                </div>
                <div>
                  <h1 className='font-semibold text-base font-mont text-custom-accentColor underline leading-[20px]'>
                    Switch to remove
                  </h1>
                </div>
              </div>
            )}

            <div className='pt-11'>
              <div className='flex items-center justify-between'>
                <h1 className='font-semibold text-base font-mont text-[#282828] leading-[20px]'>
                  Add Wallet Addresses from your whitelist (Comma seperated)
                </h1>
                <h1 className='font-semibold text-base font-mont text-custom-accentColor underline leading-[20px]'>
                  Switch to remove
                </h1>
              </div>
              <div className='pt-3 pb-5'>
                <input
                  type='text'
                  placeholder='0x76e4CB2fcf7f931Fd750e93F443536Ee068d1cdE'
                  className='w-full outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
                />
              </div>
              <div className='flex items-center gap-x-6'>
                <button className='outline-none w-[159px] h-[46px] py-3 px-3 bg-custom-accentColor rounded-[10px] flex justify-center items-center'>
                  <h1 className='font-mont font-bold text-sm text-white leading-6'>
                    Add
                  </h1>
                </button>
                <button className='outline-none w-[159px] h-[46px] py-3 px-3 border-2 border-solid border-custom-accentColor rounded-[10px] flex justify-center items-center bg-white'>
                  <h1 className='font-mont font-bold text-sm text-custom-accentColor leading-6'>
                    Show Whitelist
                  </h1>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* additional presale details */}
        <div className='pt-16'>
          <h1 className='font-semibold text-2xl font-mont text-custom-primaryColor leading-[29px]'>
            Additional presale details
          </h1>
          <h1 className='font-medium text-sm font-mont text-[#282828] pt-3 leading-[17px]'>
            Modify any additional information for your presale below:
          </h1>

          {/* inputs */}

          <div className='flex flex-col gap-8 pt-8'>
            <div>
              <label
                htmlFor='logo-link'
                className='font-mont font-medium text-base text-[#474646]'
              >
                Logo Url
              </label>
              <input
                id='logo-link'
                type='text'
                placeholder=''
                className='w-[60%] block outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
              />
              <h1 className='font-mont text-[12px] text-[#4A4A4A]'>
                Must end with supported with supported image extension jpg,
                jpeg, png or gif
              </h1>
            </div>
            <div>
              <label
                htmlFor='website-link'
                className='font-mont font-medium text-base text-[#474646]'
              >
                Website Link:
              </label>
              <input
                id='website-link'
                type='text'
                placeholder=''
                className='w-[60%] block outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
              />
            </div>
            <div>
              <label
                htmlFor='github-link'
                className='font-mont font-medium text-base text-[#474646]'
              >
                Github Link:
              </label>
              <input
                id='github-link'
                type='text'
                placeholder=''
                className='w-[60%] block outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
              />
            </div>
            <div>
              <label
                htmlFor='twitter-link'
                className='font-mont font-medium text-base text-[#474646]'
              >
                Twitter Link:
              </label>
              <input
                id='twitter-link'
                type='text'
                placeholder=''
                className='w-[60%] block outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
              />
            </div>
            <div>
              <label
                htmlFor='reddit-link'
                className='font-mont font-medium text-base text-[#474646]'
              >
                Reddit Link:
              </label>
              <input
                id='reddit-link'
                type='text'
                placeholder=''
                className='w-[60%] block outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
              />
            </div>
            <div>
              <label
                htmlFor='telegram-link'
                className='font-mont font-medium text-base text-[#474646]'
              >
                Telegram Link:
              </label>
              <input
                id='telegram-link'
                type='text'
                placeholder=''
                className='w-[60%] block outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
              />
            </div>
            <div>
              <label
                htmlFor='project-desc'
                className='font-mont font-medium text-base text-[#474646]'
              >
                Project Description:
              </label>
              <input
                id='project-desc'
                type='text'
                placeholder=''
                className='w-[60%] block outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
              />
            </div>
            <div>
              <label
                htmlFor='update'
                className='font-mont font-medium text-base text-[#474646]'
              >
                Any update you want to provide to participants:
              </label>
              <input
                id='update'
                type='text'
                placeholder=''
                className='w-[60%] block outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[64px] mt-1 rounded-[10px] text-sm text-[#000000] font-medium'
              />
            </div>

            {/* update btn */}
            <button className='outline-none w-[284px] h-[64px] py-3 px-3 bg-custom-accentColor  rounded-[10px] flex justify-center items-center '>
              <h1 className='font-mont font-bold text-sm text-white leading-4'>
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
