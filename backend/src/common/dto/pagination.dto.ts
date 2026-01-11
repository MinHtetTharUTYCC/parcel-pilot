import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class PaginationDto {
    @IsOptional()
    @IsString()
    readonly cursor?: string;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    readonly limit?: number = 10;
}