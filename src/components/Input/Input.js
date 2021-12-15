const Input = ({ label, labelColor, className, error, ...props }) => {
  // integrate formik and yup for frontend validation
  return (
    <div className='w-full'>
      {label && (
        <label
          htmlFor={label}
          className='font-mont font-medium block text-[12px] lg:text-sm text-custom-primaryColor'
          style={{
            color: labelColor && labelColor,
          }}
        >
          {label}
        </label>
      )}
      {error != "" && error ? <input
        id={label}
        type='text'
        style={{border:'1px solid red'}}
        className={`w-full outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[46px] mt-2 rounded-[10px] text-[12px] lg:text-sm text-[#000000] font-medium ${className}`}
        {...props}
      />:<input
        id={label}
        type='text'
        className={`w-full outline-none px-5 bg-[#F6F7FC] placeholder-[#4A4A4A] h-[46px] mt-2 rounded-[10px] text-[12px] lg:text-sm text-[#000000] font-medium ${className}`}
        {...props}
      />}
      <p style={{fontSize:'11px',color:'red'}}>{error}</p>
    </div>
  );
};

export default Input;
