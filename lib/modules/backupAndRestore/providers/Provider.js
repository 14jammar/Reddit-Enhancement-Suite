/* @flow */

/* eslint-disable no-unused-vars */
export class Provider {
	static key = 'abstract';
	static text = 'Abstract';
	static notifyBackupDone = true;
	static supportsAutomaticBackups = false;

	init(): Promise<this> {
		return Promise.resolve(this);
	}

	read(): Promise<string> { throw new Error('unimplemented'); }

	write(data: string): Promise<void> { throw new Error('unimplemented'); }
}
