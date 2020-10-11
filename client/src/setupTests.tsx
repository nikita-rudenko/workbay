// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import React, { ComponentType } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from '@reduxjs/toolkit';
import rootReducer from './store/rootReducer';

const customRender = (ui: React.ReactElement<any>, options?: any) => {
  // Wrap dispatch in a mock so it can be spied on.
  const store = createStore(rootReducer, options?.state);
  store.dispatch = jest.fn(store.dispatch);

  const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  const returns = render(ui, {
    wrapper: AllTheProviders as ComponentType,
    ...options,
  });

  return { store, ...returns };
};

export * from '@testing-library/react';
export { customRender as render };
