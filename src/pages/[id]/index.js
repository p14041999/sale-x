import React, { useState, Fragment, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

//custom
import { primaryColor } from '../../styles/variables.module.scss';
import { LaunchPadHeader } from '../../components/Launchpad/LaunchPad';

// utils
import { CONTRACT_INFO, REACTIONS } from '../../utils/data';

const index = () => {
  const router = useRouter();
  const [reaction, setReaction] = useState('');
  const [activeTab, setActiveTab] = useState('comments');

  return (
    <Fragment>
      <div className='py-7'>
        <LaunchPadHeader route='/id/start-sale' />
        {/* section */}
        <div className='w-full flex items-start justify-between gap-x-5 pt-12'>
          <div className='w-[53%]'>
            <div className='flex items-center justify-between'>
              <div className='flex gap-x-4 items-center'>
                <img src='/assets/images/pokemon-img.svg' alt='' />
                <div>
                  <h1 className='font-semibold font-mont text-lg text-custom-primaryColor leading-[22px]'>
                    Babypokemon
                  </h1>
                  <h1 className='font-normal font-mont text-base text-custom-primaryColor leading-[20px] pt-1'>
                    Baby Pokemon
                  </h1>
                </div>
              </div>
              <div className='flex gap-x-6 items-center'>
                <button className='outline-none'>
                  <a href='https://'>
                    <img src='/assets/icons/twitter.svg' alt='' />
                  </a>
                </button>
                <button className='outline-none'>
                  <a href='https://'>
                    <img src='/assets/icons/telegram.svg' alt='' />
                  </a>
                </button>
                <button className='outline-none'>
                  <a href='https://'>
                    <img src='/assets/icons/reddit.svg' alt='' />
                  </a>
                </button>
                <button className='outline-none'>
                  <a href='https://'>
                    <img src='/assets/icons/instagram.svg' alt='' />
                  </a>
                </button>
              </div>
            </div>

            <p className='font-mont-font-normal text-[12px] text-[#474646] leading-6 pt-10 pb-10'>
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
          </div>
          <div className='flex-1 border-solid border-[#1A2B6B] border-[0.5px] rounded-[10px] py-6'>
            <div className='flex flex-col justify-center items-center py-4 px-6 border-b-[0.5px] border-solid border-[#A9A9A9]'>
              <h1 className='font-medium font-mont text-center text-lg text-[#474646] leading-[22px]'>
                Sale Starts in:
              </h1>
              <h1 className='pt-2 text-center font-bold font-mont text-5xl text-custom-accentColor leading-[59px]'>
                04:06:02:21
              </h1>
            </div>
            <div className='flex justify-between gap-x-8 items-center pt-7 px-6'>
              {[
                { title: 'Your Contributed amount', value: '0000.00' },
                { title: 'Your reserved token', value: '0000BABYPOKEMON' },
              ].map((data, i) => (
                <div
                  key={i}
                  className={`w-full rounded-[10px] bg-[#DEE6FF] p-[14px] `}
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
          </div>
        </div>

        {/*  */}
        <div className='flex gap-x-5'>
          <div className='w-[53%] py-5 border-t-[0.5px] border-solid border-[#606060]'>
            <div className='flex flex-col justify-center items-center text-center  '>
              <div className='px-8'>
                <h1 className='font-mont text-sm text-[#000000] leading-[20px]'>
                  Presale Address won't be displayed until tokens are deposited!
                  Sending Money To a Sale without Deposited Tokens is very
                  risky!
                </h1>
                <h1 className='font-medium font-mont text-[#000] py-4 text-sm'>
                  Audit Link:
                  <a
                    href='https://'
                    className='font-semibold text-custom-accentColor pl-5'
                  >
                    Hypersonic.finance
                  </a>
                </h1>
                <h1 className='font-medium font-mont text-[#000] text-sm'>
                  Token Address:
                  <a
                    href='https://'
                    className='font-semibold text-custom-accentColor pl-5'
                  >
                    0x76e4CB2fcf7f931Fd750e93F443536Ee068d1cdE
                  </a>
                </h1>
              </div>

              <div className='bg-[#FFDDDD] py-[10px] px-11 mt-3 rounded-[5px]'>
                <h1 className='font-mont font-medium text-[10px] text-[#C80707]'>
                  Do not send BNB to the token address!
                </h1>
              </div>

              {/* warning */}
              <div className='flex items-center gap-x-3 pt-3'>
                <img src='/assets/icons/warning-icon.svg' alt='' />
                <h1 className='font-mont font-semibold text-[12px] text-[#000000]'>
                  {' '}
                  This Token uses a Custom Contract
                </h1>
              </div>

              {/*  */}
              <div className='w-full mt-10 border-[0.5px] border-solid border-[#1A2B6B] rounded-[10px]'>
                <div className='border-b-[0.5px] border-solid border-[#D7D7D7] flex justify-center items-center text-center py-2 px-3'>
                  <h1 className='font-mont font-semibold text-[12px] text-custom-primaryColor'>
                    Contract Info
                  </h1>
                </div>

                <div className='px-7 py-6 flex flex-col gap-y-4'>
                  {CONTRACT_INFO.map((data, i) => (
                    <div className='flex justify-between items-center'>
                      <h1 className='font-mont font-medium text-sm text-custom-primaryColor'>
                        {data.label}
                      </h1>
                      <h1 className='font-mont font-normal text-sm text-[#606060]'>
                        {data.value}
                      </h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className='w-[45%] flex-1'>
            <div className='w-full py-7 px-7 rounded-[10px] bg-[#FAFBFD]'>
              <h1 className='font-bold font-mont text-sm text-[#000000] text-center'>
                Useful Links
              </h1>

              <div className='pt-5 w-full flex flex-col gap-y-4'>
                <div className='w-full overflow-x-hidden flex justify-between gap-x-6'>
                  <h1 className='font-mont font-semibold text-[12px] text-[#000000]'>
                    Poocoin 📈
                  </h1>
                  <h1 className='font-mont font-medium text-[10px] text-custom-accentColor'>
                    https://poocoin.app/tokens/0xA5f05B225bA05deDd9C53ACC978A022f8AA92988
                  </h1>
                </div>
                <div className='w-full flex justify-between gap-x-6'>
                  <h1 className='font-mont font-semibold text-[12px] text-[#000000]'>
                    Dextools Charts 📈
                  </h1>
                  <a
                    href='https://dextools.io/app/pancakeswap/pair-explorer/0x4a87F9578eB326DBF04d2'
                    className='font-mont font-medium text-[10px] text-custom-accentColor'
                  >
                    https://dextools.io/app/pancakeswap/pair-explorer/0x4a87F9578eB326DBF04d2
                    09560F304aC43EEDB
                  </a>
                </div>
              </div>
            </div>
            <div className='w-full py-7 rounded-[10px] bg-[#FAFBFD] mt-10'>
              <h1 className='font-semibold py-5 px-7 font-mont text-base text-[#000000] text-center'>
                What do you think?
              </h1>

              {/* reactions */}
              <div className='grid grid-cols-3 gap-x-12 gap-y-9 justify-center py-5 px-14'>
                {REACTIONS.map((data, i) => (
                  <button
                    key={i}
                    onClick={() => setReaction(data.reaction)}
                    className='p-2 w-full flex items-center justify-center gap-x-1 bg-white border-[0.5px] border-solid border-[#B2B3C8] rounded-[5px]'
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
                    className='outline-none flex-1 border-b-[0.5px] border-solid border-[#bcbcbc] py-4 px-6 text-center'
                    style={{
                      borderColor: activeTab === 'comments' && primaryColor,
                    }}
                  >
                    <h1
                      className='font-mont font-semibold text-base text-[#A9A9A9]'
                      style={{
                        color: activeTab === 'comments' && primaryColor,
                      }}
                    >
                      Comments
                    </h1>
                  </button>
                  <button
                    onClick={() => setActiveTab('community')}
                    className='outline-none flex-1 border-b-[0.5px] border-solid border-[#bcbcbc] py-4 px-6 text-center'
                    style={{
                      borderColor: activeTab === 'community' && primaryColor,
                    }}
                  >
                    <h1
                      className='font-mont font-semibold text-base text-[#A9A9A9]'
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
                    <h1 className='font-mont font-medium text-sm text-[#000000]'>
                      Sort by Best
                    </h1>
                    <img src='/assets/icons/dropdown-arrow.svg' alt='' />
                  </button>
                </div>

                {/* tab contents */}
                <div className='px-12 pt-6'>
                  <input
                    type='text'
                    placeholder='Start the discussion'
                    className='bg-white outline-custom-primaryColor rounded-[10px] px-7 py-3 placeholder-[#A9A9A9] text-custom-primaryColor font-mont text-[12px] w-full h-[46px]'
                  />

                  <div className='pt-9'>
                    <h1 className='font-semibold text-sm text-[#000000] font-mont text-center'>
                      Login with
                    </h1>
                    <div className='flex gap-x-14 items-center justify-center pt-4'>
                      <button className='outline-none'>
                        <a href='https://'>
                          <img src='/assets/icons/twitter.svg' alt='' />
                        </a>
                      </button>
                      <button className='outline-none'>
                        <a href='https://'>
                          <img src='/assets/icons/telegram.svg' alt='' />
                        </a>
                      </button>
                      <button className='outline-none'>
                        <a href='https://'>
                          <img src='/assets/icons/reddit.svg' alt='' />
                        </a>
                      </button>
                      <button className='outline-none'>
                        <a href='https://'>
                          <img src='/assets/icons/instagram.svg' alt='' />
                        </a>
                      </button>
                    </div>

                    {/* sign up to discuss btn */}
                    <button className='p-2 w-full h-[46px] flex justify-center items-center bg-custom-accentColor rounded-[10px] mt-5'>
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
