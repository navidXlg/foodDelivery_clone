import className from 'classnames';

export default function Button({
  children,
  outline,
  rounded,
  snapp,
  off,
  btnHover,
  ...rest
}) {
  const classes = className(
    'px-3 py-3 font-bold border',
    {
      'rounded-lg': rounded,
      'bg-white': outline,
      'bg-purpleSnapp-300' : snapp,
      'bg-gray-200' : off,
      'hover:opacity-70' : btnHover
    },
    rest.className
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};



