const Button = ({ children, ...otherProps }) => {
  return (
    <button
      className="h-10 px-8 bg-orange-600 text-white capitalize"
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
