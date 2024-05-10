import { IsBoolean, IsIn, IsNumberString, IsString, Length, MaxLength, MinLength } from "class-validator";

export class CreateMemberDto {
  @IsNumberString()
  @Length(8)
  dni: string;

  @IsString()
  name: string;

  @IsString()
  lastname: string;

  @IsString()
  @IsIn(['Titular','Alterno'])
  type: string;

  @IsBoolean()
  active: boolean;
}
