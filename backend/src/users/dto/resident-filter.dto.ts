import { Transform, Type } from "class-transformer";
import { IsBoolean, IsNumber, IsOptional } from "class-validator";
import { PaginationDto } from "src/common/dto/pagination.dto";

export class ResidentFilterDto extends PaginationDto {
    @IsOptional()
    @Transform(({ value }) => value === "true")
    @IsBoolean()
    readonly pending?: boolean;
}