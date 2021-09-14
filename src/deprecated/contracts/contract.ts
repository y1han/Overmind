// Contracts - contains code for making agreements with other players

export abstract class Contract {

	constructor() {

	}

	abstract isValid(): boolean;

	abstract run(): any;
}


