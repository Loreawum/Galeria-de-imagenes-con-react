import React from "react";

function Header(props) {
  return (
    <div id="header">
      <h1>{props.texto_titulo}</h1>
    </div>
  );
}

export default Header;
