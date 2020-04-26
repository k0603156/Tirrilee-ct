import { createGlobalStyle } from "styled-components";
import resetStyle from "styled-reset";

export default createGlobalStyle`
    ${resetStyle};
    @font-face {
        font-family: NotoSansCJKkr-Bold;
        src: local(NotoSansCJKkr-Bold), url(${require("../Assets/fonts/NotoSansCJKkr-Bold.otf")}) format('woff');
        font-style: normal;
        font-weight: normal;
        font-stretch: normal;
    }
    @font-face {
        font-family: NotoSansCJKkr-Regular;
        src: local(NotoSansCJKkr-Regular), url(${require("../Assets/fonts/NotoSansCJKkr-Regular.otf")}) format('woff');
        font-style: normal;
        font-weight: normal;
        font-stretch: normal;
    }
    @font-face {
        font-family: NotoSansCJKkr;
        src: local(NotoSansCJKkr-Light), url(${require("../Assets/fonts/NotoSansCJKkr-Light.otf")}) format('woff');
        font-style: normal;
        font-weight: normal;
        font-stretch: normal;
    }
    body{    
        font-family: NotoSansCJKkr;
        background-color:#f5f5f5;
        *{
            box-sizing:border-box;
        }
    }
    button{
        border: none;
        outline: none;
    }
    input{
        border: solid 1px #e6e6e6;
        border-radius: 4px;
        outline:none
    }
    a{
        text-decoration:none;
    }

`;
