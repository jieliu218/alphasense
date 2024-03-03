import { type ApolloServer } from '@apollo/server';
import { type IncomingMessage } from 'http';
import type { Logger } from 'winston';

import { WeatherAPI } from '../datasources';

export class ContextValue {
  public dataSources: {
    weatherAPI: WeatherAPI
  };

  public logger: Logger;

  constructor ({
    server,
    logger
  }: {
    req: IncomingMessage
    server: ApolloServer<ContextValue>
    logger: Logger
  }) {
    const { cache } = server;
    this.dataSources = {
      weatherAPI: new WeatherAPI({ cache, contextValue: this })
    };
    this.logger = logger;
  }
}
