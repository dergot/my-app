import Item1 from '../../images/food/1524137711.jpg';
import Item2 from '../../images/food/1524673925.jpg';
import Item3 from '../../images/food/1524868334.jpg';
import Item4 from '../../images/food/39.jpg';
import Item7 from '../../images/food/1547409431.jpg';
import Item8 from '../../images/food/1616427276.jpg';

import {
	ADD_TO_CART,
	REMOVE_ITEM,
	SUB_QUANTITY,
	ADD_QUANTITY,
	ADD_SHIPPING,
} from '../actions/action-types/cart-actions';

const initState = {
	items: [
		{
			id: 1,
			title: 'small KEBAP - CHICKEN',
			desc: '180g. Turkish pita, grilled chicken, fresh vegetable, dressing.',
			allergens: '1, 3, 7, 11.',
			price: 2.0,
			img: Item1,
		},
		{
			id: 2,
			title: 'classic KEBAP - CHICKEN',
			desc: '350g. Turkish pita, grilled chicken, fresh vegetable, dressing.',
			allergens: '1, 3, 7, 11.',
			price: 3.5,
			img: Item2,
		},
		{
			id: 3,
			title: 'big KEBAP - CHICKEN',
			desc: '550g. Turkish pita, grilled chicken, fresh vegetable, dressing.',
			allergens: '1, 3, 7, 11.',
			price: 6,
			img: Item3,
		},
		{
			id: 4,
			title: 'classic KEBAP - FALAFEL',
			desc: '180g. Turkish pita, falafel (2pcs), fresh vegetable, dressing.',
			allergens: '1, 3, 7, 11.',
			price: 2.5,
			img: Item4,
		},
		{
			id: 5,
			title: 'small KEBAP - FALAFEL',
			desc: '350g. Turkish pita, falafel (4pcs), fresh vegetable, dressing.',
			allergens: '1, 3, 7, 11.',
			price: 4,
			img: Item4,
		},
		{
			id: 6,
			title: 'big FALAFEL - kebap',
			desc: '550g. Turkish pita, falafel (6pcs), fresh vegetable, dressing.',
			allergens: '1, 3, 7, 11.',
			price: 6,
			img: Item4,
		},
		{
			id: 7,
			title: 'VEGETARIAN KEBAP',
			desc: '300g. Turkish pita, extra portion of fresh vegetable, dressing.',
			allergens: '1, 3, 7, 11.',
			price: 3,
			img: Item7,
		},
		{
			id: 8,
			title: 'small KEBAP - cheese',
			desc: '350g. Turkish pita, fried cheese, fresh vegetable, dressing.',
			allergens: '1, 3, 7, 11.',
			price: 4,
			img: Item8,
		},
	],
	addedItems: [],
	total: 0,
};
const cartReducer = (state = initState, action) => {
	//INSIDE HOME COMPONENT
	if (action.type === ADD_TO_CART) {
		let addedItem = state.items.find((item) => item.id === action.id);
		//check if the action id exists in the addedItems
		let existed_item = state.addedItems.find((item) => action.id === item.id);
		if (existed_item) {
			addedItem.quantity += 1;
			return {
				...state,
				total: state.total + addedItem.price,
			};
		} else {
			addedItem.quantity = 1;
			//calculating the total
			let newTotal = state.total + addedItem.price;

			return {
				...state,
				addedItems: [...state.addedItems, addedItem],
				total: newTotal,
			};
		}
	}
	if (action.type === REMOVE_ITEM) {
		let itemToRemove = state.addedItems.find((item) => action.id === item.id);
		let new_items = state.addedItems.filter((item) => action.id !== item.id);

		//calculating the total
		let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
		console.log(itemToRemove);
		return {
			...state,
			addedItems: new_items,
			total: newTotal,
		};
	}
	//INSIDE CART COMPONENT
	if (action.type === ADD_QUANTITY) {
		let addedItem = state.items.find((item) => item.id === action.id);
		addedItem.quantity += 1;
		let newTotal = state.total + addedItem.price;
		return {
			...state,
			total: newTotal,
		};
	}
	if (action.type === SUB_QUANTITY) {
		let addedItem = state.items.find((item) => item.id === action.id);
		//if the qt == 0 then it should be removed
		if (addedItem.quantity === 1) {
			let new_items = state.addedItems.filter((item) => item.id !== action.id);
			let newTotal = state.total - addedItem.price;
			return {
				...state,
				addedItems: new_items,
				total: newTotal,
			};
		} else {
			addedItem.quantity -= 1;
			let newTotal = state.total - addedItem.price;
			return {
				...state,
				total: newTotal,
			};
		}
	}

	if (action.type === ADD_SHIPPING) {
		return {
			...state,
			total: state.total + 6,
		};
	}

	if (action.type === 'SUB_SHIPPING') {
		return {
			...state,
			total: state.total - 6,
		};
	} else {
		return state;
	}
};

export default cartReducer;
