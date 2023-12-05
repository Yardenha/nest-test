install globaly

```typescript
npm i -g @nestjs/cli
```

create project

```typescript
nest new *PROJECT NAME*
```

## CONFIG

```typescript
npm i --save @nestjs/config
```

_in app.module_

```typescript
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
})
export class AppModule {}
```

_in feature module_

```typescript
@Module({
  imports: [ConfigModule],
  // ...
})
```

_in service_

```typescript
constructor(private configService: ConfigService) {}
```

_in class_

```typescript
// get an environment variable
const dbUser = this.configService.get<string>('DATABASE_USER');
```

## VALIDATION

https://github.com/typestack/class-validator

```typescript
npm i --save class-validator class-transformer
```

_in main.ts_

```typescript
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
```

_dto validation_

```typescript
export class Post {
  @Length(10, 20)
  title: string;

  @Contains('hello')
  text: string;

  @IsInt()
  @Min(0)
  @Max(10)
  rating: number;

  @IsEmail()
  email: string;

  @IsFQDN()
  site: string;

  @IsDate()
  createDate: Date;
}
```

_Validation messages_

```typescript
export class Post {
  @MinLength(10, {
    message: 'Title is too short',
  })
  @MaxLength(50, {
    message: 'Title is too long',
  })
  title: string;
}
```

## SWAGGER

_in main_

```typescript
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
```

_in controller_

```typescript
@ApiTags('Tickets')
@Controller('tickets')
export class TicketsController {
  @Post()
  @ApiOperation({ summary: 'Create new ticket' })
  @ApiCreatedResponse({
    description: 'Ticket created successfuly',
    type: Ticket,
  })
  @ApiForbiddenResponse({ description: 'Forbidden user to create a ticket' })
  @ApiNotFoundResponse({ description: 'Request not found' })


  @Get()
  @ApiOperation({ summary: 'Get all tickets' })
  @ApiOkResponse({
    description: 'Recieved all tickets',
    type: Ticket,
    isArray: true,
  })
}

```

_in entity's & dto's_

```typescript
export class CreateCatDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  breed: string;
}

-----
@ApiProperty({ type: String, enum: TicketStatus })
@ApiProperty({ type: Object, isArray: true })
```

## JWT

https://github.com/monsterlessonsacademy/monsterlessonsacademy/tree/400-nestjs-authentication

## MONGODB

https://docs.nestjs.com/techniques/mongodb

https://youtu.be/hvbIGDlrGJk?si=EfTwMtYrHA-NGb_N

_abstract_
https://youtu.be/OVBx6fqGDOY?si=kL0u1rGwDTwEYkn-
