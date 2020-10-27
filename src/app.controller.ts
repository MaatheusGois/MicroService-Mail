import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { SendEmailDTO } from './dto/send-email.dto';

@ApiTags('Emails')
@Controller('emails')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  sendEmail(@Body() sendEmailDto: SendEmailDTO): any {
    return this.appService.sendEmail(sendEmailDto);
  }
}
