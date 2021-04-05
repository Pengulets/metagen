import { AttributeReturn } from '.';
import { LootTable } from '../LootTable';

// If entry does not contain a "#" it should be treated as a file path
// TODO: create some basic textures
export const Base = new LootTable() //
	.addItem(['Light Mint', '#A2BF8E'], 100)
	.addItem(['Dragon Fruit', '#F35D8B'], 75)
	.addItem(['Muddy', '#494233'], 60)
	.addItem(['Dusty', '#CEC6B3'], 50)
	.addItem(['Gretmatter', '#D1DADF'], 20)
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
