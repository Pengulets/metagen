export type LootItemValue = string | [name: string, value: string] | [value: string];

export class LootItem {
	public constructor(public item: LootItemValue, public dropRate: number) {
		this.item = item;
		this.dropRate = dropRate;
	}
}

export default LootItem;
