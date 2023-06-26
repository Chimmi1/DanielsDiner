app.component('carousel', {
    data() {
        return {

        }
    },
    props: {
        name: {
            type: String,
            default: "recipe name"
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
            <button type="button" data-bs-target="#carouselRecipes" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselRecipes" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselRecipes" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner col-md-3 ">
            <div class="carousel-item active " data-bs-interval="10000">
            <img src="./images/salmon.jpg" class=" img-fluid opacity-75 " style= "width:100%; height: 40rem" alt="...">
              <div class=" col" >
                <div class="p-3 row text-dark bg-light" >
                <h2>Recipe Name</h2>
                <p>With supporting text below as a natural lead-in to additional content.</p>
                    <div class="col text-dark bg-light" >
                      <h4>Category</h4>
                      <h4>Time</h4 >
                      <h4>Level</h4 >
                    </div>
                    <div class="col text-dark bg-light" >
                      <h4>Likes</h4 >
                      <img src=""  alt="...">
                      <img src=""  alt="...">
                    </div>
                    <div >
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
              </div>
            </div>
          </div>
            <div class="carousel-item" data-bs-interval="10000">
            <img src="./images/salmon.jpg" class=" img-fluid opacity-75 " style= "width:100%; height: 40rem" alt="...">
              <div class="col" >
                <div class="p-2 row text-dark bg-light" >
                  <h2>Recipe Name</h2>
                  <p>With supporting text below as a natural lead-in to additional content.</p>
      
                    <div class="col text-dark bg-light" >
                    <h4>Category</h4>
                    <h4>Time</h4 >
                    <h4>Level</h4 >
                    </div>
                    <div class="col text-dark bg-light" >
                    <h4>Likes</h4 >
                    <img src=""  alt="...">
                    <img src=""  alt="...">
                    </div>
                    <div >
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselRecipes"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselRecipes"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    
    `
})