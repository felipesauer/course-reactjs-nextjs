import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from '.';

describe('<TextInput />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    const searchValue = 'test';
    render(<TextInput handleChange={fn} searchValue={searchValue} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input).toBeInTheDocument();

    expect(input.value).toBe(searchValue);
  });

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    const searchValue = 'test';
    render(<TextInput handleChange={fn} searchValue={searchValue} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    const value = 'value test';

    userEvent.type(input, value);

    expect(input.value).toBe(searchValue);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const searchValue = 'test';

    const { container } = render(<TextInput handleChange={fn} searchValue={searchValue} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
