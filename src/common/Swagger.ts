import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class Swagger {
  /**
   * @param {INestApplication} app
   */
  public static forApp(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle('Nest Starter')
      .setDescription('Test Documentation')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, config, {
      operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
    });
    SwaggerModule.setup('doc', app, document);
  }
}
