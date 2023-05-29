app.component('navbar', {
    data() {
        return {
            navbar_array: [
                { id: 1, image: "", name: "Home" },
                { id: 2, image: "", name: "Categories" },
                { id: 3, image: "", name: "Top 10 Recipes" },
                { id: 4, image: "", name: "Random Recipe" },
                { id: 5, image: "", name: "Contact Us" },
            ],
        }
    },
    props: {
        name: {
            type: String
        },
        image: {
            type: String
        }
    },
    template:
        /*html*/
        `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
                <a class=" navbar-brand " href="#">Daniels Diner</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                
                    <ul class="navbar-nav   mb-2 mb-lg-4 mt-3">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categories
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Breakfast</a></li>
                            <li><a class="dropdown-item" href="#">Lunch</a></li>
                            <li><a class="dropdown-item" href="#">Dinner</a></li>
                            <li><a class="dropdown-item" href="#">Drinks</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li >
                        <li class="nav-item">
                            <a class="nav-link" href="#">Top 10 Recipes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Random Recipe</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Contact Us</a>
                    </li>
                    </ul>
                </div>
                <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search Recipes" aria-label="Search">
                    <button class="btn btn-outline-success me-5" type="submit">Search</button>
                </form>
                <a class="" href="register.html"><img src="./images/perfil.png" style="width: 3rem;"></a>
            </div>
        </nav>
        `
})