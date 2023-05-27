app.component('carousel', {
    data() {
        return {

        }
    },
    props: {
        title: {
            type: String
        },
        category: {
            type: String
        },
        description: {
            type: String
        },

    },
    template:
        /*html*/
        `
    <div id="carouselRecipes" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselRecipes" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselRecipes" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselRecipes" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner ">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="./images/salmon.jpg" class="justify-content-center img-fluid opacity-75" style= "width:100%; height: 40rem" alt="...">
      <div class="carousel-caption text-light  bg-dark" >
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="./images/pizza-suprema.jpg" class="d-block mw-100 img-fluid " style= "width:100%; height: 45rem" alt="...">
      <div class="carousel-caption d-none d-md-block text-light">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./images/vodka-frutas.jpg" class="d-block img-fluid "style= "width:100%; height: 45rem" alt="...">
      <div class="carousel-caption d-none d-md-block text-light">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselRecipes" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselRecipes" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
    `
})