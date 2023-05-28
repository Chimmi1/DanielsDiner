app.component('recipecard', {
    data() {
        return {

        }
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
        onClickViewRecipe(){
            this.$compEvent.emit('event', this);
        }
    },
    template:
        /*html*/
        `
     <div class="card mb-4" >
  <img v-bind:src="image" class="card-img-top " style= "width:100%; height: 250px" alt="...">
  <div class="card-body" >
    <h5 class="card-title">{{name}}</h5>
    <p class="card-text text-truncate">{{description}}</p>
    <button class="btn btn-primary" v-on:click="onClickViewRecipe()" data-bs-toggle="modal" data-bs-target="#staticBackdrop">View Recipe</button>
  </div>
</div>
     `
})