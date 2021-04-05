import { background } from './background';
import { base } from './base';
import { body } from './body';
import { secret } from './secret';

export const attributes = [background, base, body, secret];

export const callAttributes = () => {
	const outMeta: Attribute[] = [];
	const outIgloo: IglooStep[] = [];

	attributes.forEach((attr) => {
		const attribute = attr.call(null);

		outMeta.push(attribute[0]);
		attribute[1] ? outIgloo.push(attribute[1]) : null;
	});

	return {
		metadata: outMeta,
		igloo: outIgloo
	};
};

export interface Attribute {
	trait_type: string;
	value: number | string;
	display_type?: string;
}

export interface IglooStep {
	Step: number;
	Value: string | number;
}

export type AttributeReturn = [attribute: Attribute, Igloo?: IglooStep];
