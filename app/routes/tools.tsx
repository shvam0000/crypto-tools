import { Outlet } from 'remix';
import Hero from '../components/ToolsPage/Hero';

const index = () => {
  return (
    <div>
      <Hero />
      <Outlet />
    </div>
  );
};

export default index;
