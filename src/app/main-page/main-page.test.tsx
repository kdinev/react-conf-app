import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import MainPage from './main-page';
import 'element-internals-polyfill';

test('renders MainPage component', () => {
  const wrapper = render(<MainPage />);
  expect(wrapper).toBeTruthy();
});