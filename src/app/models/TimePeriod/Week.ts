import { TimePeriod } from "./TimePeriod";
import { Day } from "./Day";

export interface Week extends TimePeriod {
    days: Day[];
}