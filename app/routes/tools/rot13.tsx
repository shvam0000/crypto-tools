import { Form, useActionData } from 'remix';
import { ToolsLayout } from '~/components/shared';
import { rot13 } from '~/utils/helpers';

export async function action({ request }): Promise<{ result: string }> {
  const body = await request.formData();
  const name = body.get('visitorsName');
  const newName = rot13(name);
  return { result: newName };
}

const Rot13: React.FC = () => {
  const data = useActionData();
  return (
    <ToolsLayout heading='Welcome to Rot13'>
      <Form method='post' className='flex flex-col items-center justify-center'>
        <textarea
          rows={10}
          cols={50}
          name='visitorsName'
          className='padding-2 rounded-lg opacity-30 focus:outline-none'
          required></textarea>
        <button
          type='submit'
          className='font-semibol shadow-cyan-500/50shadow-md my-4 rounded-sm bg-[#1f98cc] px-2 py-1 text-white shadow-lg shadow-cyan-500/50 hover:bg-sky-700'>
          Submit
        </button>
        <p className='text-xl font-medium text-white'>
          Rot13 result : {data ? data.result : ''}
        </p>
        <p className='text-xl font-medium text-white'></p>
      </Form>
    </ToolsLayout>
  );
};
export default Rot13;
