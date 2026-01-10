import { ParcelStatus } from "@prisma/client";
import { IsEnum, IsNotEmpty } from "class-validator";

export class UpdateParcelStatusDto {
    @IsEnum(ParcelStatus)
    @IsNotEmpty()
    status: ParcelStatus;
}