import { ParcelStatus } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateParcelStatusDto {
    @IsEnum(ParcelStatus)
    @IsNotEmpty()
    status: ParcelStatus;

    @IsOptional()
    @IsString()
    residentId?: string;
}