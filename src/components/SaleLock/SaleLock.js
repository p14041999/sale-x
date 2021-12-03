import React, { Fragment } from 'react';
import { primaryColor } from '../../styles/variables.module.scss';

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
