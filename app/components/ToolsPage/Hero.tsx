import { Link } from 'remix';

const Hero = () => {
  return (
    <div>
      <h1 className='flex items-center justify-center text-center text-3xl  font-semibold text-white'>
        Cryptography Tools
      </h1>
      <div className='flex items-center justify-evenly px-24 pt-7 text-xl font-medium text-gray-400'>
        <span className='transform cursor-pointer border-b-2 border-transparent border-[#38BDF8] transition  hover:scale-110 hover:border-b-2 hover:text-white '>
          <Link to='/tools/rot13'>Rot 13</Link>
        </span>
        <span className='transform cursor-pointer border-b-2 border-transparent border-[#38BDF8] transition  hover:scale-110 hover:border-b-2 hover:text-white '>
          <Link to='/tools/ceasarcipher'>Ceasar Cipher</Link>
        </span>
        <span className='transform cursor-pointer border-b-2 border-transparent border-[#38BDF8] transition  hover:scale-110 hover:border-b-2 hover:text-white '>
          <Link to='/tools/hillcipher'>Hill Cipher</Link>
        </span>
        <span className='transform cursor-pointer border-b-2 border-transparent border-[#38BDF8] transition  hover:scale-110 hover:border-b-2 hover:text-white '>
          <Link to='/tools/monoalphcipher'>Mono Alphabetic Cipher</Link>
        </span>
      </div>
    </div>
  );
};

export default Hero;
