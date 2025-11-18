import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import RegisterPage from './register-page';
import 'element-internals-polyfill';

test('renders RegisterPage component', () => {
  const wrapper = render(<RegisterPage />);
  expect(wrapper).toBeTruthy();
});