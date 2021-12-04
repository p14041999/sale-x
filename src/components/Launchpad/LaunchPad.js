import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import Switch from '@mui/material/Switch';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

export const LaunchPadHeader = props => {
  const router = useRouter();
  const { route, btnText, bannerSmallText } = props;

  return (
    <div className='w-full'>
      <button
        onClick={() => router.back()}
        className='outline-none hidden lg:flex items-center gap-x-2'
      >
        <img src='/assets/icons/arrow-left.svg' alt='' />
        <h1 className='font-mont font-semibold text-[#2C2C2C] text-sm'>Back</h1>
      </button>

      <div className='launchpad-banner rounded-[10px] py-5 px-9 mt-3 lg:mt-7 flex justify-center lg:justify-between items-center text-center lg:text-left'>
        <div>
          <h1 className='font-bold font-mont text-base xl:text-xl text-white leading-[29px]'>
            SaleX Launchpad
          </h1>
          <h1 className='font-medium font-mont text-[12px] xl:text-sm text-white xl:pt-1 leading-[20px]'>
            {bannerSmallText
              ? bannerSmallText
              : 'DeFi Launchpad With Instant Listing And Liquidity Locking'}
          </h1>
        </div>
        <button
          onClick={() => router.push(route)}
          className='hidden lg:block w-[216px] h-[46px] rounded-[10px] bg-white justify-center items-center'
        >
          <h1 className='font-bold font-mont text-[12px] xl:text-sm text-custom-accentColor'>
            {btnText ? btnText : 'Start Sale'}
          </h1>
        </button>
      </div>
    </div>
  );
};

export const ToggleSwitch = props => {
  const { handleWhitelist, whitelistEnabled } = props;
  const IOSSwitch = styled(props => (
    <Switch
      focusVisibleClassName='.Mui-focusVisible'
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,

    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor:
            theme.palette.mode === 'dark' ? '#375BD2' : '#375BD2',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#375BD2',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));
  return (
    <IOSSwitch
      checked={whitelistEnabled}
      onChange={handleWhitelist}
      sx={{ m: 1 }}
      defaultChecked
    />
  );
};

export const ProgressBar = props => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 17,
    width: 284,
    borderRadius: 10,

    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: '#DCCFF854',
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: '#13D274',
    },
    [theme.breakpoints.down('md')]: {
      height: 9,
    },
  }));
  return <BorderLinearProgress variant='determinate' value={10} />;
};
