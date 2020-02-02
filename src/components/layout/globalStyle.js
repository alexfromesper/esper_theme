import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, code,
del, dfn, em, img, q, dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
  margin: 0;
  padding: 0;
  border: 0;
  font-weight: inherit;
  font-style: inherit;
  font-size: 100%;
  font-family: inherit;
}
html {
    box-sizing: border-box;
}
* {
    box-sizing: inherit;
}
*:before {
    box-sizing: inherit;
}
*:after {
    box-sizing: inherit;
}
em {
	font-style: italic;
}
strong {
	font-weight: bold;
}
html,
body {
	margin:0;
	padding:0;
	height:100%;
}
body {
    background-color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    color:${props => props.theme.color.body};
    font-size: 1rem;
    font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-feature-settings: 'kern' 1, 'dlig' 1, 'opbd' 1, 'ss01' 1;
    text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
}
*, :after, :before {
    box-sizing: border-box;
}
ul {
    list-style:none;
    margin:0;
    padding:0;
}
p {
    line-height: 1.5;
}
img {
    max-width:100%;
}
h1 a,
h2 a,
h3 a,
h4 a,
h5 a,
h6 a {}
a img {
	border: none;
	outline: none;
}
a {
    color: inherit;
	outline: none;
    text-decoration: none;
    line-height: inherit;
}
a,
a:active,
a:visited,
a img {
	outline: none;
}
`