import { AttributeReturn } from '.';
import { LootTable } from '../LootTable';

// https://www.schemecolor.com/pastella.php
export const Base = new LootTable() //
	.addItem(['Pure', '#F1F1F1'], 1);

export const base = (): AttributeReturn => {
	const _base = Base.dropItem() as [name: string, value: string];

	return [
		{
			trait_type: 'Base Colour',
			value: _base[0]
		},
		{
			Step: 1,
			Value: _base[1]
		}
	];
};
