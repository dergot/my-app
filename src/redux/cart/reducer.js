import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		itemsInCart: JSON.parse(
			localStorage.getItem('pasakebap-itemsInCart') || '[]'
		),
	},
	reducers: {
		addItemInCart: (state, { payload: item }) => {
			let tmp = state.itemsInCart.find((el) => el.id === item.id);
			if (tmp) {
				tmp.count++;
			} else {
				state.itemsInCart.push({ ...item, count: 1 });
			}

			localStorage.setItem(
				'pasakebap-itemsInCart',
				JSON.stringify(state.itemsInCart)
			);
		},
		decreaseItemFromCart: (state, { payload: id }) => {
			let tmp = state.itemsInCart.find((el) => el.id === id);
			tmp.count--;

			localStorage.setItem(
				'pasakebap-itemsInCart',
				JSON.stringify(state.itemsInCart)
			);
		},
		deleteItemFromCart: (state, { payload: id }) => {
			state.itemsInCart = state.itemsInCart.filter((item) => item.id !== id);
			localStorage.setItem(
				'pasakebap-itemsInCart',
				JSON.stringify(state.itemsInCart)
			);
		},
	},
});

export const { addItemInCart, decreaseItemFromCart, deleteItemFromCart } =
	cartSlice.actions;
export default cartSlice.reducer;
