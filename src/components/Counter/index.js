import React from 'react';
import { Button } from 'react-bootstrap';

const Counter = ({ value, onIncrease, onDecrease }) => {
	return (
		<div>
			<Button disabled={value <= 1} onClick={onDecrease}>
				-
			</Button>
			{value}
			<Button onClick={onIncrease}>+</Button>
		</div>
	);
};

export default Counter;
