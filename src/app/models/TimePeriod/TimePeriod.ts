import { TimePeriodType } from "./TimePeriodType";

export interface TimePeriod {
    type: TimePeriodType;
    name?: string;
    value: number;

}