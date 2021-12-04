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

const index = () => {
  const router = useRouter();
  const [reaction, setReaction] = useState('');
  const [activeTab, setActiveTab] = useState('comments');
  const [whitelistEnabled, setWhitelistEnabled] = React.useState(true);

  const handleWhitelist = event => {
    setWhitelistEnabled(event.target.checked);
  };

  // backend logic simulation
  const [pokemon, setPokemon] = useState('first');

  console.log(pokemon);

  return (
    <Fragment>
      <div className='py-7'>
        <LaunchPadHeader route='/id/start-sale' />

        <button className='lg:hidden mt-6 outline-none w-full h-[46px] border-[0.5px] border-solid border-[#000000] rounded-[10px] flex items-center justify-between px-4'>
          <h1 className='font-mont font-semibold text-[12px] text-[#000]'>
            SaleX Warning System
          </h1>
          <img
            src='/assets/icons/dropdown-icon.svg'
            alt=''
            className='transform -rotate-90'
          />
        </button>

        {/* section */}
        <div className='w-full lg:flex justify-between gap-x-5 pt-10 lg:pt-12'>
          <div className='w-full lg:w-[53%] lg:bg-[#FAFBFD] lg:rounded-[10px] lg:p-4'>
            <div className='lg:flex justify-between'>
              <div className='flex gap-x-4 lg:gap-x-2 xl:gap-x-4 items-center'>
                <img
                  src='/assets/images/pokemon-img.svg'
                  alt=''
                  className='w-12 xl:w-auto'
                />
                <div>
                  <h1 className='font-semibold font-mont text-sm lg:text-[12px] xl:text-lg text-custom-primaryColor leading-[22px]'>
                    Babypokemon
                  </h1>
                  <h1 className='font-normal font-mont text-[12px] lg:text-[11px] xl:text-base text-custom-primaryColor leading-[20px] xl:pt-1'>
                    Baby Pokemon
                  </h1>
                </div>
              </div>
              <div className='hidden lg:block'>
                <Socials />
              </div>
            </div>

            <p className='font-mont-font-normal text-[12px] lg:text-[10px] xl:text-[12px] text-[#474646] leading-6 pt-5 '>
              Baby Pokemon Monsters are beautifully animated digital
              collectibles with varying scarcities. Each one backed by a unique
              NFT and can be unpacked by using $Baby Pokemon Our vision is best
              described as three layers that are the building blocks for a
              modern and sustainable collectibles ecosystem. The base is the
              NFT-based decentralized ownership system supported by our Token
              for increased liquidity and trade ease. Built upon that is a layer
              that enriches the sole NFTs by detail-rich visuals and metadata.
              And the highest level is the application level, where the proven
              ownership together with visuals and metadata creates a large
              universe of utilization
            </p>

            <div className='py-5 lg:hidden'>
              <Socials />
            </div>
          </div>

          <div className='lg:hidden'>
            <PresaleInfo />
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
                <PresaleInfo />
              </div>

              {/*  */}
              <div className='w-full mt-7 border-none lg:border-[0.5px] lg:border-solid border-[#1A2B6B] rounded-[10px]'>
                <div className='border-b-[0.5px] border-solid border-[#D7D7D7] flex justify-center items-center text-center py-2 px-3'>
                  <h1 className='font-mont font-semibold text-[12px] xl:text-sm text-custom-primaryColor'>
                    Contract Info
                  </h1>
                </div>

                <div className='lg:px-7 py-6 flex flex-col gap-y-4'>
                  {CONTRACT_INFO.map((data, i) => (
                    <div className='flex justify-between items-center'>
                      <h1 className='font-mont font-medium text-[12px] xl:text-sm text-custom-primaryColor'>
                        {data.label}
                      </h1>
                      <h1 className='font-mont font-normal text-[12px] xl:text-sm text-[#606060]'>
                        {data.value}
                      </h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className='w-full lg:w-[45%] flex-1'>
            <div className='hidden lg:block'>
              <UsefulLinks />
            </div>
            <div className='w-full pt-9 pb-12 rounded-[20px] lg:rounded-[10px] bg-[#FAFBFD] mt-10'>
              <h1 className='font-semibold py-2 xl:py-5 px-7 font-mont text-base lg:text-sm xl:text-base text-[#000000] text-center'>
                What do you think?
              </h1>
              <h1 className='text-[12px] font-mont pt-3 text-center lg:hidden'>
                17 Responses
              </h1>

              {/* reactions */}
              <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-8 gap-y-9 justify-center py-12 lg:py-2 xl:py-5 px-10 lg:px-5 xl:px-14'>
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
                    <h1 className='font-mont text-[12px] text-[#000000]'>
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
                    className='outline-none flex-1 border-b-[0.5px] border-solid border-[#bcbcbc] py-2 xl:py-4 px-6 text-center'
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
                    className='outline-none flex-1 border-b-[0.5px] border-solid border-[#bcbcbc] py-2 xl:py-4 px-6 text-center'
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

                  <div className='pt-4  xl:pt-9'>
                    <h1 className='font-semibold text-sm text-[#000000] font-mont lg:text-center'>
                      Login with
                    </h1>
                    <div className='flex gap-x-5 lg:gap-x-14 items-center lg:justify-center pt-4'>
                      <button className='outline-none'>
                        <a href='https://'>
                          <img
                            src='/assets/icons/twitter.svg'
                            alt=''
                            className='w-6 lg:w-auto'
                          />
                        </a>
                      </button>
                      <button className='outline-none'>
                        <a href='https://'>
                          <img
                            src='/assets/icons/telegram.svg'
                            alt=''
                            className='w-6 lg:w-auto'
                          />
                        </a>
                      </button>
                      <button className='outline-none'>
                        <a href='https://'>
                          <img
                            src='/assets/icons/reddit.svg'
                            alt=''
                            className='w-6 lg:w-auto'
                          />
                        </a>
                      </button>
                      <button className='outline-none'>
                        <a href='https://'>
                          <img
                            src='/assets/icons/instagram.svg'
                            alt=''
                            className='w-6 lg:w-auto'
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

export const Socials = () => {
  return (
    <div className='flex gap-x-5 lg:gap-x-3 xl:gap-x-6 items-center'>
      <button className='outline-none'>
        <a href='https://'>
          <img
            src='/assets/icons/twitter.svg'
            alt=''
            className='w-6 lg:w-5 xl:w-auto'
          />
        </a>
      </button>
      <button className='outline-none'>
        <a href='https://'>
          <img
            src='/assets/icons/telegram.svg'
            alt=''
            className='w-6 lg:w-5 xl:w-auto'
          />
        </a>
      </button>
      <button className='outline-none'>
        <a href='https://'>
          <img
            src='/assets/icons/reddit.svg'
            alt=''
            className='w-6 lg:w-5 xl:w-auto'
          />
        </a>
      </button>
      <button className='outline-none'>
        <a href='https://'>
          <img
            src='/assets/icons/instagram.svg'
            alt=''
            className='w-6 lg:w-5 xl:w-auto'
          />
        </a>
      </button>
    </div>
  );
};

export const PresaleInfo = () => {
  return (
    <div className='lg:flex flex-col justify-center items-center text-center mt-7 lg:mt-0 py-7 lg:py-5 lg:rounded-[10px] border-t-[0.5px] lg:border-[0.5px] border-solid border-[#606060]'>
      <div className='lg:px-4 xl:px-8'>
        <h1 className='font-mont font-medium lg:font-normal text-[12px] xl:text-sm text-[#000000] leading-[20px]'>
          Presale Address won't be displayed until tokens are deposited! Sending
          Money To a Sale without Deposited Tokens is very risky!
        </h1>
        <h1 className='hidden lg:block font-medium font-mont text-[#000] py-4 text-[12px] xl:text-sm'>
          Audit Link:
          <a
            href='https://'
            className='font-semibold text-custom-accentColor pl-5'
          >
            Hypersonic.finance
          </a>
        </h1>
        <h1 className='mt-3 font-medium font-mont text-[#000] text-sm lg:text-[12px] xl:text-sm'>
          <span className='inline-block lg:inline'>Token Address:</span>
          <a
            href='https://'
            className='font-semibold text-custom-accentColor lg:pl-5 text-[12px]'
          >
            0x76e4CB2fcf7f931Fd750e93F443536Ee068d1cdE
          </a>
        </h1>
      </div>
      <div className='bg-[#FFDDDD] py-2 xl:py-[10px] px-8 xl:px-11 mt-3 rounded-[5px]'>
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
      {props.pokemon === 'second' && (
        <div className='hidden lg:block'>
          <SaleTime />
        </div>
      )}
      <div className='border-solid border-[#1A2B6B] border-[0.5px] rounded-[10px] pb-4 xl:py-6'>
        <div className='flex flex-col justify-center py-4 px-4 border-b-[0.5px] border-solid border-[#A9A9A9]'>
          {props.pokemon === 'first' && (
            <div>
              <h1 className='font-medium font-mont text-center text-sm lg:text-[12px] xl:text-lg text-[#474646] leading-[22px]'>
                Sale Starts in:
              </h1>
              <h1 className='xl:pt-2 text-center font-bold font-mont text-2xl xl:text-5xl text-custom-accentColor xl:leading-[59px]'>
                04:06:02:21
              </h1>
            </div>
          )}

          {props.pokemon === 'second' && (
            <div className='lg:flex items-start gap-x-5'>
              <div className='lg:hidden'>
                <SaleTime />
              </div>
              <div className='w-full lg:w-1/2'>
                <div className='rounded-[10px] bg-[#F6F7FC] px-6 overflow-hidden h-[48px] lg:h-[56px] xl:h-[64px] flex lg:justify-center items-center'>
                  <h1 className='font-mont text-[12px] lg:text-[10px] xl:text-[12px] xl:text-sm text-[#474646]'>
                    1BNB=1000BABYPOKEMON
                  </h1>
                </div>
                <h1 className='hidden lg:block pt-2 font-mont font-medium text-[10px] xl:text-[12px] text-[#474646]'>
                  You will get 0HSN
                </h1>
              </div>
              <div className='flex-1 mt-5 lg:mt-0'>
                <button className='w-full h-[48px] lg:h-[56px] xl:h-[64px] bg-custom-accentColor rounded-[10px] flex justify-center items-center'>
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
        <div className='lg:flex justify-between gap-x-8 pt-7 px-6'>
          {[
            {
              title: 'Your Contributed amount',
              value: '0000.00',
              pokemon: 'second',
            },
            {
              title: 'Your reserved token',
              value: '0000BABYPOKEMON',
              pokemon: 'third',
            },
          ].map((data, i) => (
            <div
              key={i}
              onClick={() => props.setPokemon('second')}
              className={`w-full rounded-[10px] mb-7 lg:mb-0 bg-[#DEE6FF] p-[14px] `}
            >
              <h1 className='font-semibold font-mont text-sm lg:text-[10px] xl:text-[12px] text-custom-primaryColor'>
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
      </div>
    </div>
  );
};

export const SaleTime = props => {
  return (
    <div className='bg-transparent lg:bg-[#FAFBFD] rounded-[10px] py-4 px-3 xl:px-6 flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-7 mb-3 lg:mb-6'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-medium font-mont text-center text-sm lg:text-[12px] xl:text-base text-[#474646] '>
          Sale Starts in:
        </h1>
        <h1 className='text-center font-bold font-mont text-2xl lg:text-lg xl:text-2xl text-custom-accentColor '>
          04:06:02:21
        </h1>
      </div>
      <div>
        <h1 className='font-mont text-center pb-1 xl:pb-3 text-base lg:text-[12px] xl:text-base text-[#000000] leading-[22px]'>
          80.065 / 1000 BNB Raised
        </h1>
        <div className='h-[5px] rounded-[31px] bg-[#DEDEDE] w-[220px] overflow-hidden'>
          <div className='h-full w-[50%] bg-[#13D274]'></div>
        </div>
      </div>
    </div>
  );
};

export const UsefulLinks = props => {
  return (
    <div className='w-full py-4 px-6 lg:py-7 lg:px-7 rounded-[10px] bg-[#FAFBFD]'>
      <h1 className='font-semibold lg:font-bold font-mont text-sm text-[#000000] text-center'>
        Useful Links
      </h1>

      <div className='pt-5 w-full flex flex-col gap-y-4'>
        <div className='w-full overflow-x-hidden flex flex-col lg:flex-row justify-between gap-x-6'>
          <h1 className='font-mont font-semibold text-[12px] text-[#000000]'>
            Poocoin 📈
          </h1>
          <a
            href='https://poocoin.app/tokens/0xA5f05B225bA05deDd9C53ACC978A022f8AA92988'
            className='font-mont font-medium pt-1 text-[12px] lg:text-[10px] text-custom-accentColor'
          >
            https://poocoin.app/tokens/0xA5f05B225bA05deDd9C53ACC978A022f8AA92988
          </a>
        </div>
        <div className='w-full flex flex-col lg:flex-row justify-between gap-x-6'>
          <h1 className='font-mont font-semibold text-[12px] text-[#000000]'>
            Dextools Charts 📈
          </h1>
          <a
            href='https://dextools.io/app/pancakeswap/pair-explorer/0x4a87F9578eB326DBF04d2'
            className='font-mont pt-1 font-medium text-[12px] lg:text-[10px] text-custom-accentColor'
          >
            https://dextools.io/app/pancakeswap/pair-explorer/0x4a87F9578eB326DBF04d2
            09560F304aC43EEDB
          </a>
        </div>
      </div>
    </div>
  );
};
