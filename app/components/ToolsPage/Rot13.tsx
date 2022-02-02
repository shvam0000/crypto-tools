import { useState } from 'react';
import { ToolsLayout } from '../shared';

const Rot13 = () => {
  const [val, setVal] = useState<string>('hey');
  return (
    <div>
      <ToolsLayout heading='Welcome to Rot13'>
        <div className='flex flex-col justify-center items-center'>
          <textarea
            name=''
            id=''
            cols={50}
            rows={10}
            className='opacity-30 rounded-lg focus:outline-none padding-2'></textarea>
          <button className='bg-[#38BDF8] text-gray-500 px-2 py-1 rounded-sm my-4'>
            Submit
          </button>
        </div>
        {val}
      </ToolsLayout>
    </div>
  );
};

export default Rot13;
