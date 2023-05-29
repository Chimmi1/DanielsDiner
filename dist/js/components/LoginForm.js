app.component('login-form', {
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
          <h5 class="card-title">Login</h5>
          <form>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" placeholder="Username">
          </div>
          <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Password">
        </div>
          <button type="submit" class="btn btn-primary">Log In</button>
        </form>
        </div>
      </div>
                `
})