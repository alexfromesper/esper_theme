import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
html, body, div, span, object, iframe, hr,
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

em {
	font-style: italic;
}

strong {
	font-weight: bold;
}

html,
body {
	height:100%;
}

/* END RESET */

body {
	background: #fff;
	font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: ${props => props.theme.color.body};
}
section {
    position:relative;
}

p {
    line-height: 1.5;
    font-size:1rem;
}
h1 {
    font-size:2rem;
    font-weight:bold;
}
h2 {
    font-size:1.75rem;
    font-weight:bold;
}
h3 {
    font-size:1.5rem;
    font-weight:bold;
}
h4 {
    font-size:1.25rem;
    font-weight:bold;
}
h5 {
    font-size:1.15rem;
    font-weight:bold;
}
h6 {
    font-size:1.1rem;
    font-weight:bold;
}

a img {
	border: none;
	outline: none;
}

a {
	outline: none;
	text-decoration: none;
}

a:hover {
	color: #999;
}

a,
a:active,
a:visited,
a img {
	outline: none;
}

@media (min-width:992px) {
    h1 {
        font-size:2.5rem
    }
    h2 {
        font-size:2.25rem;
    }
    h3 {
        font-size:2rem;
    }
    h4 {
        font-size:1.75rem;
    }
    h5 {
        font-size:1.5rem;
    }
    h6 {
        font-size:1.25rem;
    }
}
`