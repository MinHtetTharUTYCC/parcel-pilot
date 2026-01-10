import { randomBytes } from "crypto"

export function generatePickupCode() {
    const ranB = randomBytes(3);
    console.log(ranB)
    const hexed = ranB.toString('hex').toUpperCase();
    console.log(hexed)
    return `CONDO-${hexed}`

}