import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export interface repo {
  name: string;
  description?: string;
  imageUrl: string;
  tags: string[];
  isPrivate: boolean;
}

export class contactForm {
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: "Name must be at least 3 characters long",
  })
  name: string;
  @IsNotEmpty()
  @IsString()
  @IsEmail({}, { message: "Email is not valid" })
  email: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(6, { message: "Content must be at least 6 characters long" })
  message: string;
}
