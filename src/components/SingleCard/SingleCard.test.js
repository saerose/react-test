import React from 'react';
import SingleCard from './components/SingleCard/SingleCard';

import configureStore from './store/store'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { shallow } from 'enzyme';
// import { stub } from 'sinon';

const store = configureStore()

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const component = shallow(<SingleCard store={store}/>)
  console.log(component.html())
});
