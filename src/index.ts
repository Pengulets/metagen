import path from 'path';
import fs from 'fs';
import { Attribute, callAttributes, IglooStep } from './lib/attributes';
import rimraf from 'rimraf';

const out_meta: Metadata[] = [];
const out_igloo: Igloo[] = [];

const OUT_DIR = path.join(__dirname, '..', 'metadata');
const OUT_METADATA = path.join(OUT_DIR, 'metadata.json');
const OUT_IGLOO = path.join(OUT_DIR, 'igloo.json');

rimraf.sync(OUT_DIR);

fs.mkdirSync(OUT_DIR);

for (let i = 0; i <= 1024; i++) {
	const call = callAttributes();

	out_meta.push({
		name: '',
		index: i,
		attributes: call.metadata
	});
	out_igloo.push({
		index: i,
		steps: call.igloo
	});
}

fs.writeFileSync(OUT_METADATA, JSON.stringify(out_meta, null, 2));
fs.writeFileSync(OUT_IGLOO, JSON.stringify(out_igloo, null, 2));

export interface Metadata {
	name: string;
	index: number;
	attributes: Attribute[];
}

export interface Igloo {
	index: number;
	steps: IglooStep[];
}
