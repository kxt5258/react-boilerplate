import authReducer from '../../reducers/auth';

test('handle login reducer', () => {
	const uid = 'tshfbhdfd';
	const state = authReducer(undefined, {
		type: 'LOGIN',
		uid
	});
	expect(state.uid).toBe(uid);
});

test('handle logout reducer', () => {
	const state = authReducer(
		{uid: 'sdklsdnsd'},
		{
			type: 'LOGOUT'
		}
	);
	expect(state).toEqual({});
});
