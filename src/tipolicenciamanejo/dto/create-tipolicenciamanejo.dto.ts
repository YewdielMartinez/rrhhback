import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateTipolicenciamanejoDto {
  @IsString()
  @ApiProperty()
  nombreLicencia: string;
}
