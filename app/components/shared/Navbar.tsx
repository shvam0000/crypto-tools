import { Logo, GitHub } from '~/utils/icons';
import { Link } from 'remix';

const Navbar = () => {
  return (
    <div className='flex  justify-between items-center px-28 py-4 text-white'>
      <div className='flex items-center justify-center text-xl font-bold'>
        <span className='text-3xl text-[#38BDF8] mx-2'>
          <Logo />
        </span>
        <span>Cryptography Tools</span>
      </div>
      <div className='flex justify-center items-center'>
        <span className='mx-2'>
          <Link to='/tools'>Tools</Link>
        </span>
        <span className='mx-2'>
          <Link to='/stegnography'>Stegnography</Link>
        </span>
        <span className='mx-2 text-3xl text-gray-600'>
          <a href='https://github.com/shvam0000/crypto-tools'>
            <GitHub />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
