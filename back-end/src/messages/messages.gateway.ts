import { Injectable, Logger, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { Repository } from 'typeorm';
import { CreateMessageDTO } from './dtos/create-message.dto';
import Message from './entities/message.entity';

@Injectable()
@WebSocketGateway({ transports: ['websocket'] })
export class MessagesGateway
  implements OnGatewayConnection, OnGatewayDisconnect {
  private readonly logger: Logger;

  constructor(
    @InjectRepository(Message)
    private readonly messagesRepository: Repository<Message>,
  ) {
    this.logger = new Logger(MessagesGateway.name);
  }

  @SubscribeMessage('message')
  @UsePipes(ValidationPipe)
  async handleMessage(
    @MessageBody() createMessageDTO: CreateMessageDTO,
    @ConnectedSocket() client: Socket,
  ): Promise<Message> {
    const createdMessage = this.messagesRepository.create(createMessageDTO);

    await this.messagesRepository.save(createdMessage);

    client.emit('get-message', { message: createdMessage });
    return createdMessage;
  }

  handleConnection(client: Socket) {
    this.logger.verbose(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.verbose(`Client disconnected: ${client.id}`);
  }
}
