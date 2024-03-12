import React from 'react';
import { render, screen } from '@testing-library/react';
import Portfolio from './Components/Portfolio'

describe('Portfolio component', () => {
  test('renders navigation links correctly', () => {
    render(<Portfolio />);
    
    const homeLink = screen.getByText('Home');
    // const aboutLink = screen.getByText('About');
    // const skillsLink = screen.getByText('Skills');
    // const projectsLink = screen.getByText('Projects');
    // const contactLink = screen.getByText('Contact');

    expect(homeLink).toBeInTheDocument();
    // expect(aboutLink).toBeInTheDocument();
    // expect(skillsLink).toBeInTheDocument();
    // expect(projectsLink).toBeInTheDocument();
    // expect(contactLink).toBeInTheDocument();
  });

  // Add more tests as needed
});