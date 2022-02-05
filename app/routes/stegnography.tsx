import { UnderConstruction } from '~/utils/icons';

const stegnography = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center py-10 text-4xl font-bold text-white'>
        <span className='transform animate-bounce '>
          This page will connect to ML model deployed on stramlit
        </span>
        <UnderConstruction />
      </div>
    </div>
  );
};

export default stegnography;
