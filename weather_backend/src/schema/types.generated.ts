import { type GraphQLResolveInfo } from 'graphql';
import {
  type WeatherDataModel,
  type CurrentUnitsModel,
  type CurrentWeatherModel,
  type HourlyUnitsModel,
  type HourlyWeatherModel
} from '../model/weather';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends Record<string, unknown>> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends Record<string, unknown>, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string, output: string }
  String: { input: string, output: string }
  Boolean: { input: boolean, output: boolean }
  Int: { input: number, output: number }
  Float: { input: number, output: number }
}

export interface CurrentUnits {
  __typename?: 'CurrentUnits'
  interval?: Maybe<Scalars['String']['output']>
  relativeHumidity2m?: Maybe<Scalars['String']['output']>
  temperature2m?: Maybe<Scalars['String']['output']>
  time?: Maybe<Scalars['String']['output']>
  windSpeed10m?: Maybe<Scalars['String']['output']>
}

export interface CurrentWeather {
  __typename?: 'CurrentWeather'
  interval?: Maybe<Scalars['Int']['output']>
  relativeHumidity2m?: Maybe<Scalars['Int']['output']>
  temperature2m?: Maybe<Scalars['Float']['output']>
  time?: Maybe<Scalars['String']['output']>
  windSpeed10m?: Maybe<Scalars['Float']['output']>
}

export interface HourlyUnits {
  __typename?: 'HourlyUnits'
  relativeHumidity2m?: Maybe<Scalars['String']['output']>
  temperature2m?: Maybe<Scalars['String']['output']>
  time?: Maybe<Scalars['String']['output']>
  windSpeed10m?: Maybe<Scalars['String']['output']>
}

export interface HourlyWeather {
  __typename?: 'HourlyWeather'
  relativeHumidity2m?: Maybe<Array<Maybe<Scalars['Int']['output']>>>
  temperature2m?: Maybe<Array<Maybe<Scalars['Float']['output']>>>
  time?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  windSpeed10m?: Maybe<Array<Maybe<Scalars['Float']['output']>>>
}

export interface Query {
  __typename?: 'Query'
  getWeatherData?: Maybe<WeatherData>
}

export interface QuerygetWeatherDataArgs {
  latitude: Scalars['Float']['input']
  longitude: Scalars['Float']['input']
}

export interface WeatherData {
  __typename?: 'WeatherData'
  current?: Maybe<CurrentWeather>
  currentUnits?: Maybe<CurrentUnits>
  elevation?: Maybe<Scalars['Float']['output']>
  generationtimeMs?: Maybe<Scalars['Float']['output']>
  hourly?: Maybe<HourlyWeather>
  hourlyUnits?: Maybe<HourlyUnits>
  latitude?: Maybe<Scalars['Float']['output']>
  longitude?: Maybe<Scalars['Float']['output']>
  timezone?: Maybe<Scalars['String']['output']>
  timezoneAbbreviation?: Maybe<Scalars['String']['output']>
  utcOffsetSeconds?: Maybe<Scalars['Int']['output']>
}

export type ResolverTypeWrapper<T> = Promise<T> | T;

export interface ResolverWithResolve<TResult, TParent, TContext, TArgs> {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export interface ResolversTypes {
  CurrentUnits: ResolverTypeWrapper<CurrentUnitsModel>
  String: ResolverTypeWrapper<Scalars['String']['output']>
  CurrentWeather: ResolverTypeWrapper<CurrentWeatherModel>
  Int: ResolverTypeWrapper<Scalars['Int']['output']>
  Float: ResolverTypeWrapper<Scalars['Float']['output']>
  HourlyUnits: ResolverTypeWrapper<HourlyUnitsModel>
  HourlyWeather: ResolverTypeWrapper<HourlyWeatherModel>
  Query: ResolverTypeWrapper<{}>
  WeatherData: ResolverTypeWrapper<WeatherDataModel>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>
}

/** Mapping between all available schema types and the resolvers parents */
export interface ResolversParentTypes {
  CurrentUnits: CurrentUnitsModel
  String: Scalars['String']['output']
  CurrentWeather: CurrentWeatherModel
  Int: Scalars['Int']['output']
  Float: Scalars['Float']['output']
  HourlyUnits: HourlyUnitsModel
  HourlyWeather: HourlyWeatherModel
  Query: {}
  WeatherData: WeatherDataModel
  Boolean: Scalars['Boolean']['output']
}

export interface CurrentUnitsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CurrentUnits'] = ResolversParentTypes['CurrentUnits'],
> {
  interval?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  relativeHumidity2m?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  temperature2m?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  windSpeed10m?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface CurrentWeatherResolvers<
  ContextType = any,
  ParentType extends
  ResolversParentTypes['CurrentWeather'] = ResolversParentTypes['CurrentWeather'],
> {
  interval?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  relativeHumidity2m?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  temperature2m?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  windSpeed10m?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface HourlyUnitsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HourlyUnits'] = ResolversParentTypes['HourlyUnits'],
> {
  relativeHumidity2m?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  temperature2m?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  windSpeed10m?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface HourlyWeatherResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HourlyWeather'] = ResolversParentTypes['HourlyWeather'],
> {
  relativeHumidity2m?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>
  temperature2m?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>
  time?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>
  windSpeed10m?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> {
  getWeatherData?: Resolver<
  Maybe<ResolversTypes['WeatherData']>,
  ParentType,
  ContextType,
  RequireFields<QuerygetWeatherDataArgs, 'latitude' | 'longitude'>
  >
}

export interface WeatherDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['WeatherData'] = ResolversParentTypes['WeatherData'],
> {
  current?: Resolver<Maybe<ResolversTypes['CurrentWeather']>, ParentType, ContextType>
  currentUnits?: Resolver<Maybe<ResolversTypes['CurrentUnits']>, ParentType, ContextType>
  elevation?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  generationtimeMs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  hourly?: Resolver<Maybe<ResolversTypes['HourlyWeather']>, ParentType, ContextType>
  hourlyUnits?: Resolver<Maybe<ResolversTypes['HourlyUnits']>, ParentType, ContextType>
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  timezoneAbbreviation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  utcOffsetSeconds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface Resolvers<ContextType = any> {
  CurrentUnits?: CurrentUnitsResolvers<ContextType>
  CurrentWeather?: CurrentWeatherResolvers<ContextType>
  HourlyUnits?: HourlyUnitsResolvers<ContextType>
  HourlyWeather?: HourlyWeatherResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  WeatherData?: WeatherDataResolvers<ContextType>
}
