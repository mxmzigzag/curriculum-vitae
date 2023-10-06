const baseButtonWrapperStyles = `
  w-full 
  max-w-[220px] 
  h-[50px] 
  uppercase
  font-bold
  tracking-widest
  border-2 
  border-solid 
  rounded-lg 
  relative

  before:absolute 
  before:top-0
  before:left-0
  before:w-0
  before:h-full
  before:bg-cGold
  before:-z-[1]
  before:duration-300
  before:ease-in-out
`;

export const activeButtonWrapperStyles = `
  ${baseButtonWrapperStyles}
  group
  border-cGold 
  duration-300
  ease-in-out

  hover:pr-15

  hover:before:w-3/4
  hover:before:duration-300
  hover:before:ease-in-out
`;

export const disabledButtonWrapperStyles = `
  ${baseButtonWrapperStyles}
  border-cGray 
`;

export const iconStyles = `
  absolute
  right-3.5
  top-1/2
  -translate-y-1/2
  z-10
  scale-0
  duration-300
  ease-in-out

  group-hover:scale-100
`;
