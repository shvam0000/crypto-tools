import { Logo, GitHub } from '~/utils/icons';
import { Link } from 'remix';

const Navbar = () => {
  return (
    <div className='flex  items-center justify-between px-28 py-4 text-white'>
      <Link to='/'>
        <div className='flex items-center justify-center text-xl font-bold'>
          <span className='mx-2 text-3xl text-[#38BDF8]'>
            <Logo />
          </span>
          <span>Cryptography Tools</span>
        </div>
      </Link>
      <div className='flex items-center justify-center font-semibold '>
        <span className='mx-2'>
          <Link to='/tools/rot13'>Tools</Link>
        </span>
        <span className='mx-2'>
          <a href='https://share.streamlit.io/triztex/vapt/main/streamlit.py'>
            Stegnography
          </a>
        </span>
        <span className='mx-2'>
          <Link to='/aboutus'>About Us</Link>
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
