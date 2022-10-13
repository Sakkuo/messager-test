import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IResults } from "../models/IResults";
import { IWorker } from "../models/IWorker";

export const dataAPI = createApi({
    reducerPath: "dataAPI",
    tagTypes: ["Data"],
    baseQuery: fetchBaseQuery({ baseUrl: "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464" }),
    endpoints: (build) => ({
        fetchAllData: build.query<IResults, string>({
            query: (filterType: string) => ({
                url: "/users",
                params: {
                    __example: filterType,
                },
            }),
            providesTags: (result) => ["Data"],
        }),
        fetchTestData: build.query<IResults, string[]>({
            query: (paramsData: string[] ) => ({
                url: `/users`,
                params: {
                    __dynamic: paramsData[0]
                }
            }),
            providesTags: (result) => ["Data"],
        }),
    }),
});
