import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { shallow } from 'enzyme';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('sets isloading to true', () => {
  global.fetch = jest.fn().mockReturnValue(Promise.resolve({
    ok: true,
    json: () => Promise.resolve({'user': 'test'})
  }));

  const c = shallow(<App />);
  c.instance().handleClick().then(() => {
    expect(c.instance().state.isLoading).toEqual(false);
  });
  expect(c.instance().state.isLoading).toEqual(true);
});
