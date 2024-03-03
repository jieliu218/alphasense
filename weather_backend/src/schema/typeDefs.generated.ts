import type { DocumentNode } from 'graphql';
export const typeDefs = {
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 5, end: 10 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'getWeatherData', loc: { start: 15, end: 29 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'latitude', loc: { start: 30, end: 38 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'Float', loc: { start: 40, end: 45 } },
                  loc: { start: 40, end: 45 }
                },
                loc: { start: 40, end: 46 }
              },
              directives: [],
              loc: { start: 30, end: 46 }
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'longitude', loc: { start: 48, end: 57 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'Float', loc: { start: 59, end: 64 } },
                  loc: { start: 59, end: 64 }
                },
                loc: { start: 59, end: 65 }
              },
              directives: [],
              loc: { start: 48, end: 65 }
            }
          ],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'WeatherData', loc: { start: 68, end: 79 } },
            loc: { start: 68, end: 79 }
          },
          directives: [],
          loc: { start: 15, end: 79 }
        }
      ],
      loc: { start: 0, end: 81 }
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'WeatherData', loc: { start: 88, end: 99 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'latitude', loc: { start: 104, end: 112 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Float', loc: { start: 114, end: 119 } },
            loc: { start: 114, end: 119 }
          },
          directives: [],
          loc: { start: 104, end: 119 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'longitude', loc: { start: 122, end: 131 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Float', loc: { start: 133, end: 138 } },
            loc: { start: 133, end: 138 }
          },
          directives: [],
          loc: { start: 122, end: 138 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'generationtimeMs', loc: { start: 141, end: 157 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Float', loc: { start: 159, end: 164 } },
            loc: { start: 159, end: 164 }
          },
          directives: [],
          loc: { start: 141, end: 164 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'utcOffsetSeconds', loc: { start: 167, end: 183 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Int', loc: { start: 185, end: 188 } },
            loc: { start: 185, end: 188 }
          },
          directives: [],
          loc: { start: 167, end: 188 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'timezone', loc: { start: 191, end: 199 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'String', loc: { start: 201, end: 207 } },
            loc: { start: 201, end: 207 }
          },
          directives: [],
          loc: { start: 191, end: 207 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'timezoneAbbreviation', loc: { start: 210, end: 230 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'String', loc: { start: 232, end: 238 } },
            loc: { start: 232, end: 238 }
          },
          directives: [],
          loc: { start: 210, end: 238 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'elevation', loc: { start: 241, end: 250 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Float', loc: { start: 252, end: 257 } },
            loc: { start: 252, end: 257 }
          },
          directives: [],
          loc: { start: 241, end: 257 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'currentUnits', loc: { start: 260, end: 272 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'CurrentUnits', loc: { start: 274, end: 286 } },
            loc: { start: 274, end: 286 }
          },
          directives: [],
          loc: { start: 260, end: 286 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'current', loc: { start: 289, end: 296 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'CurrentWeather', loc: { start: 298, end: 312 } },
            loc: { start: 298, end: 312 }
          },
          directives: [],
          loc: { start: 289, end: 312 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'hourlyUnits', loc: { start: 315, end: 326 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'HourlyUnits', loc: { start: 328, end: 339 } },
            loc: { start: 328, end: 339 }
          },
          directives: [],
          loc: { start: 315, end: 339 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'hourly', loc: { start: 342, end: 348 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'HourlyWeather', loc: { start: 350, end: 363 } },
            loc: { start: 350, end: 363 }
          },
          directives: [],
          loc: { start: 342, end: 363 }
        }
      ],
      loc: { start: 83, end: 365 }
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'CurrentUnits', loc: { start: 372, end: 384 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'time', loc: { start: 389, end: 393 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'String', loc: { start: 395, end: 401 } },
            loc: { start: 395, end: 401 }
          },
          directives: [],
          loc: { start: 389, end: 401 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'interval', loc: { start: 404, end: 412 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'String', loc: { start: 414, end: 420 } },
            loc: { start: 414, end: 420 }
          },
          directives: [],
          loc: { start: 404, end: 420 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'temperature2m', loc: { start: 423, end: 436 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'String', loc: { start: 438, end: 444 } },
            loc: { start: 438, end: 444 }
          },
          directives: [],
          loc: { start: 423, end: 444 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'windSpeed10m', loc: { start: 447, end: 459 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'String', loc: { start: 461, end: 467 } },
            loc: { start: 461, end: 467 }
          },
          directives: [],
          loc: { start: 447, end: 467 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'relativeHumidity2m', loc: { start: 470, end: 488 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'String', loc: { start: 490, end: 496 } },
            loc: { start: 490, end: 496 }
          },
          directives: [],
          loc: { start: 470, end: 496 }
        }
      ],
      loc: { start: 367, end: 498 }
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'CurrentWeather', loc: { start: 505, end: 519 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'time', loc: { start: 524, end: 528 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'String', loc: { start: 530, end: 536 } },
            loc: { start: 530, end: 536 }
          },
          directives: [],
          loc: { start: 524, end: 536 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'interval', loc: { start: 539, end: 547 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Int', loc: { start: 549, end: 552 } },
            loc: { start: 549, end: 552 }
          },
          directives: [],
          loc: { start: 539, end: 552 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'temperature2m', loc: { start: 555, end: 568 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Float', loc: { start: 570, end: 575 } },
            loc: { start: 570, end: 575 }
          },
          directives: [],
          loc: { start: 555, end: 575 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'windSpeed10m', loc: { start: 578, end: 590 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Float', loc: { start: 592, end: 597 } },
            loc: { start: 592, end: 597 }
          },
          directives: [],
          loc: { start: 578, end: 597 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'relativeHumidity2m', loc: { start: 600, end: 618 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Int', loc: { start: 620, end: 623 } },
            loc: { start: 620, end: 623 }
          },
          directives: [],
          loc: { start: 600, end: 623 }
        }
      ],
      loc: { start: 500, end: 625 }
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'HourlyUnits', loc: { start: 632, end: 643 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'time', loc: { start: 648, end: 652 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'String', loc: { start: 654, end: 660 } },
            loc: { start: 654, end: 660 }
          },
          directives: [],
          loc: { start: 648, end: 660 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'temperature2m', loc: { start: 663, end: 676 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'String', loc: { start: 678, end: 684 } },
            loc: { start: 678, end: 684 }
          },
          directives: [],
          loc: { start: 663, end: 684 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'relativeHumidity2m', loc: { start: 687, end: 705 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'String', loc: { start: 707, end: 713 } },
            loc: { start: 707, end: 713 }
          },
          directives: [],
          loc: { start: 687, end: 713 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'windSpeed10m', loc: { start: 716, end: 728 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'String', loc: { start: 730, end: 736 } },
            loc: { start: 730, end: 736 }
          },
          directives: [],
          loc: { start: 716, end: 736 }
        }
      ],
      loc: { start: 627, end: 738 }
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'HourlyWeather', loc: { start: 745, end: 758 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'time', loc: { start: 763, end: 767 } },
          arguments: [],
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 770, end: 776 } },
              loc: { start: 770, end: 776 }
            },
            loc: { start: 769, end: 777 }
          },
          directives: [],
          loc: { start: 763, end: 777 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'temperature2m', loc: { start: 780, end: 793 } },
          arguments: [],
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Float', loc: { start: 796, end: 801 } },
              loc: { start: 796, end: 801 }
            },
            loc: { start: 795, end: 802 }
          },
          directives: [],
          loc: { start: 780, end: 802 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'relativeHumidity2m', loc: { start: 805, end: 823 } },
          arguments: [],
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Int', loc: { start: 826, end: 829 } },
              loc: { start: 826, end: 829 }
            },
            loc: { start: 825, end: 830 }
          },
          directives: [],
          loc: { start: 805, end: 830 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'windSpeed10m', loc: { start: 833, end: 845 } },
          arguments: [],
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Float', loc: { start: 848, end: 853 } },
              loc: { start: 848, end: 853 }
            },
            loc: { start: 847, end: 854 }
          },
          directives: [],
          loc: { start: 833, end: 854 }
        }
      ],
      loc: { start: 740, end: 856 }
    }
  ],
  loc: { start: 0, end: 857 }
} as unknown as DocumentNode;
