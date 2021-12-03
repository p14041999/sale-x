import React, { Fragment } from 'react';
import { primaryColor, accentColor } from '../../styles/variables.module.scss';

export const SaleLockTab = ({ activeTab, children, ...props }) => {
  return (
    <Fragment>
      <div className='border border-solid border-custom-primaryColor rounded-[15px] h-[64px] w-full flex justify-between overflow-hidden'>
        {children.map((step, i) => (
          <button
            key={i}
            onClick={() => props.handleActiveTab(step.props.title)}
            className='h-full flex-1 flex justify-center items-center bg-custom-primaryColor'
            style={{
              backgroundColor:
                activeTab === step.props.title ? primaryColor : 'white',
            }}
          >
            <h1
              className='font-mont text-lg font-bold '
              style={{
                color: activeTab === step.props.title ? 'white' : primaryColor,
              }}
            >
              {step.props.title}
            </h1>
          </button>
        ))}
      </div>
      {children.map(one => {
        if (one.props.title == activeTab) {
          return <React.Fragment key={one.props.title}>{one}</React.Fragment>;
        }
      })}
    </Fragment>
  );
};

export const LockedTokenCard = props => {
  const {
    locker,
    date,
    time,
    amount,
    token_percent,
    token_address,
    handleFirstView,
  } = props;
  return (
    <div
      onClick={handleFirstView}
      className='bg-[#F6F7FC0D] border border-solid border-custom-accentColor rounded-[20px] px-5 flex flex-col items-center text-center'
    >
      <div className='w-full border-b-[0.5px] border-solid border-[#A9A9A9] pt-6 pb-5'>
        <h1 className='font-mont font-semibold text-lg text-custom-primaryColor text-center'>
          Cake-LP Pancake Lps
        </h1>
      </div>
      <div className='py-6 border-b-[0.5px] border-solid border-[#A9A9A9] w-full'>
        <div>
          <h1 className='font-mont text-sm font-medium text-[#474646]'>
            Token Locker
          </h1>
          <h1 className='font-mont font-bold text-2xl text-custom-accentColor pt-1'>
            {locker}
          </h1>
        </div>
        <div className='flex items-center justify-center gap-x-2 py-6'>
          <img src='/assets/icons/calendar.svg' alt='' />
          <h1 className='font-mont font-medium text-base text-custom-primaryColor'>
            {date} at {time}
          </h1>
        </div>
        <div>
          <div className='flex items-center justify-center gap-x-2 text-center'>
            <img src='/assets/icons/lock.svg' alt='' />
            <h1 className='font-mont font-medium text-sm text-custom-primaryColor'>
              {amount}
            </h1>
          </div>
          <div className='flex items-center justify-center gap-x-2 text-center pt-1'>
            <h1 className='font-mont font-medium text-sm text-[#474646]'>
              Vesting Percent:
            </h1>
            <h1 className='font-mont font-medium text-sm text-[#474646]'>
              {token_percent}
            </h1>
          </div>
        </div>
      </div>
      <div className='py-6'>
        <h1 className='font-mont text-sm font-medium text-[#474646]'>
          Token Address:
        </h1>
        <h1 className='font-mont font-bold text-base text-custom-accentColor pt-1'>
          {token_address}
        </h1>
      </div>
    </div>
  );
};

export const LockOptionsModal = props => {
  const { handleToggle, handleLockOptions, activeLockOption } = props;
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-[#00000070] flex justify-center items-center'>
      <div className='px-10 py-5 w-[550px] bg-white rounded-[21px]'>
        <div className='w-full border-b-[0.5px] border-solid border-[#606060] py-3 flex items-center justify-center'>
          <h1 className='font-mont text-center font-semibold text-2xl text-custom-primaryColor mx-auto -mr-5'>
            Lock Option
          </h1>
          <button
            className='outline-none w-[fit-content] ml-auto'
            onClick={handleToggle}
          >
            <img src='/assets/icons/cancel.svg' alt='' />
          </button>
        </div>
        <div className='pt-10 pb-7 flex flex-col gap-y-5'>
          <div
            onClick={() => handleLockOptions('self')}
            className='hover:cursor-pointer border-[0.5px] border- w-[90%] mx-auto h-[64px] solid border-[#A9A9A9] rounded-[10px] px-7 flex items-center justify-between'
            style={{
              borderColor: activeLockOption === 'self' && accentColor,
              borderWidth: activeLockOption === 'self' && 2,
            }}
          >
            <h1
              className='font-mont font-medium text-base text-[#434242]'
              style={{
                color: activeLockOption === 'self' && accentColor,
              }}
            >
              Lock for self
            </h1>
            {activeLockOption === 'self' && (
              <img src='/assets/icons/check-circle.svg' alt='' />
            )}
          </div>
          <div
            onClick={() => handleLockOptions('new_owner')}
            className='hover:cursor-pointer border-[0.5px] border- w-[90%] mx-auto h-[64px] solid border-[#A9A9A9] rounded-[10px] px-7 flex items-center justify-between'
            style={{
              borderColor: activeLockOption === 'new_owner' && accentColor,
              borderWidth: activeLockOption === 'new_owner' && 2,
            }}
          >
            <h1
              className='font-mont font-medium text-base text-[#434242]'
              style={{
                color: activeLockOption === 'new_owner' && accentColor,
              }}
            >
              Lock for new owner
            </h1>
            {activeLockOption === 'new_owner' && (
              <img src='/assets/icons/check-circle.svg' alt='' />
            )}
          </div>

          <div className='w-[90%] mx-auto'>
            <label
              htmlFor='new_owner'
              className='font-mont font-medium text-base text-[#474646]'
            >
              Enter new owner address
            </label>
            <input
              type='text'
              className='outline-none flex-1 mt-1 h-[67px] pl-9 pr-7 bg-custom-activeNavBgColor rounded-[10px] text-[12px]nt-mont text-[#474646] w-full'
            />
          </div>

          <button className='outline-none mt-6 justify-center items-center bg-custom-accentColor hover:bg-opacity-90 mx-auto rounded-[10px] w-[284px] h-[64px]'>
            <h1 className='font-mont font-bold text-sm text-white'>
              Lock tokens
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
};
