import React, { Fragment, useState, useEffect } from 'react';
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

  // console.log(router);

  return (
    <Fragment>
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
            onClick={() => {
              router.push('/sale-dashboard');
              setSelected(null);
            }}
          />
          <NavLink
            href='/sale-mint'
            icon={<SaleMintIcon />}
            title='SaleX Mint'
            onClick={() => {
              router.push('/sale-mint');
              setSelected(null);
            }}
          />
          <NavLink
            href='/'
            href1='/id'
            href2='/id/start-sale'
            href3='/id/manage-sale'
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
            onClick={() => {
              router.push('/sale-airdrop');
              setSelected(null);
            }}
          />
          <NavLink
            href='/sale-stake'
            icon={<SaleStakeIcon />}
            title='SaleX Stake'
            onClick={() => {
              router.push('/sale-stake');
              setSelected(null);
            }}
          />
          <NavLink
            href='/sale-lock'
            href1='/sale-lock/token_locker'
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
                  <button className='pt-4 block outline-none'>
                    <h1 className='font-mont font-medium text-[#B2B3C8] text-[12px]'>
                      Liquidity Locker
                    </h1>
                  </button>
                </Link>
                <Link href='/sale-lock/token_locker'>
                  <button className='py-6 block outline-none'>
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
    </Fragment>
  );
};

export default Sidebar;

export const MobileMenu = props => {
  const router = useRouter();
  const { mobileMenu, toggleMobileMenu } = props;
  const [selected, setSelected] = useState(null);

  const toggleAccordion = index => {
    if (selected === index) {
      return setSelected(null);
    }

    setSelected(index);
  };

  useEffect(() => {
    mobileMenu && (document.body.style.overflow = 'hidden');

    return () => {
      document.body.style.overflowY = 'unset';
    };
  }, [mobileMenu]);

  return (
    <div
      className='fixed top-0 left-0 z-50 w-full h-screen overflow-auto bg-custom-primaryColor transition-all duration-150 px-7 py-7 lg:hidden'
      style={{
        transform: mobileMenu ? 'translateX(0)' : 'translateX(-150%)',
      }}
    >
      <div className='header-m flex justify-end'>
        <button
          onClick={toggleMobileMenu}
          className='outline-custom-accentColor'
        >
          <img src='/assets/icons/chevrons-left.svg' alt='' />
        </button>
      </div>

      {/* mobile navs */}
      <div className='flex flex-col gap-y-2 pt-8 w-full'>
        <NavLink
          href='/sale-dashboard'
          icon={<DashboardIcon />}
          title='SaleX Dashboard'
          onClick={() => {
            router.push('/sale-dashboard');
            setSelected(null);
            toggleMobileMenu();
          }}
        />
        <NavLink
          href='/sale-mint'
          icon={<SaleMintIcon />}
          title='SaleX Mint'
          onClick={() => {
            router.push('/sale-mint');
            setSelected(null);
            toggleMobileMenu();
          }}
        />
        <NavLink
          href='/'
          href1='/id'
          href2='/id/start-sale'
          href3='/id/manage-sale'
          icon={<SaleLaunchIcon />}
          iconRight={<DropdownIcon />}
          title='SaleX Launch'
          onClick={() => {
            toggleAccordion('drop_launch');
            router.push('/');
          }}
        >
          {selected === 'drop_launch' && (
            <div
              className={`flex justify-center overflow-hidden transition-all duration-150 ${
                selected === 'drop_launch'
                  ? 'h-auto ease-in max-h-screen'
                  : 'max-h-0 ease-out'
              }`}
            >
              <div>
                <Link href='/'>
                  <button
                    onClick={toggleMobileMenu}
                    className='py-3 block outline-none'
                  >
                    <h1 className='font-mont font-medium text-[#B2B3C8] text-sm lg:text-[12px]'>
                      Dashboard
                    </h1>
                  </button>
                </Link>
                <Link href='/id/start-sale'>
                  <button
                    onClick={toggleMobileMenu}
                    className='py-3 block outline-none'
                  >
                    <h1 className='font-mont font-medium text-[#B2B3C8] text-sm lg:text-[12px]'>
                      Start sale
                    </h1>
                  </button>
                </Link>
                <Link href='/id/manage-sale'>
                  <button
                    onClick={toggleMobileMenu}
                    className='py-3 block outline-none'
                  >
                    <h1 className='font-mont font-medium text-[#B2B3C8] text-sm lg:text-[12px]'>
                      Manage sale
                    </h1>
                  </button>
                </Link>
              </div>
            </div>
          )}
        </NavLink>
        <NavLink
          href='/sale-airdrop'
          icon={<SaleAirdropIcon />}
          title='SaleX airdrop'
          onClick={() => {
            router.push('/sale-airdrop');
            setSelected(null);
            toggleMobileMenu();
          }}
        />
        <NavLink
          href='/sale-stake'
          icon={<SaleStakeIcon />}
          title='SaleX Stake'
          onClick={() => {
            router.push('/sale-stake');
            setSelected(null);
            toggleMobileMenu();
          }}
        />
        <NavLink
          href='/sale-lock'
          href='/sale-lock'
          href1='/sale-lock/token_locker'
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
                <button
                  onClick={toggleMobileMenu}
                  className='py-3 block outline-none'
                >
                  <h1 className='font-mont font-medium text-[#B2B3C8] text-sm lg:text-[12px]'>
                    Liquidity Locker
                  </h1>
                </button>
              </Link>
              <Link href='/sale-lock/token_locker'>
                <button
                  onClick={toggleMobileMenu}
                  className='py-3 block outline-none'
                >
                  <h1 className='font-mont font-medium text-[#B2B3C8] text-sm lg:text-[12px]'>
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

// custom components
const NavLink = ({ icon, title, href, onClick, ...props }) => {
  const { iconRight, href1, href2, href3, children } = props;
  const router = useRouter();
  const slug = router?.query?.id;

  console.log(router);

  return (
    <Fragment>
      <div
        onClick={onClick && onClick}
        className='hover:cursor-pointer flex items-center gap-x-5 py-3 px-9 lg:px-4 xl:py-5 h-[66px] lg:h-auto w-[264px] mx-auto lg:w-full xl:px-7 rounded-[10px] lg:rounded-none'
        style={{
          backgroundColor:
            (router.asPath === href ||
              router.asPath === href1 ||
              router.asPath === href2 ||
              router.asPath === href3) &&
            activeNavBgColor,
        }}
      >
        <div
          className='w-5 xl:w-auto'
          style={{
            color:
              router.asPath === href ||
              router.asPath === href1 ||
              router.asPath === href2 ||
              router.asPath === href3
                ? '#000248'
                : '#6D8FFF',
          }}
        >
          {icon}
        </div>
        <h1
          className='font-mont text-base lg:text-[12px] xl:text-sm font-semibold leading-5 text-custom-navLinkColor'
          style={{
            color:
              (router.asPath === href ||
                router.asPath === href1 ||
                router.asPath === href2 ||
                router.asPath === href3) &&
              activeNavLinkColor,
            fontWeight:
              (router.asPath === href ||
                router.asPath === href1 ||
                router.asPath === href2 ||
                router.asPath === href3) &&
              700,
          }}
        >
          {title}
        </h1>

        {iconRight && (
          <button
            className='outline-none justify-center items-center ml-auto'
            style={{
              color:
                router.asPath === href ||
                router.asPath === href1 ||
                router.asPath === href2 ||
                router.asPath === href3
                  ? '#000248'
                  : '#fff',
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
