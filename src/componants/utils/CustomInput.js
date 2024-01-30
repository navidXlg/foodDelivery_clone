


export default function CustomInput ({ label, register, type }){

    return (
      <>
        <label className='text-xs md:text-sm font-semibold text-gray-500'>{label}</label>
        <input
          className='shadow-sm rounded-lg border-gray-400 p-1 md:p-2 border-2 '
          {...register}
          type={type}
        />
      </>
    );
  };