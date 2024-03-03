import { ApolloServerErrorCode } from '@apollo/server/errors';
import { GraphQLError } from 'graphql';
import type { QueryResolvers } from './../../../types.generated';

export const getWeatherData: NonNullable<QueryResolvers['getWeatherData']> = async (
  _parent,
  { latitude, longitude },
  _ctx
) => {
  // Verify latitude
  if (latitude < -90 || latitude > 90) {
    throw new GraphQLError('Latitude must be between -90 and 90 degrees.', {
      extensions: {
        code: ApolloServerErrorCode.BAD_USER_INPUT
      }
    });
  }

  // Verify longitude
  if (longitude < -180 || longitude > 180) {
    throw new GraphQLError('Longitude must be between -180 and 180 degrees.', {
      extensions: {
        code: ApolloServerErrorCode.BAD_USER_INPUT
      }
    });
  }

  try {
    return _ctx.dataSources.weatherAPI.getWeatherData(longitude, latitude);
  } catch (error) {
    _ctx.logger.error('GraphQL Error', { error });
    throw new GraphQLError('An error occurred while fetching weather data.', {
      extensions: {
        code: ApolloServerErrorCode.INTERNAL_SERVER_ERROR
      }
    });
  }
};
