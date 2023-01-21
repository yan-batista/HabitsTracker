import { createGlobalStyle } from "styled-components";
import colors from "./colors";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *, button, input {
        color: white;
    }

    body {
        background-color: ${colors.bg};
    }
`;
