app.component('featuredrecipecard', {
    data() {
        return {

        }
    },
    props: {

    },
    template:
        /*html*/
        `
        
  <div class="card" style="width:75%;">
    <div class="">
          <img src="./images/pollo-asado.jpg" class="img-fluid" alt="featured recipe 1">
    </div>
    
      <div class=" card-body w-100">
        <div class="p-2 row">
          <h2 class="card-title">Special title treatment</h2>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <div class="col">
              <h4 class="">Category</h4>
              <h4 class="">Time</h4>
              <h4 class="">Level</h4>
            </div>
            <div class="col">
              <h4 class="">Likes</h4>
              <img src=""  alt="...">
              <img src=""  alt="...">
            </div>
            <div >
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    <div class="card-footer text-muted">
      <h4>Author</h4>
    </div>
  </div>
     `
})