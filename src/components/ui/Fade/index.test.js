/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Fade from '.';

describe('Fade', () => {
  it('renders children correctly', () => {
    render(
      <Fade>
        <div>Test Content</div>
      </Fade>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies correct initial and whileInView styles when toward is X', () => {
    const { container } = render(
      <Fade toward='X' x={10}>
        <div>Test Content</div>
      </Fade>
    );

    const component = container.firstChild;
    expect(component).toHaveStyle('opacity: 0');
    expect(component).toHaveStyle(
      'transform: translateX(10rem) translateZ(0)'
    );
  });

  it('applies correct initial and whileInView styles when toward is S', () => {
    const { container } = render(
      <Fade toward='S' initialScale={0.5} finalScale={1.5}>
        <div>Test Content</div>
      </Fade>
    );

    const component = container.firstChild;
    expect(component).toHaveStyle('opacity: 0');
    expect(component).toHaveStyle(
      'transform: scale(0.5) translateZ(0)'
    );
  });

  it('applies correct initial and whileInView styles when toward is not X or S', () => {
    const { container } = render(
      <Fade toward='Y' y={5}>
        <div>Test Content</div>
      </Fade>
    );

    const component = container.firstChild;
    expect(component).toHaveStyle('opacity: 0');
    expect(component).toHaveStyle(
      'transform: translateY(5rem) translateZ(0)'
    );
  });
});
