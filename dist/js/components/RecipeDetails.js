app.component('recipedetails', {
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
  data() {
    return {
    }
  },
  mounted() {
    this.$compEvent.on('event', function (data) {
      // this.recipe = data;
      this.name = data.name;
      console.log(data);
    });
  },
  methods: {

  },
  template:
    /*html*/
    `
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
        <h5 class="modal-title"> {{name}} </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
            </div>
        </div>
    </div>
        `
})