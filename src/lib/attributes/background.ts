import { AttributeReturn } from '.';
import { LootTable } from '../LootTable';

// https://www.schemecolor.com/pastella.php
export const Background = new LootTable() //
	.addItem(['Dutch White', '#F2DDC0'], 100)
	.addItem(['Pale Robin Egg Blue', '#90DAD9'], 75)
	.addItem(['Spanish Pink', '#F3BEBC'], 75)
	.addItem(['Almond', '#EBDED1'], 50)
	.addItem(['Cherry Blossom Pink', '#F8B9C5'], 50)
	.addItem(['Light Steel Blue', '#AFC0E3'], 40)
	.addItem(['Light Orchid', '#E7A8E3'], 20)
	.addItem(['Maximum Blue Purple', '#A09CF3'], 20)
	.addItem(['Pink Lavender', '#DAB5D2'], 20)
	.addItem(['Magic Mint', '#ADEAC3'], 10);

export const background = (): AttributeReturn => {
	const _base = Background.dropItem() as [name: string, value: string];

	return [
		{
			trait_type: 'Background',
			value: _base[0]
		},
		{
			Step: 0,
			Value: _base[1]
		}
	];
};
