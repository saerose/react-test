import React from 'react';
import SingleCard from './SingleCard';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

import configureStore from '../../store/store'

const store = configureStore()

Enzyme.configure({ adapter: new Adapter() });

describe('Single Card', () => {
  it('Should appear in DOM as <div>', () => {
    const component = shallow(<SingleCard store={store}/>);
    expect(component.find('#single__card').exists()).toBe(false);
  });
  it('Mouse inside initial state should be false', () => {
    const component = shallow(<SingleCard store={store}/>).dive({ store });
    expect(component.state('isMouseInside')).toBe(false)
  });
  it('Should display and hide delete on mouse enter and leave', () => {
    const component = shallow(<SingleCard store={store}/>).dive({ store });
    component.simulate('mouseenter')
    expect(component.state('isMouseInside')).toBe(true)
    component.simulate('mouseleave')
    expect(component.state('isMouseInside')).toBe(false)
  });
  it('Should delete card', () => {
    const copy = store.getState()
    const component = shallow(<SingleCard store={store}/>).dive({ store })
    component.simulate('mouseenter')
    component.find('#single__card__delete').simulate('click');
    expect(store.getState()).not.toBe(copy)
  });
  it('Pop up should display when button is clicked', () => {
    const component = shallow(<SingleCard store={store}/>).dive({ store })
    expect(component.state('showPopup')).toBe(false)
    component.find('#single__card__item').simulate('click')
    expect(component.state('showPopup')).toBe(true)
  });
 })
