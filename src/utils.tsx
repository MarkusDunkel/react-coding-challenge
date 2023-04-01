import { ForecastRunDto } from "./models";

export function isForecast(fc: any): fc is ForecastRunDto {
    return (
        fc.hasOwnProperty('id')
        && fc.hasOwnProperty('name')
        && fc.hasOwnProperty('user')
        && fc.user.hasOwnProperty('firstname')
        && fc.user.hasOwnProperty('lastname')
        && fc.user.hasOwnProperty('email')
        && fc.hasOwnProperty('creationDate')
        && fc.hasOwnProperty('period')
        && fc.period.hasOwnProperty('start')
        && fc.period.hasOwnProperty('end')
        && typeof fc.id === 'string'
        && typeof fc.name === 'string'
        && typeof fc.user.firstname === 'string'
        && typeof fc.user.lastname === 'string'
        && typeof fc.user.email === 'string'
        && new Date(fc.creationDate) instanceof Date
        && new Date(fc.period.start) instanceof Date
        && new Date(fc.period.end) instanceof Date
    );
}

export function filterForCorrectType(fc: any): ForecastRunDto[] {
    const typeSafeForecastData: ForecastRunDto[] = [];

    for (let i = 0; i < fc.length; i++) {
        if (fc[i] && isForecast(fc[i])) {
            typeSafeForecastData.push(fc[i]);
        }
    }
    return (typeSafeForecastData);
}