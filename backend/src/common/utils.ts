import { randomBytes } from "crypto"

export function generatePickupCode() {
    const ranB = randomBytes(3);
    const hexed = ranB.toString('hex').toUpperCase();
    return `CONDO-${hexed}`
}