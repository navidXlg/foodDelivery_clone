


export default function CustomInput ({ label, register, type }){

    return (
      <>
        <label className='text-sm font-semibold text-gray-500'>{label}</label>
        <input
          className='shadow-sm rounded-lg border-gray-400 px-2 border-2 py-2'
          {...register}
          type={type}
        />
      </>
    );
  };