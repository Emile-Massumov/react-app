import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
<Tweet name="Émile" message="Likes coding ,même si c'est difficile"rate="888"/>
      <Tweet name="Zinapa" message="Study insurance"rate="1000"/>
      <Tweet name="Madina"message="Reste à la maison"rate="3907"/>
      <button className="button">Press here</button>
