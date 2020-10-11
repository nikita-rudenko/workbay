import React from 'react';
import { render } from '../../setupTests';
import App from './App';

describe('App', () => {
  test('renders correctly', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
