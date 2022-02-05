import React from 'react';

interface ToolsLayoutProps {
  heading?: string;
}

const ToolsLayout: React.FC<ToolsLayoutProps> = ({ children, ...props }) => {
  return (
    <div className='my-4 mx-24 h-screen rounded-3xl  bg-[#090d1b] py-4'>
      <div className='flex items-center justify-center py-4 text-xl font-semibold text-white'>
        {props.heading}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ToolsLayout;
