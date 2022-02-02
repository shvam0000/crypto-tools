import { About } from '~/components/HomePage';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Index() {
  return (
    <div>
      <div className='h-96'>
        <Player src='https://assets8.lottiefiles.com/packages/lf20_mwopkrz2.json' />
      </div>
      <About />
    </div>
  );
}
