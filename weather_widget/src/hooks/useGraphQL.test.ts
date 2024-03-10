import { renderHook } from "@testing-library/react";
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { useGraphQL } from "./useGraphQL";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";

jest.mock("@tanstack/react-query", () => ({
  ...jest.requireActual("@tanstack/react-query"),
  useQuery: jest.fn(),
}));

jest.mock("graphql-request", () => jest.fn());

describe("useGraphQL", () => {
  it("calls useQuery with the correct parameters", async () => {
    const mockDocument = {
      definitions: [
        {
          kind: "OperationDefinition",
          name: { value: "TestQuery" },
        },
      ],
    } as unknown as TypedDocumentNode<any, any>;
    const variables = { test: "variable" };

    renderHook(() => useGraphQL(mockDocument, variables));

    expect(useQuery).toHaveBeenCalledWith({
      queryKey: [{ value: "TestQuery" }, { test: "variable" }],
      queryFn: expect.any(Function),
      refetchOnWindowFocus: true,
      refetchInterval: 60000,
    });

    const queryFn = (useQuery as jest.MockedFunction<typeof useQuery>).mock
      .calls[0][0].queryFn as CallableFunction;
    if (queryFn) {
      await queryFn();
    }
    expect(request).toHaveBeenCalledWith(
      "https://alphasense-weather-app-stxq8.ondigitalocean.app/index",
      mockDocument,
      variables,
    );
  });
});
