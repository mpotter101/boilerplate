// Constants
let PLANCK = 6.6260695729E-34;
let BOLTZMANN = 1.380648813E-23;
let SPEED_OF_LIGHT = 3.00E+08;

// Combined Constants
let PLANCK_NUMERATOR = 2 * PLANCK * (SPEED_OF_LIGHT * SPEED_OF_LIGHT);
let PLANCK_TIMES_SPEED_OF_LIGHT = PLANCK * SPEED_OF_LIGHT;

// Import Objects

export default class Calculator {
    constructor (config) {
        console.log ('Booting calculator with:', config)
    }

    planck (wavelengthInNM, temperature) {
        // convert nanometers to centimeters
        let wl = wavelengthInNM * 0.000000001

        // Perform planck function in steps
        let numerator = PLANCK_NUMERATOR / ( Math.pow( wl, 5 ) )
        let exponent = Math.exp ( PLANCK_TIMES_SPEED_OF_LIGHT / (  wl * BOLTZMANN * temperature ) )
        let denominator = ( 1 / ( exponent - 1 ) )

        // Combine steps
        let result = numerator * denominator

        // Certain temperatures and wavelength combinations result in NaN
        if (isNaN (result)) { result = 0 }

        return result
    }
}
