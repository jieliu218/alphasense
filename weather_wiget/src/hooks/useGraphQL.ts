/* eslint-disable @typescript-eslint/no-explicit-any */
import request from "graphql-request";
import { type TypedDocumentNode } from "@graphql-typed-document-node/core";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { OperationDefinitionNode } from "graphql";

export function useGraphQL<
  TResult,
  TVariables extends Record<string, any> | undefined,
>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables: TVariables,
): UseQueryResult<TResult> {
  const operation = document.definitions.find(
    (def): def is OperationDefinitionNode =>
      def.kind === "OperationDefinition" && !!def.name,
  );
  if (!operation?.name) {
    throw new Error("GraphQL operation must have a name");
  }
  const queryKey = [operation?.name, variables] as const;

  return useQuery({
    queryKey,
    queryFn: async () =>
      request(
        "https://alphasense-weather-app-stxq8.ondigitalocean.app/index",
        document,
        variables,
      ),
  });
}
