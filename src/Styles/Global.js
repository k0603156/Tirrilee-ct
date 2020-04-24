import { createGlobalStyle } from "styled-components";
import resetStyle from "styled-reset";

export default createGlobalStyle`
    ${resetStyle};
    @font-face {
    font-family: 'NotoSansCJKkr-Bold';
    src: local('NotoSansCJKkr-Bold'), url(${require("../Assets/NotoSansCJKkr-Bold.otf")}) format('otf');
    font-style: normal;
    font-weight: 600;
}
`;
