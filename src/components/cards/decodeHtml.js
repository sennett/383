import React from 'react'

// https://stackoverflow.com/a/42361869/614523

const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

export default renderHTML