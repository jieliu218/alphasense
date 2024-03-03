import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { type TypeSource, type IResolvers } from '@graphql-tools/utils';
import { config as dotenvConfig } from 'dotenv';
import { typeDefs } from './schema/typeDefs.generated';
import { resolvers } from './schema/resolvers.generated';
import logger from './utils/logger';
import { ContextValue } from './utils/context';

dotenvConfig();

async function startServer (typeDefs: TypeSource, resolvers: IResolvers<any>): Promise<void> {
  const server = new ApolloServer<ContextValue>({
    typeDefs,
    resolvers,
    logger,
    formatError: (error) => {
      logger.error('GraphQL Error', { error });
      return error;
    }
  });

  const { url } = await startStandaloneServer<ContextValue>(server, {
    context: async ({ req }) => new ContextValue({ req, server, logger })
  });

  console.info(`🚀 Server listening at: ${url}`);
}

void startServer(typeDefs, resolvers as IResolvers<any>);
