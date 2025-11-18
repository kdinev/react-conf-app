import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import ChildView1 from './child-view1';
import 'element-internals-polyfill';

test('renders ChildView1 component', () => {
  const wrapper = render(<ChildView1 />);
  expect(wrapper).toBeTruthy();
});