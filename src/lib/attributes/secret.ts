import { AttributeReturn } from '.';
import { LootTable } from '../LootTable';

// TODO: Tweak chances
export const Secret = new LootTable() //
	.addItem(['Se1'], 65_536)
	.addItem(['Se2'], 32_768)
	.addItem(['Se3'], 16_384)
	.addItem(['Se4'], 8_192)
	.addItem(['Se5'], 4_096)
	.addItem(['Se6'], 2_048)
	.addItem(['Se7'], 1_024)
	.addItem(['Se8'], 512)
	.addItem(['Se9'], 256)
	.addItem(['Se10'], 128)
	.addItem(['Se11'], 64)
	.addItem(['Se12'], 48)
	.addItem(['Se13'], 32)
	.addItem(['Se14'], 24)
	.addItem(['Se15'], 16)
	.addItem(['Se16'], 8);

export const secret = (): AttributeReturn => {
	const _secret = Secret.dropItem() as [value: string];

	return [
		{
			trait_type: 'Secret',
			value: _secret[0]
		}
	];
};
