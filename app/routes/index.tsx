import { Player } from '@lottiefiles/react-lottie-player';
import { Lottie, About } from '~/components/HomePage';
import animationStyle from '../utils/lotties/dog.json';

export default function Index() {
  return (
    <div>
      <Lottie />
      <Player
        background='transparent'
        speed={1}
        className='w-full md:w-1/3'
        loop
        autoplay
        src='./app/utils/lotties/dog.json'
      />
      <About />
    </div>
  );
}
