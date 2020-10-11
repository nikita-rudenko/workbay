import React from 'react';
import { act } from 'react-dom/test-utils';
import { fireEvent, render, screen } from '../../setupTests';
import CreateNote from './CreateNote';

describe('CreateNote', () => {
  test('renders correctly', () => {
    const { container } = render(<CreateNote />);
    expect(container).toMatchSnapshot();
  });

  test('click expands form', () => {
    render(<CreateNote />);

    act(() => {
      fireEvent.click(screen.getByRole('textbox'));
    });

    expect(screen.getAllByRole('textbox')).toHaveLength(2);
    expect(screen.getByText('Save')).toBeInTheDocument();
  });

  test('focus expands form', () => {
    render(<CreateNote />);

    act(() => {
      fireEvent.focus(screen.getByRole('textbox'));
    });

    expect(screen.getAllByRole('textbox')).toHaveLength(2);
    expect(screen.getByText('Save')).toBeInTheDocument();
  });

  test('click outside collapses expanded form', () => {
    render(<CreateNote />);

    act(() => {
      fireEvent.focus(screen.getByRole('textbox'));
      fireEvent.click(document);
    });

    expect(screen.getAllByRole('textbox')).toHaveLength(1);
    // use queryBy absence assertions
    expect(screen.queryByText('Save')).not.toBeInTheDocument();
  });

  // testing-library relies on JSDom which doesn't support
  // modifications of contentEditable elements
  test('saves empty note', async () => {
    const { store } = render(<CreateNote />);

    await act(async () => {
      await fireEvent.focus(screen.getByRole('textbox'));
      await fireEvent.click(screen.getByRole('button'));
    });

    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'notes/createNoteRequest',
      payload: {
        title: '',
        body: '',
      },
    });
  });
});
