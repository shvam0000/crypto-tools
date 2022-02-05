import { About } from '~/components/HomePage';
import Hack from '~/utils/icons/Hack';

export default function Index() {
  return (
    <div className='flex transform animate-pulse flex-col items-center justify-center'>
      <Hack />
      <About />
    </div>
  );
}
