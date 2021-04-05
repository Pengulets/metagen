import { AttributeReturn } from '.';
import { LootTable } from '../LootTable';

// If entry does not contain a "#" it should be treated as a file path
// TODO: create some basic textures
export const Body = new LootTable() //
	.addItem(['Classic', '#000000'], 1);

export const body = (): AttributeReturn => {
	const _body = Body.dropItem() as [name: string, value: string];

	return [
		{
			trait_type: 'Body Colour',
			value: _body[0]
		},
		{
			Step: 1,
			Value: _body[1]
		}
	];
};
