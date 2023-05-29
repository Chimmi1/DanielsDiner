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
        
     <div class="card position-relative" style="width:75%;">
  <div class="card-header">
        <img src="./images/pollo-asado.jpg" class="img-fluid " alt="featured recipe 1">
  
  <div class="text-center w-100 position-absolute bottom-0">
  <div class="card-img-overlay d-flex align-items-end">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
     `
})