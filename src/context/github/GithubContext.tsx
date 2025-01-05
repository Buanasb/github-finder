import { createContext } from "react";
import { GithubContextType } from "../types";

export const GithubContext = createContext<GithubContextType | null>(null);
