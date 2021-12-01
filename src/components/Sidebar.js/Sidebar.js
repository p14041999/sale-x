import React from 'react';
import { useRouter } from 'next/router';

// custom
import {
  activeNavLinkColor,
  activeNavBgColor,
} from '../../styles/variables.module.scss';

// icons
import {
  DashboardIcon,
  SaleAirdropIcon,
  SaleLaunchIcon,
  SaleLockIcon,
  SaleMintIcon,
  SaleStakeIcon,
} from '../SvgIcons/SvgIcons';

const Sidebar = () => {
  return (
    <div className='w-[20%] h-screen overflow-auto bg-custom-primaryColor'>
      <div className='w-full flex justify-center py-7'>
        <img src='/assets/icons/logo.svg' alt='SaleX Logo' />
      </div>

      {/* nav links */}
      <div className='flex flex-col gap-y-3 pt-6 w-full'>
        <NavLink
          href='/sale-dashboard'
          icon={<DashboardIcon />}
          title='SaleX Dashboard'
        />
        <NavLink href='/sale-mint' icon={<SaleMintIcon />} title='SaleX Mint' />
        <NavLink href='/' icon={<SaleLaunchIcon />} title='SaleX Launch' />
        <NavLink
          href='/sale-airdrop'
          icon={<SaleAirdropIcon />}
          title='SaleX airdrop'
        />
        <NavLink
          href='/sale-stake'
          icon={<SaleStakeIcon />}
          title='SaleX Stake'
        />
        <NavLink href='/sale-lock' icon={<SaleLockIcon />} title='SaleX Lock' />
      </div>
    </div>
  );
};

export default Sidebar;

// custom components
const NavLink = ({ icon, title, href }) => {
  const router = useRouter();

  console.log(router);

  return (
    <div
      onClick={() => {
        href && router.push(href);
      }}
      className='hover:cursor-pointer flex items-center gap-x-6 py-5 w-full pl-8'
      style={{
        backgroundColor: router.asPath === href && activeNavBgColor,
      }}
    >
      {/* <img src={icon} alt='' /> */}

      <div
        style={{
          color: router.asPath === href ? '#000248' : '#6D8FFF',
        }}
      >
        {icon}
      </div>
      <h1
        className='font-mont text-base font-semibold leading-5 text-custom-navLinkColor'
        style={{
          color: router.asPath === href && activeNavLinkColor,
        }}
      >
        {title}
      </h1>
    </div>
  );
};
