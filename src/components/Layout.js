import React from "react";
import "semantic-ui-less/semantic.less";

const layout = ({ children, isHome, path }) => {
  return (
    <div>
      <div>I am the layout component</div>
        {children}
    </div>
  )


}
export default layout