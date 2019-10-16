import React from 'react';
import {shallow} from 'enzyme';
import DashboardPage from '../../components/DashboardPage';

test('dashboard page test', () => {
	const wrapper = shallow(<DashboardPage />);
	expect(wrapper).toMatchSnapshot();
});
