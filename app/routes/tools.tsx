import { Outlet } from 'remix';
import { Hero } from '~/components/ToolsPage';

const index = () => {
  return (
    <div>
      <Hero />
      <Outlet />
    </div>
  );
};

export default index;
