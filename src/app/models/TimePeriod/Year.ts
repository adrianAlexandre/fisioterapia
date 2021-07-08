import { TimePeriod } from "./TimePeriod";
import { Month } from "./Month";

export interface Year extends TimePeriod {
    months: Month[];
}