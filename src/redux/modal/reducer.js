import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
	name: 'modal',
	// initialState: {
	// 	itemsInModal: JSON.parse(
	// 		localStorage.getItem('pasakebap-itemsInModal') || '[]'
	// 	),
	// },
	reducers: {
		addItemInModal: (state, { payload: item }) => {
			state.itemsInModal.push((el) => el.id === item.id);
			// if (tmp) {
			// 	tmp.count++;
			// } else {
			// 	state.itemsInCart.push({ ...item, count: 1 });
			// }

			// localStorage.setItem(
			// 	'pasakebap-itemsInCart',
			// 	JSON.stringify(state.itemsInModal)
			// );
		},
	},
});

export const { addItemInModal } = modalSlice.actions;
export default modalSlice.reducer;
