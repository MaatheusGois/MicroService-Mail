import { Injectable } from '@nestjs/common';
import { SendEmailDTO } from './dto/send-email.dto.js';
import sendEmail from './utils/sendEmail';

@Injectable()
export class AppService {
  async sendEmail(sendEmailDto: SendEmailDTO) {
    try {
      const options = sendEmail.config(sendEmailDto)
      const content = await sendEmail.send(options)
      return content
    } catch (error) {
      console.error(error)
      throw error
    }

  }
}
