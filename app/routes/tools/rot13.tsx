import { Form, useActionData } from 'remix';
import { ToolsLayout } from '~/components/shared';

const rot13 = (s: string) => {
  return s.replace(/[A-Za-z]/g, function (c) {
    return String.fromCharCode(
      c.charCodeAt(0) + (c.toUpperCase() <= 'M' ? 13 : -13)
    );
  });
};

//@ts-ignore
export async function action({ request }) {
  const body = await request.formData();
  const name = body.get('visitorsName');
  const newName = rot13(name);
  return { result: `Hello, ${newName}` };
}

const Rot13 = () => {
  const data = useActionData();
  return (
    <ToolsLayout heading='Welcome to Rot13'>
      <Form method='post' className='flex flex-col items-center justify-center'>
        <textarea
          rows={10}
          cols={50}
          name='visitorsName'
          className='padding-2 rounded-lg opacity-30 focus:outline-none'></textarea>
        <button
          type='submit'
          className='my-4 rounded-sm bg-[#38BDF8] px-2 py-1 font-bold text-gray-500'>
          Submit
        </button>
        <p>{data ? data.result : 'Waiting...'}</p>
      </Form>
    </ToolsLayout>
  );
};
export default Rot13;
