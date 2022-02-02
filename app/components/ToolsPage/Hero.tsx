import { Link } from 'remix';

const Hero = () => {
  return (
    <div>
      <h1 className='flex justify-center items-center text-3xl text-center  text-white font-semibold'>
        Cryptography Tools
      </h1>
      <div className='flex justify-evenly items-center pt-7 px-24 text-xl text-gray-400 font-medium'>
        <span className='hover:text-white border-b-2 hover:border-b-2 border-transparent hover:border-[#38BDF8] cursor-pointer focus:text-white'>
          <Link to='/tools/rot13'>Rot 13</Link>
        </span>
        <span className='hover:text-white hover:border-b-2 hover:border-[#38BDF8] cursor-pointer focus:text-white'>
          <Link to='/tools/ceasarcipher'>Ceasar Cipher</Link>
        </span>
        <span className='hover:text-white hover:border-b-2 hover:border-[#38BDF8] cursor-pointer focus:text-white'>
          <Link to='/tools/hillcipher'>Hill Cipher</Link>
        </span>
        <span className='hover:text-white hover:border-b-2 hover:border-[#38BDF8] cursor-pointer focus:text-white'>
          <Link to='/tools/monoalphcipher'>Mono Alphabetic Cipher</Link>
        </span>
      </div>
    </div>
  );
};

export default Hero;
