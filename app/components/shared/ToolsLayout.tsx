import React from 'react';

interface ToolsLayoutProps {
  heading?: string;
}

const ToolsLayout: React.FC<ToolsLayoutProps> = ({ children, ...props }) => {
  return (
    <div className='my-4 py-4 mx-24 h-screen  bg-[#090d1b] rounded-t-3xl'>
      <div className='flex justify-center items-center text-xl text-white font-semibold py-7'>
        {props.heading}
      </div>
      <div className='py-2'>{children}</div>
    </div>
  );
};

export default ToolsLayout;
