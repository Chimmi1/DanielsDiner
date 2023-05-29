app.component('register-form', {
    data() {
        return {

        }
    },
    template:
        /*html*/
        `

      <div class="card align-items-center">
  <div class="card-header">
    Imagen Logo
  </div>
  <div class="card-body">
    <h5 class="card-title">Register</h5>
    <p class="card-text">Fill out the regitry form below.</p>
    <form>
    <div class="form-group">
      <label for="email">Email address</label>
      <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email">
    </div>
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" class="form-control" id="username" placeholder="Username">
    </div>
    <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" placeholder="Password">
  </div>
    <button type="submit" class="btn btn-primary">Register Account</button>
  </form>
  </div>
</div>
            `
})