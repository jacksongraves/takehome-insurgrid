import { validateGeico } from "./geico";
import { validateLemonade } from "./lemonade";
import { validateNationwide } from "./nationwide";
import { validateProgressive } from "./progressive";
import { validateUSAA } from "./usaa";
import { validateStateFarm } from "./statefarm";
import { validateLibertyMutual } from "./libertymutual";

export const validate = (carrierId: number) => {
	switch (carrierId) {
		case 1:
			validateProgressive();
			break;
		default:
			break;
	}
};
