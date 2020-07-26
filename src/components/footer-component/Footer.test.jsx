import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('[Footer Component Test Suite]', () => {
  test('should pass if Footer component can be loaded', () => {
    render(<Footer />);
  });
});
