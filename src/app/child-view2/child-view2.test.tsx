import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import ChildView2 from './child-view2';
import 'element-internals-polyfill';

test('renders ChildView2 component', () => {
  const wrapper = render(<ChildView2 />);
  expect(wrapper).toBeTruthy();
});