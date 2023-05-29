app.component('recover-form', {
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
          <h5 class="card-title">Recover Password</h5>
          <p class="card-text">We'll send an Email with link to password change</p>
          <form>
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email">
          </div>
          <button type="submit" class="btn btn-primary">Send Email</button>
        </form>
        </div>
      </div>
                `
})