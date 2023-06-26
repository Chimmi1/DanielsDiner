app.component('recipecard', {
    data() {
        return {
            addLikes: this.likes,
            recipeSliderCount: this.recipecount/3,
            test_list: [
                { id: 1, image: "", name: "Home" },
                { id: 2, image: "", name: "Categories" },
                { id: 3, image: "", name: "Top 10 Recipes" },
            ]

        }
    },
    mounted() {
      /*
        this.$recipecount.on('foo', function (data) {
          this.recipeCount = data;
          console.log(data);
        });
        */
      },
    props: {
        image: {
            type: String
        },
        category: {
            type: String,
            default: "recipe category"
        },
        name: {
            type: String,
            default: "recipe name"
        },
        recipecount: {
          type: Number,
          default: 0
        },
        description: {
            type: String,
            default: "recipe description"
        },
        time: {
            type: String,
            default: "recipe time"
        },
        level: {
            type: String,
            default: "recipe level"
        },
        likes: {
            type: Number,
            default: 10
        },
        index: {
            type: Number
        }
    },
    methods: {
        onClickViewRecipe() {
            console.log("view recipe");
            this.$emit('recipedetails', this.index);
        },
        onClickLike() {
            console.log("add likes " + addLikes);
            this.addLikes++;
        },
        onClickUnLike() {
            console.log("add likes " + addLikes);
            if (this.addLikes > 0) {
                this.addLikes--;
            }
        },
    },
    template:
        /*html*/
        `

<!-- Card slider component -->
<div id="card-slider" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-bs-target="#card-slider" data-bs-slide-to="0" class="active"></li>
    <li data-bs-target="#card-slider" data-bs-slide-to="1"></li>
    <li data-bs-target="#card-slider" data-bs-slide-to="2"></li>
    <li data-bs-target="#card-slider" data-bs-slide-to="3"></li>
    <!-- Add more indicators for additional slides if needed -->
  </ol>

  <!-- Slides -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="row">
        <div v-for="number in 3" class="col-md-4">
          <!-- Card 1 -->
          <div  class="card">
            <img src="./images/salmon.jpg" class="card-img-top "  alt="...">
            <div class="card-body row" >
            <h2 class="card-title">Recipe Name</h2>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <div class="col">
                <button class="btn btn-primary" v-on:click="onClickViewRecipe" data-bs-toggle="modal" data-bs-target="#staticBackdrop">View Recipe</button>
              </div>
              <div class="col">
                <h4 >Likes</h4>
                <button v-on:click="onClickLike" class="btn btn-danger" >Like</button>
                <button v-on:click="onClickUnLike" class="btn btn-success" >Unlike</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div  v-for="number in 3" class="carousel-item">
          <div class="row">
              <div v-for="number in 3" class="col-md-4">
                <!-- Card 1 -->
                <div  class="card ">
                    <!-- Card content here -->
                    <img src="./images/salmon.jpg" class="card-img-top "  alt="...">
                    <div class="card-body" >
                      <h2 class="card-title">Recipe Name</h2>
                      <h4 >Recipe Name</h4>
                      <p class="card-text text-truncate"></p>
                      <button v-on:click="onClickLike" class="btn btn-danger" >Like</button>
                      <button v-on:click="onClickUnLike" class="btn btn-success" >Unlike</button>
                      <button class="btn btn-primary" v-on:click="onClickViewRecipe" data-bs-toggle="modal" data-bs-target="#staticBackdrop">View Recipe</button>
                    </div>

                </div>
              </div>
          </div>
      </div>
    
    
    <!-- Add more carousel-item divs for additional slides if needed -->
  </div>

  <!-- Navigation arrows -->
  <a class="carousel-control-prev" href="#card-slider" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#card-slider" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>






        
      <!--  
     <div class="card mb-4" >
  <img v-bind:src="image" class="card-img-top " style= "width:100%; height: 250px" alt="...">
  <div class="card-body" >
    <h5 class="card-title">{{name}}</h5>
    <p class="card-text text-truncate">Likes: {{addLikes}}</p>
    <button v-on:click="onClickLike" class="btn btn-danger" >Like</button>
    <button v-on:click="onClickUnLike" class="btn btn-success" >Unlike</button>
    <button class="btn btn-primary" v-on:click="onClickViewRecipe" data-bs-toggle="modal" data-bs-target="#staticBackdrop">View Recipe</button>
  </div>
</div>
-->

     `
})