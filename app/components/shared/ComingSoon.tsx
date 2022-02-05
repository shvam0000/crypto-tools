import { UnderConstruction } from '~/utils/icons';
import { ToolsLayout } from '.';

const ComingSoon = () => {
  return (
    <ToolsLayout>
      <div className='flex flex-col items-center justify-center text-4xl font-bold text-white'>
        <span className='transform animate-bounce'>Coming Soon!</span>
        <UnderConstruction />
      </div>
    </ToolsLayout>
  );
};

export default ComingSoon;
