const Catalog = () => {
  return (
    <>
      <h1>Catálogo de Comida</h1>
      <div className="catalogo">
        <div className="producto">
          <img src="../public/img/comida.jpg" width="200px" alt="Pizza" />
          <h3>Pizza</h3>
          <p>Deliciosa pizza con ingredientes frescos y masa hecha a mano.</p>
          <p className="precio">$12.99</p>
        </div>
        <div className="producto">
          <img src="../public/img/comida.jpg" width="200px" alt="Hamburguesa" />
          <h3>Hamburguesa</h3>
          <p>Jugosa hamburguesa con carne de res y vegetales frescos.</p>
          <p className="precio">$8.99</p>
        </div>
        <div className="producto">
          <img src="../public/img/comida.jpg" width="200px" alt="Ensalada" />
          <h3>Ensalada</h3>
          <p>Ensalada fresca con una mezcla de vegetales orgánicos.</p>
          <p className="precio">$6.99</p>
        </div>
        <div className="producto">
          <img src="../public/img/comida.jpg" width="200px" alt="Pasta" />
          <h3>Pasta</h3>
          <p>Auténtica pasta italiana con salsa de tomate y albahaca.</p>
          <p className="precio">$9.99</p>
        </div>
        <div className="producto">
          <img src="../public/img/comida.jpg" width="200px" alt="Sushi" />
          <h3>Sushi</h3>
          <p>Sushi de alta calidad con pescado fresco y arroz sazonado.</p>
          <p className="precio">$14.99</p>
        </div>
        <div className="producto">
          <img src="../public/img/comida.jpg" width="200px" alt="Tacos" />
          <h3>Tacos</h3>
          <p>Tacos tradicionales con carne asada y guacamole.</p>
          <p className="precio">$7.99</p>
        </div>
      </div>
    </>
  );
};
export default Catalog;
