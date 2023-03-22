import { render, screen } from '@testing-library/react';
import App from '../App';

test('テストページをレンダリングする', () => {
  render(<App />);
  const paragraphElement = screen.getByText(/テストページです/i);
  expect(paragraphElement).toBeInTheDocument();
});
