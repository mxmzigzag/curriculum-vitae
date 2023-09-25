export const buttonWrapperStyles = `
  group
  w-full 
  max-w-[220px] 
  h-[50px] 
  border-2 
  border-solid 
  border-cGold 
  rounded-lg 
  relative
  transition-all

  before:absolute 
  before:top-0
  before:left-0
  before:w-0
  before:h-full
  before:bg-cGold
  before:-z-[1]
  before:transition-all

  hover:pr-15

  hover:before:w-3/4
  hover:before:transition-all
`;

export const iconStyles = `
  absolute
  right-3.5
  top-1/2
  -translate-y-1/2
  z-10
  scale-0
  transition-all

  group-hover:scale-100
`;
