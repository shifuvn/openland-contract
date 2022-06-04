import React from "react";

const AllNFTsPage = React.lazy(() => import("./features/allNFTs"));
const Collections = React.lazy(() => import("./features/collections"));
const Collection = React.lazy(() => import("./features/collection"));
const Item = React.lazy(() => import("./features/itemDetails"));

export const ALL_NFTS_PATH = "/explore-all-nfts";
export const ALL_COLLECTIONS_PATH = "/explore-collections";
export const COLLECTION_PATH = "/collection";
export const HOME_PATH = "/home";
export const ITEM_PATH = "/item";

type routeType = {
    path: string;
    element: JSX.Element;
};

const publicRoute: routeType[] = [
    {
        path: ALL_NFTS_PATH,
        element: <AllNFTsPage />,
    },
    {
        path: ALL_COLLECTIONS_PATH,
        element: <Collections />,
    },
    {
        path: COLLECTION_PATH + "/:id",
        element: <Collection />,
    },
    {
        path: ITEM_PATH + "/:id",
        element: <Item />,
    },
];

const commonRoute: routeType[] = [];

const protectedRoute: routeType[] = [];

const managerRoute: routeType[] = [];

const routes = {
    publicRoute,
    protectedRoute,
    commonRoute,
    managerRoute,
};

export default routes;