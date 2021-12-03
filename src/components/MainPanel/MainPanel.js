const MainPanel = ({ children }) => {
  return (
    <main className='flex-1 pl-7 xl:pl-10 pr-5 py-5 h-screen overflow-auto'>
      {/* top section */}
      {/* mobile nav */}
      <div className='flex items-center justify-between'>
        <div className='logo'>
          <img src='/assets/icons/logo-m.svg' alt='' />

          <div className='flex items-center gap-x-3'></div>
        </div>
      </div>

      {/* large */}
      <section className='hidden w-full lg:flex gap-x-5 xl:gap-x-7 items-center'>
        <PanelCard title='SSN Balance' className='bg-[#F5F6F8] border-none'>
          <input
            readOnly
            value='0000.00'
            className='w-full h-[46px] bg-[#FDFDFD] rounded-[10px] text-[12px] xl:text-sm font-normal font-mont text-custom-primaryColor px-3 py-3 mt-1'
          />
        </PanelCard>
        <PanelCard title='BBN Balance' className='bg-[#F5F6F8] border-none'>
          <input
            readOnly
            value='0000.00'
            className='w-full h-[46px] bg-[#FDFDFD] rounded-[10px] text-[12px] xl:text-sm font-normal font-mont text-custom-primaryColor px-3 py-3 mt-1'
          />
        </PanelCard>
        <PanelCard title='Wallet' className='bg-[#F5F6F8] border-none'>
          <div className='w-full flex justify-between items-center h-[46px] bg-[#FDFDFD] rounded-[10px] px-3 py-3 mt-1'>
            <input
              readOnly
              value='23eabghd34nrn3nejdkska....'
              className='w-full text-[12px] font-normal font-mont text-custom-primaryColor'
            />
            <button className='outline-none'>
              <img src='/assets/icons/copy-icon.svg' alt='' />
            </button>
          </div>
        </PanelCard>
        <PanelCard title='BSC Network' className='bg-[#F5F6F8] border-none'>
          <button className='outline-none bg-custom-accentColor w-full h-[46px] mt-2 rounded-[10px] justify-between items-center'>
            <h1 className='font-mont font-bold text-white text-[12px] xl:text-sm'>
              Connect Wallet
            </h1>
          </button>
        </PanelCard>
      </section>

      {/* main section */}
      {children}
    </main>
  );
};

export default MainPanel;

// custom
const PanelCard = props => {
  const { title, className, children } = props;
  return (
    <div
      className={`w-[24%] border border-solid rounded-[10px] border-[#000000] p-[10px] ${
        className && className
      }`}
    >
      <h1 className='font-semibold font-mont text-[12px] pb-1 text-custom-primaryColor'>
        {title}
      </h1>
      {children}
    </div>
  );
};
