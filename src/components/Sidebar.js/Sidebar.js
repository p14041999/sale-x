import React, { Fragment, useState } from 'react';
import Link from 'next/link';
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
  DropdownIcon,
} from '../SvgIcons/SvgIcons';

const Sidebar = () => {
  const router = useRouter();
  const [selected, setSelected] = useState(null);

  const toggleAccordion = index => {
    if (selected === index) {
      return setSelected(null);
    }

    setSelected(index);
  };

  return (
    <div className='sidebar hidden lg:block w-[20%] xl:w-[17%] h-screen pb-12 overflow-auto bg-custom-primaryColor'>
      <div className='w-full flex justify-center pt-7 pb-4 xl:py-7'>
        <img
          src='/assets/icons/logo.svg'
          alt='SaleX Logo'
          className='w-32 h-11 xl:w-auto xl:h-auto'
        />
      </div>

      {/* nav links */}
      <div className='flex flex-col gap-y-2 pt-6 w-full'>
        <NavLink
          href='/sale-dashboard'
          icon={<DashboardIcon />}
          title='SaleX Dashboard'
        />
        <NavLink href='/sale-mint' icon={<SaleMintIcon />} title='SaleX Mint' />
        <NavLink
          href='/'
          icon={<SaleLaunchIcon />}
          iconRight={<DropdownIcon />}
          title='SaleX Launch'
          onClick={() => {
            toggleAccordion('drop_launch');
            router.push('/');
          }}
        >
          <div
            className={`flex justify-center overflow-hidden transition-all duration-150 ${
              selected === 'drop_launch'
                ? 'h-auto ease-in max-h-screen'
                : 'max-h-0 ease-out'
            }`}
          >
            <div>
              <Link href='/'>
                <button className='py-2 block outline-none'>
                  <h1 className='font-mont font-medium text-[#B2B3C8] text-[12px]'>
                    Dashboard
                  </h1>
                </button>
              </Link>
              <Link href='/id/start-sale'>
                <button className='py-2 block outline-none'>
                  <h1 className='font-mont font-medium text-[#B2B3C8] text-[12px]'>
                    Start sale
                  </h1>
                </button>
              </Link>
              <Link href='/id/manage-sale'>
                <button className='py-2 block outline-none'>
                  <h1 className='font-mont font-medium text-[#B2B3C8] text-[12px]'>
                    Manage sale
                  </h1>
                </button>
              </Link>
            </div>
          </div>
        </NavLink>
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
        <NavLink
          href='/sale-lock'
          icon={<SaleLockIcon />}
          iconRight={<DropdownIcon />}
          title='SaleX Lock'
          onClick={() => {
            toggleAccordion('drop_lock');
            router.push('/sale-lock');
          }}
        >
          {' '}
          <div
            className={`flex justify-center overflow-hidden transition-all duration-150 ${
              selected === 'drop_lock'
                ? 'h-auto ease-in max-h-screen'
                : 'max-h-0 ease-out'
            }`}
          >
            <div>
              <Link href='/sale-lock'>
                <button className='pt-2 block outline-none'>
                  <h1 className='font-mont font-medium text-[#B2B3C8] text-[12px]'>
                    Liquidity Locker
                  </h1>
                </button>
              </Link>
              <Link href='/sale-lock'>
                <button className='py-4 block outline-none'>
                  <h1 className='font-mont font-medium text-[#B2B3C8] text-[12px]'>
                    Token Locker
                  </h1>
                </button>
              </Link>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;

// custom components
const NavLink = ({ icon, title, href, onClick, ...props }) => {
  const { iconRight, children } = props;
  const router = useRouter();

  console.log(router);

  return (
    <Fragment>
      <div
        // onClick={() => {
        //   href && router.push(href);
        // }}
        onClick={onClick && onClick}
        className='hover:cursor-pointer flex items-center gap-x-5 py-3 px-4 xl:py-5 w-full xl:px-7'
        style={{
          backgroundColor: router.asPath === href && activeNavBgColor,
        }}
      >
        <div
          className='w-5 xl:w-auto'
          style={{
            color: router.asPath === href ? '#000248' : '#6D8FFF',
          }}
        >
          {icon}
        </div>
        <h1
          className='font-mont text-[12px] xl:text-sm font-semibold leading-5 text-custom-navLinkColor'
          style={{
            color: router.asPath === href && activeNavLinkColor,
          }}
        >
          {title}
        </h1>

        {iconRight && (
          <button
            className='outline-none justify-center items-center ml-auto'
            style={{
              color: router.asPath === href ? '#000248' : '#fff',
            }}
          >
            {iconRight}
          </button>
        )}
      </div>
      {children && children}
    </Fragment>
  );
};
