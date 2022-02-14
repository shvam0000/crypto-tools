import Github from '~/utils/icons/Github';

const Profile: React.FC = () => {
  return (
    <div className='my-20  max-w-md rounded-lg bg-white py-4 px-8 shadow-lg'>
      <div className='-mt-16 flex justify-center md:justify-end'>
        <img
          className='h-20 w-20 rounded-full border-2 border-indigo-500 object-cover'
          src='https://avatars.githubusercontent.com/u/60486289?v=4'
        />
      </div>
      <div>
        <h2 className='text-3xl font-semibold text-gray-800'>Shivam Shekhar</h2>
        <h2 className='text-xl font-semibold text-gray-800'>RA1911030010026</h2>
        <p className='mt-2 text-gray-600'>
          I am a 3rd year CSE student with. I'm a frontend web developer and
          UI/UX designer
        </p>
      </div>
      <div className='mt-4 flex justify-end'>
        <a
          href='https://github.com/shvam0000/'
          className='text-xl font-medium text-indigo-500'>
          <Github />
        </a>
      </div>
    </div>
  );
};

export default Profile;
