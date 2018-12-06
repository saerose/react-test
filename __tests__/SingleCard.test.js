import React from 'react';
import SingleCard from '../src/components/SingleCard/SingleCard';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { shallow } from 'enzyme';
import { stub } from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

describe('Single Card', () => {
  it('Should appear in DOM as <div>', () => {
    const component = shallow(<SingleCard/>);
    expect(component.find('#single__card').exists()).toBe(false);
    console.log('COMPONENT', component);
  })
})