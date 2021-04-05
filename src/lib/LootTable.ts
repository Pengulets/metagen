import LootItem, { LootItemValue } from './LootItem';
import { randomInRange } from './utils/utils';

export class LootTable {
	public items: LootItem[] = [];

	public addItem(item: LootItemValue, dropRate: number) {
		this.items.push(new LootItem(item, dropRate));
		return this;
	}

	public dropItem(): LootItemValue {
		// Extract a random integer between 0 and "totalWeight"
		let randomNumber: number = randomInRange(0, this.computeTotalWeight());

		// Pick the item to drop
		for (const item of this.items)
			if (randomNumber <= item.dropRate) return item.item;
			else randomNumber -= item.dropRate;

		return this.items[Math.floor(Math.random() * this.items.length)].item;
	}

	protected computeTotalWeight(): number {
		return this.items.map((item: LootItem) => item.dropRate).reduce((total: number, sum: number) => (total += sum));
	}
}

export default LootTable;
