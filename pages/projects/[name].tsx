import React from "react";
import { NextPage } from "next";

import client, { GET_PINNED_REPOSITORIES } from "../../utils/apollo-client";

const Project: NextPage = () => {
    const data = client.readQuery({
        query: GET_PINNED_REPOSITORIES,
        variables: { username: "SumitNalavade" }
    });
    
    console.log(data);

    return (
        <h1>Howdy World</h1>
    )
}

export default Project;