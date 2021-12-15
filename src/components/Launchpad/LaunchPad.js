import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import Switch from '@mui/material/Switch';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

import { primaryColor, accentColor } from '../../styles/variables.module.scss';

export const LaunchPadHeader = props => {
  const router = useRouter();
  const { route, btnText, bannerSmallText } = props;

  return (
    <Fragment>
      <h1 className='lg:hidden font-bold text-left font-mont text-custom-primaryColor leading-[24px] '>
        SaleX Launchpad
      </h1>

      <button
        onClick={() => router.back()}
        className='outline-none hidden mt-3 lg:flex items-center gap-x-2'
      >
        <img src='/assets/icons/arrow-left.svg' alt='' />
        <h1 className='font-mont font-semibold text-[#2C2C2C] text-sm'>Back</h1>
      </button>

      <div className='flex justify-between items-center pt-3 lg:pt-4'>
        <div className='bg-[#F6F7FC] py-2 px-2 rounded-[10px] h-[56px] lg:h-[60px] w-full lg:w-[fit-content] flex justify-between items-center overflow-hidden'>
          <button
            onClick={() => router.push('/')}
            className={`h-full whitespace-nowrap flex-1 flex justify-center items-center bg-custom-primaryColor rounded-md py-2 px-4 lg:px-6 ${
              (router.asPath === '/' ||
                router.asPath === '/id' ||
                router.asPath === '/id/start-sale') &&
              'py-2 px-4 lg:px-7'
            }`}
            style={{
              backgroundColor:
                router.asPath === '/' ||
                router.asPath === '/id' ||
                router.asPath === '/id/start-sale'
                  ? primaryColor
                  : 'transparent',
            }}
          >
            <h1
              className='font-mont text-[12px] lg:text-sm'
              style={{
                color:
                  router.asPath === '/' ||
                  router.asPath === '/id' ||
                  router.asPath === '/id/start-sale'
                    ? 'white'
                    : primaryColor,
                fontWeight:
                  router.asPath === '/' ||
                  router.asPath === '/id' ||
                  router.asPath === '/id/start-sale'
                    ? 700
                    : 500,
              }}
            >
              Listed Tokens
            </h1>
          </button>
          <button
            onClick={() => router.push('/id/manage-sale')}
            className={`h-full whitespace-nowrap flex-1 flex justify-center items-center bg-custom-primaryColor rounded-md py-2 px-4 lg:px-6 ${
              router.asPath === '/id/manage-sale' && 'py-2 px-4 lg:px-7'
            }`}
            style={{
              backgroundColor:
                router.asPath === '/id/manage-sale'
                  ? primaryColor
                  : 'transparent',
            }}
          >
            <h1
              className='font-mont text-[12px] lg:text-sm'
              style={{
                color:
                  router.asPath === '/id/manage-sale' ? 'white' : primaryColor,
                fontWeight: router.asPath === '/id/manage-sale' ? 700 : 500,
              }}
            >
              Manage your Presale
            </h1>
          </button>
        </div>
        <button 
        onClick={() => router.push('/id/start-sale')}
        className='hidden lg:block rounded-[10px] h-[46px] w-[fit-content] px-4 border border-solid border-custom-accentColor'>
          <h1 className='font-mont font-semibold text-[12px] text-custom-accentColor'>
            Create new Presale
          </h1>
        </button>
      </div>
    </Fragment>
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
