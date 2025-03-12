import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Who from '../../components/Who';
import framerMotionMock from '../mocks/framerMotion';

vi.mock('framer-motion', () => framerMotionMock);

describe('Who Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the title correctly', () => {
    render(<Who />);
    expect(screen.getByText('Quiénes somos')).toBeInTheDocument();
  });

  it('renders all paragraphs', () => {
    render(<Who />);
    
    expect(screen.getByText(/BAFWEEK es la plataforma/i)).toBeInTheDocument();
    expect(screen.getByText(/Llevando propuestas creativas/i)).toBeInTheDocument();
    expect(screen.getByText(/Aspirando a ser un espacio/i)).toBeInTheDocument();
  });

  it('displays the correct number of paragraphs', () => {
    render(<Who />);
    const paragraphs = screen.queryAllByText(/BAFWEEK|Llevando|Aspirando/);
    expect(paragraphs.length).toBe(3);
  });
});