const MainPanel = ({ children }) => {
  return (
    <main className='flex-1 px-5 py-5 h-screen overflow-auto'>
      {/* top section */}
      <section className='w-full flex gap-x-7 items-center'>
        <PanelCard title='SSN Balance'>
          <input
            readOnly
            value='0000.00'
            className='w-full h-[46px] bg-[#FDFDFD] rounded-[10px] text-sm font-normal font-mont text-custom-primaryColor px-3 py-3 mt-1'
          />
        </PanelCard>
        <PanelCard title='BBN Balance' className='bg-[#DEE6FF] border-none'>
          <input
            readOnly
            value='0000.00'
            className='w-full h-[46px] bg-[#FDFDFD] rounded-[10px] text-sm font-normal font-mont text-custom-primaryColor px-3 py-3 mt-1'
          />
        </PanelCard>
        <PanelCard title='Wallet' className='bg-[#FFEDB3] border-none'>
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
        <PanelCard title='BSC Network' className='bg-transparent border-none'>
          <button className='outline-none bg-custom-accentColor w-full h-[46px] mt-2 rounded-[10px] justify-between items-center'>
            <h1 className='font-mont font-bold text-white text-sm'>
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
      className={`w-[24%] border border-solid rounded-[10px] border-[#000000] p-[14px] ${
        className && className
      }`}
    >
      <h1 className='font-semibold font-mont text-base text-custom-primaryColor'>
        {title}
      </h1>
      {children}
    </div>
  );
};
