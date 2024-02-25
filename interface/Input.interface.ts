import React from "react";

export interface IInput {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>
}