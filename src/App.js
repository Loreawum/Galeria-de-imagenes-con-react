import "./App.css";
//import del css del componente Cards
import "./componenrtes/Cards_style.css";
//import del componente Header
import Header from "./componenrtes/Header";
//import del componente Cards
import Cards from "./componenrtes/Cards";
//import del componente Footer
import Footer from "./componenrtes/Footer";
//import del css del componente Footer
import "./componenrtes/Footer_style.css";

function App() {
  return (
    <main className="App">
      <Header texto_titulo="Galería de Imágenes con React" />
      <section class="container_galeria">
        <Cards
          titulo_img="Imágen 1"
          descripcion="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, corrupti eum recusandae, debitis sit natus harum, eius nobis cum totam ullam maxime vitae dignissimos voluptate tenetur vero asperiores? Aut, ducimus."
          src_img="https://picsum.photos/id/247/200/300"
        />
        <Cards
          titulo_img="Imágen 2"
          descripcion="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, corrupti eum recusandae, debitis sit natus harum, eius nobis cum totam ullam maxime vitae dignissimos voluptate tenetur vero asperiores? Aut, ducimus."
          src_img="https://picsum.photos/id/239/200/300"
        />
        <Cards
          titulo_img="Imágen 3"
          descripcion="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, corrupti eum recusandae, debitis sit natus harum, eius nobis cum totam ullam maxime vitae dignissimos voluptate tenetur vero asperiores? Aut, ducimus."
          src_img="https://picsum.photos/id/157/200/300"
        />
        <Cards
          titulo_img="Imágen 4"
          descripcion="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, corrupti eum recusandae, debitis sit natus harum, eius nobis cum totam ullam maxime vitae dignissimos voluptate tenetur vero asperiores? Aut, ducimus."
          src_img="https://picsum.photos/id/262/200/300"
        />
      </section>

      <Footer />
    </main>
  );
}

export default App;
