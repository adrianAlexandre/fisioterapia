import { TimePeriod } from "./TimePeriod";
import { Week } from "./Week";

export interface Month extends TimePeriod {
    weeks: Week[];
}