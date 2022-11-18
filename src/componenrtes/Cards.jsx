import React from "react";

function Cards(props) {
  return (
    <article class="container">
      <div class="card">
        <div class="cont_img">
          <img src={props.src_img} alt="{porps.titulo_img}" />
        </div>
        <div class="descripcion">
          <h3>{props.titulo_img}</h3>
          <p>{props.descripcion}</p>
        </div>
      </div>
    </article>
  );
}

export default Cards;
