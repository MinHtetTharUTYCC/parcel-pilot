import { generatePickupCode } from "../backend/src/common/utils"

function main() {
    const code = generatePickupCode();
    console.log(code)
}

main();