app.component('toprecipecard', {
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
            type: String,
            default: 10
        },
        index: {
            type: String
        }
    },

    template:
        /*html*/
        `
<div class="card" style="width:75%;" >
    <img v-bind:src="image" class="img-fluid" alt="...">
    <div class="card-body">
        <div class="p-2 row">
            <h2 class="">{{name}}</h2>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <div class="col">
                <h4 class="">Category</h4>
                <h4 class="">Time</h4>
                <h4 class="">Level</h4>
            </div>
            <div class="col">
                <h4 class="">Likes</h4>
                <button v-on:click="onClickLike" class="btn btn-danger" >Like</button>
                <button v-on:click="onClickUnLike" class="btn btn-success" >Unlike</button>
            </div>
            <div >
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</div>
        `

})