import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import ChildView3 from './child-view3';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
globalThis.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders ChildView3 component', () => {
  const wrapper = render(<ChildView3 />);
  expect(wrapper).toBeTruthy();
});