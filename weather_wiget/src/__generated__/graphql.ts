import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type CurrentUnits = {
  __typename?: "CurrentUnits";
  interval?: Maybe<Scalars["String"]["output"]>;
  relativeHumidity2m?: Maybe<Scalars["String"]["output"]>;
  temperature2m?: Maybe<Scalars["String"]["output"]>;
  time?: Maybe<Scalars["String"]["output"]>;
  windSpeed10m?: Maybe<Scalars["String"]["output"]>;
};

export type CurrentWeather = {
  __typename?: "CurrentWeather";
  interval?: Maybe<Scalars["Int"]["output"]>;
  relativeHumidity2m?: Maybe<Scalars["Int"]["output"]>;
  temperature2m?: Maybe<Scalars["Float"]["output"]>;
  time?: Maybe<Scalars["String"]["output"]>;
  windSpeed10m?: Maybe<Scalars["Float"]["output"]>;
};

export type HourlyUnits = {
  __typename?: "HourlyUnits";
  relativeHumidity2m?: Maybe<Scalars["String"]["output"]>;
  temperature2m?: Maybe<Scalars["String"]["output"]>;
  time?: Maybe<Scalars["String"]["output"]>;
  windSpeed10m?: Maybe<Scalars["String"]["output"]>;
};

export type HourlyWeather = {
  __typename?: "HourlyWeather";
  relativeHumidity2m?: Maybe<Array<Maybe<Scalars["Int"]["output"]>>>;
  temperature2m?: Maybe<Array<Maybe<Scalars["Float"]["output"]>>>;
  time?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  windSpeed10m?: Maybe<Array<Maybe<Scalars["Float"]["output"]>>>;
};

export type Query = {
  __typename?: "Query";
  getWeatherData?: Maybe<WeatherData>;
};

export type QueryGetWeatherDataArgs = {
  latitude: Scalars["Float"]["input"];
  longitude: Scalars["Float"]["input"];
};

export type WeatherData = {
  __typename?: "WeatherData";
  current?: Maybe<CurrentWeather>;
  currentUnits?: Maybe<CurrentUnits>;
  elevation?: Maybe<Scalars["Float"]["output"]>;
  generationtimeMs?: Maybe<Scalars["Float"]["output"]>;
  hourly?: Maybe<HourlyWeather>;
  hourlyUnits?: Maybe<HourlyUnits>;
  latitude?: Maybe<Scalars["Float"]["output"]>;
  longitude?: Maybe<Scalars["Float"]["output"]>;
  timezone?: Maybe<Scalars["String"]["output"]>;
  timezoneAbbreviation?: Maybe<Scalars["String"]["output"]>;
  utcOffsetSeconds?: Maybe<Scalars["Int"]["output"]>;
};

export type WeatherCurrentFFragment = {
  __typename?: "WeatherData";
  current?: {
    __typename?: "CurrentWeather";
    time?: string | null;
    interval?: number | null;
    temperature2m?: number | null;
    windSpeed10m?: number | null;
    relativeHumidity2m?: number | null;
  } | null;
  currentUnits?: {
    __typename?: "CurrentUnits";
    time?: string | null;
    interval?: string | null;
    temperature2m?: string | null;
    windSpeed10m?: string | null;
    relativeHumidity2m?: string | null;
  } | null;
} & { " $fragmentName"?: "WeatherCurrentFFragment" };

export type WeatherHourlyFFragment = {
  __typename?: "WeatherData";
  hourly?: {
    __typename?: "HourlyWeather";
    time?: Array<string | null> | null;
    temperature2m?: Array<number | null> | null;
    relativeHumidity2m?: Array<number | null> | null;
    windSpeed10m?: Array<number | null> | null;
  } | null;
  hourlyUnits?: {
    __typename?: "HourlyUnits";
    time?: string | null;
    temperature2m?: string | null;
    relativeHumidity2m?: string | null;
    windSpeed10m?: string | null;
  } | null;
} & { " $fragmentName"?: "WeatherHourlyFFragment" };

export type GetWeatherDataQueryVariables = Exact<{
  latitude: Scalars["Float"]["input"];
  longitude: Scalars["Float"]["input"];
  showCurrent: Scalars["Boolean"]["input"];
  showHourly: Scalars["Boolean"]["input"];
}>;

export type GetWeatherDataQuery = {
  __typename?: "Query";
  getWeatherData?:
    | ({
        __typename?: "WeatherData";
        latitude?: number | null;
        longitude?: number | null;
      } & {
        " $fragmentRefs"?: {
          WeatherCurrentFFragment: WeatherCurrentFFragment;
          WeatherHourlyFFragment: WeatherHourlyFFragment;
        };
      })
    | null;
};

export const WeatherCurrentFFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "WeatherCurrentF" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "WeatherData" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "current" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "time" } },
                { kind: "Field", name: { kind: "Name", value: "interval" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "temperature2m" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "windSpeed10m" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "relativeHumidity2m" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "currentUnits" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "time" } },
                { kind: "Field", name: { kind: "Name", value: "interval" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "temperature2m" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "windSpeed10m" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "relativeHumidity2m" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<WeatherCurrentFFragment, unknown>;
export const WeatherHourlyFFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "WeatherHourlyF" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "WeatherData" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "hourly" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "time" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "temperature2m" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "relativeHumidity2m" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "windSpeed10m" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "hourlyUnits" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "time" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "temperature2m" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "relativeHumidity2m" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "windSpeed10m" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<WeatherHourlyFFragment, unknown>;
export const GetWeatherDataDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetWeatherData" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "latitude" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "longitude" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "showCurrent" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "Boolean" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "showHourly" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "Boolean" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getWeatherData" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "latitude" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "latitude" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "longitude" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "longitude" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "latitude" } },
                { kind: "Field", name: { kind: "Name", value: "longitude" } },
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "WeatherCurrentF" },
                  directives: [
                    {
                      kind: "Directive",
                      name: { kind: "Name", value: "include" },
                      arguments: [
                        {
                          kind: "Argument",
                          name: { kind: "Name", value: "if" },
                          value: {
                            kind: "Variable",
                            name: { kind: "Name", value: "showCurrent" },
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "WeatherHourlyF" },
                  directives: [
                    {
                      kind: "Directive",
                      name: { kind: "Name", value: "include" },
                      arguments: [
                        {
                          kind: "Argument",
                          name: { kind: "Name", value: "if" },
                          value: {
                            kind: "Variable",
                            name: { kind: "Name", value: "showHourly" },
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "WeatherCurrentF" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "WeatherData" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "current" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "time" } },
                { kind: "Field", name: { kind: "Name", value: "interval" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "temperature2m" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "windSpeed10m" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "relativeHumidity2m" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "currentUnits" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "time" } },
                { kind: "Field", name: { kind: "Name", value: "interval" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "temperature2m" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "windSpeed10m" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "relativeHumidity2m" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "WeatherHourlyF" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "WeatherData" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "hourly" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "time" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "temperature2m" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "relativeHumidity2m" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "windSpeed10m" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "hourlyUnits" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "time" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "temperature2m" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "relativeHumidity2m" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "windSpeed10m" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetWeatherDataQuery, GetWeatherDataQueryVariables>;
