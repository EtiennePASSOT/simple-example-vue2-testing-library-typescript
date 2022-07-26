import { render, screen, fireEvent } from '@testing-library/vue';
import Button from '@/components/Button.vue';

test('render a component with label', () => {
  const wrapper = render(Button, {
    props: {
      label: 'button',
    },
  });

  expect(wrapper.getByText('button')).toBeDefined();
});

test('click', async () => {
  const wrapper = render(Button, {
    props: {
      label: 'button',
    },
  });

  await fireEvent.click(wrapper.getByText('button'));

  expect(wrapper.getByText('clicked')).toBeDefined();
});
