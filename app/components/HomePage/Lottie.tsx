import Lottie from 'react-lottie';
// import { Player } from '@lottiefiles/react-lottie-player';
import animationStyle from '../../utils/lotties/dog.json';

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationStyle,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div>
      {/* <Player
        background='transparent'
        speed={1}
        className='w-full md:w-1/3'
        loop
        autoplay
        src={animationStyle}
      /> */}
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default LottieAnimation;
