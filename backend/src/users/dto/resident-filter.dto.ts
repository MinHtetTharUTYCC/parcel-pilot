import { Type } from "class-transformer";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";
import { PaginationDto } from "src/common/dto/pagination.dto";

export class ResidentFilterDto extends PaginationDto {
    @IsOptional()
    @Type(() => Boolean)
    @IsBoolean()
    readonly pending?: boolean;
}