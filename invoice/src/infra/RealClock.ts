import Clock from "../domain/Clock";

export default class RealClock implements Clock {
    getToday(): Date {
        return new Date()
    }
}