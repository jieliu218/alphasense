import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "\n  fragment WeatherCurrentF on WeatherData {\n    current {\n      time\n      interval\n      temperature2m\n      windSpeed10m\n      relativeHumidity2m\n    }\n    currentUnits {\n      time\n      interval\n      temperature2m\n      windSpeed10m\n      relativeHumidity2m\n    }\n  }\n":
    types.WeatherCurrentFFragmentDoc,
  "\n  fragment WeatherHourlyF on WeatherData {\n    hourly {\n      time\n      temperature2m\n      relativeHumidity2m\n      windSpeed10m\n    }\n    hourlyUnits {\n      time\n      temperature2m\n      relativeHumidity2m\n      windSpeed10m\n    }\n  }\n":
    types.WeatherHourlyFFragmentDoc,
  "\n    query GetWeatherData(\n      $latitude: Float!\n      $longitude: Float!\n      $showCurrent: Boolean!\n      $showHourly: Boolean!\n    ) {\n      getWeatherData(latitude: $latitude, longitude: $longitude) {\n        latitude\n        longitude\n        ...WeatherCurrentF @include(if: $showCurrent)\n        ...WeatherHourlyF @include(if: $showHourly)\n      }\n    }\n  ":
    types.GetWeatherDataDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment WeatherCurrentF on WeatherData {\n    current {\n      time\n      interval\n      temperature2m\n      windSpeed10m\n      relativeHumidity2m\n    }\n    currentUnits {\n      time\n      interval\n      temperature2m\n      windSpeed10m\n      relativeHumidity2m\n    }\n  }\n",
): (typeof documents)["\n  fragment WeatherCurrentF on WeatherData {\n    current {\n      time\n      interval\n      temperature2m\n      windSpeed10m\n      relativeHumidity2m\n    }\n    currentUnits {\n      time\n      interval\n      temperature2m\n      windSpeed10m\n      relativeHumidity2m\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment WeatherHourlyF on WeatherData {\n    hourly {\n      time\n      temperature2m\n      relativeHumidity2m\n      windSpeed10m\n    }\n    hourlyUnits {\n      time\n      temperature2m\n      relativeHumidity2m\n      windSpeed10m\n    }\n  }\n",
): (typeof documents)["\n  fragment WeatherHourlyF on WeatherData {\n    hourly {\n      time\n      temperature2m\n      relativeHumidity2m\n      windSpeed10m\n    }\n    hourlyUnits {\n      time\n      temperature2m\n      relativeHumidity2m\n      windSpeed10m\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n    query GetWeatherData(\n      $latitude: Float!\n      $longitude: Float!\n      $showCurrent: Boolean!\n      $showHourly: Boolean!\n    ) {\n      getWeatherData(latitude: $latitude, longitude: $longitude) {\n        latitude\n        longitude\n        ...WeatherCurrentF @include(if: $showCurrent)\n        ...WeatherHourlyF @include(if: $showHourly)\n      }\n    }\n  ",
): (typeof documents)["\n    query GetWeatherData(\n      $latitude: Float!\n      $longitude: Float!\n      $showCurrent: Boolean!\n      $showHourly: Boolean!\n    ) {\n      getWeatherData(latitude: $latitude, longitude: $longitude) {\n        latitude\n        longitude\n        ...WeatherCurrentF @include(if: $showCurrent)\n        ...WeatherHourlyF @include(if: $showHourly)\n      }\n    }\n  "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
