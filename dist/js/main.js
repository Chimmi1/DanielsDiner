const app = Vue.createApp({
    data() {
        return {
            recipes: [
                { id: "1", image: "./images/estofado-carne.jpg", name: "Sushi", category: "Lunch", time: "20 mins", level: "Easy", likes: 18, ingredients: "300ml Sushi Rice, 100ml Rice wine, 2 tbs Caster Sugar, 3 tbs Mayonnaise, 1 tbs Rice wine, 1 tbs Soy Sauce1 Cucumber", instructions: "STEP 1 TO MAKE SUSHI ROLLS: Pat out some rice.Lay a nori sheet on the mat, shiny-side down.Dip your hands in the vinegared water, then pat handfuls of rice on top in a 1cm thick layer, leaving the furthest edge from you clear. STEP 2 Spread over some Japanese mayonnaise.Use a spoon to spread out a thin layer of mayonnaise down the middle of the rice. STEP 3 Add the filling.Get your child to top the mayonnaise with a line of their favourite fillings – here we’ve used tuna and cucumber. STEP 4 Roll it up.Lift the edge of the mat over the rice, applying a little pressure to keep everything in a tight roll. STEP 5 Stick down the sides like a stamp.When you get to the edge without any rice, brush with a little water and continue to roll into a tight roll. STEP 6 Wrap in cling film.Remove the mat and roll tightly in cling film before a grown-up cuts the sushi into thick slices, then unravel the cling film. STEP 7 TO MAKE PRESSED SUSHI: Layer over some smoked salmon.Line a loaf tin with cling film, then place a thin layer of smoked salmon inside on top of the cling film. STEP 8 Cover with rice and press down. Press about 3cm of rice over the fish, fold the cling film over and press down as much as you can, using another tin if you have one. STEP 9 Tip it out like a sandcastle.Turn block of sushi onto a chopping board.Get a grown-up to cut into fingers, then remove the cling film. STEP 10 TO MAKE SUSHI BALLS: Choose your topping.Get a small square of cling film and place a topping, like half a prawn or a small piece of smoked salmon, on it. Use damp hands to roll walnut-sized balls of rice and place on the topping. STEP 11 Make into tight balls. Bring the corners of the cling film together and tighten into balls by twisting it up, then unwrap and serve." }
            ],
            recipes_slider1: [
                { id: "1", image: "./images/estofado-carne.jpg", name: "Sushi", category: "Lunch", time: "20 mins", level: "Easy", likes: 18, ingredients: "300ml Sushi Rice, 100ml Rice wine, 2 tbs Caster Sugar, 3 tbs Mayonnaise, 1 tbs Rice wine, 1 tbs Soy Sauce1 Cucumber", instructions: "STEP 1 TO MAKE SUSHI ROLLS: Pat out some rice.Lay a nori sheet on the mat, shiny-side down.Dip your hands in the vinegared water, then pat handfuls of rice on top in a 1cm thick layer, leaving the furthest edge from you clear. STEP 2 Spread over some Japanese mayonnaise.Use a spoon to spread out a thin layer of mayonnaise down the middle of the rice. STEP 3 Add the filling.Get your child to top the mayonnaise with a line of their favourite fillings – here we’ve used tuna and cucumber. STEP 4 Roll it up.Lift the edge of the mat over the rice, applying a little pressure to keep everything in a tight roll. STEP 5 Stick down the sides like a stamp.When you get to the edge without any rice, brush with a little water and continue to roll into a tight roll. STEP 6 Wrap in cling film.Remove the mat and roll tightly in cling film before a grown-up cuts the sushi into thick slices, then unravel the cling film. STEP 7 TO MAKE PRESSED SUSHI: Layer over some smoked salmon.Line a loaf tin with cling film, then place a thin layer of smoked salmon inside on top of the cling film. STEP 8 Cover with rice and press down. Press about 3cm of rice over the fish, fold the cling film over and press down as much as you can, using another tin if you have one. STEP 9 Tip it out like a sandcastle.Turn block of sushi onto a chopping board.Get a grown-up to cut into fingers, then remove the cling film. STEP 10 TO MAKE SUSHI BALLS: Choose your topping.Get a small square of cling film and place a topping, like half a prawn or a small piece of smoked salmon, on it. Use damp hands to roll walnut-sized balls of rice and place on the topping. STEP 11 Make into tight balls. Bring the corners of the cling film together and tighten into balls by twisting it up, then unwrap and serve." }
            ],
            recipes_slider2: [
                { id: "1", image: "./images/estofado-carne.jpg", name: "Sushi", category: "Lunch", time: "20 mins", level: "Easy", likes: 18, ingredients: "300ml Sushi Rice, 100ml Rice wine, 2 tbs Caster Sugar, 3 tbs Mayonnaise, 1 tbs Rice wine, 1 tbs Soy Sauce1 Cucumber", instructions: "STEP 1 TO MAKE SUSHI ROLLS: Pat out some rice.Lay a nori sheet on the mat, shiny-side down.Dip your hands in the vinegared water, then pat handfuls of rice on top in a 1cm thick layer, leaving the furthest edge from you clear. STEP 2 Spread over some Japanese mayonnaise.Use a spoon to spread out a thin layer of mayonnaise down the middle of the rice. STEP 3 Add the filling.Get your child to top the mayonnaise with a line of their favourite fillings – here we’ve used tuna and cucumber. STEP 4 Roll it up.Lift the edge of the mat over the rice, applying a little pressure to keep everything in a tight roll. STEP 5 Stick down the sides like a stamp.When you get to the edge without any rice, brush with a little water and continue to roll into a tight roll. STEP 6 Wrap in cling film.Remove the mat and roll tightly in cling film before a grown-up cuts the sushi into thick slices, then unravel the cling film. STEP 7 TO MAKE PRESSED SUSHI: Layer over some smoked salmon.Line a loaf tin with cling film, then place a thin layer of smoked salmon inside on top of the cling film. STEP 8 Cover with rice and press down. Press about 3cm of rice over the fish, fold the cling film over and press down as much as you can, using another tin if you have one. STEP 9 Tip it out like a sandcastle.Turn block of sushi onto a chopping board.Get a grown-up to cut into fingers, then remove the cling film. STEP 10 TO MAKE SUSHI BALLS: Choose your topping.Get a small square of cling film and place a topping, like half a prawn or a small piece of smoked salmon, on it. Use damp hands to roll walnut-sized balls of rice and place on the topping. STEP 11 Make into tight balls. Bring the corners of the cling film together and tighten into balls by twisting it up, then unwrap and serve." }
            ],
            categories: [

            ],
            recipe: {},
            carouselrecipes: [
                {id: "1", image: "./images/estofado-carne.jpg", name: "Sushi", category: "Lunch", time: "20 mins", level: "Easy", likes: 18, ingredients: "300ml Sushi Rice, 100ml Rice wine, 2 tbs Caster Sugar, 3 tbs Mayonnaise, 1 tbs Rice wine, 1 tbs Soy Sauce1 Cucumber", instructions: "STEP 1 TO MAKE SUSHI ROLLS: Pat out some rice.Lay a nori sheet on the mat, shiny-side down.Dip your hands in the vinegared water, then pat handfuls of rice on top in a 1cm thick layer, leaving the furthest edge from you clear. STEP 2 Spread over some Japanese mayonnaise.Use a spoon to spread out a thin layer of mayonnaise down the middle of the rice. STEP 3 Add the filling.Get your child to top the mayonnaise with a line of their favourite fillings – here we’ve used tuna and cucumber. STEP 4 Roll it up.Lift the edge of the mat over the rice, applying a little pressure to keep everything in a tight roll. STEP 5 Stick down the sides like a stamp.When you get to the edge without any rice, brush with a little water and continue to roll into a tight roll. STEP 6 Wrap in cling film.Remove the mat and roll tightly in cling film before a grown-up cuts the sushi into thick slices, then unravel the cling film. STEP 7 TO MAKE PRESSED SUSHI: Layer over some smoked salmon.Line a loaf tin with cling film, then place a thin layer of smoked salmon inside on top of the cling film. STEP 8 Cover with rice and press down. Press about 3cm of rice over the fish, fold the cling film over and press down as much as you can, using another tin if you have one. STEP 9 Tip it out like a sandcastle.Turn block of sushi onto a chopping board.Get a grown-up to cut into fingers, then remove the cling film. STEP 10 TO MAKE SUSHI BALLS: Choose your topping.Get a small square of cling film and place a topping, like half a prawn or a small piece of smoked salmon, on it. Use damp hands to roll walnut-sized balls of rice and place on the topping. STEP 11 Make into tight balls. Bring the corners of the cling film together and tighten into balls by twisting it up, then unwrap and serve."}
            ],
            recipeCount: 0
        }
    },

    mounted: function () {
        axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
        })
            .then(
                (response) => {
                    let items = response.data.meals;

                    items.forEach((element, index) => {
                        this.categories.push({ id: index, name: element.strCategory });
                    });
                }
            )
            .catch(
                error => console.log(error)
            );

        axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
        })
            .then(
                (response) => {
                    //console.log(response.data.meals);
                    let items = response.data.meals;
                    this.recipes = [];

                    items.forEach(element => {
                        this.recipeCount++;

                        this.recipes.push({
                            id: element.idMeal,
                            name: element.strMeal,
                            image: element.strMealThumb,
                            category: 'Seafood',
                            time: '20 min',
                            level: 'Easy',
                            likes: '10',
                            ingredients: 'NA',
                            instructions: 'NA'
                        });

                        if (this.recipes_slider1.length < 4) {
                            this.recipes_slider1.push({
                                id: element.idMeal,
                                name: element.strMeal,
                                image: element.strMealThumb,
                                category: 'Seafood',
                                time: '20 min',
                                level: 'Easy',
                                likes: '10',
                                ingredients: 'NA',
                                instructions: 'NA'
                            })
                        }else{
                            this.recipes_slider2.push({
                                id: element.idMeal,
                                name: element.strMeal,
                                image: element.strMealThumb,
                                category: 'Seafood',
                                time: '20 min',
                                level: 'Easy',
                                likes: '10',
                                ingredients: 'NA',
                                instructions: 'NA'
                            })
                        }


                        if (this.carouselrecipes.length < 4) {
                            this.carouselrecipes.push({
                                id: element.idMeal,
                                name: element.strMeal,
                                image: element.strMealThumb,
                                category: 'Seafood',
                                time: '20 min',
                                level: 'Easy',
                                likes: '10',
                                ingredients: 'NA',
                                instructions: 'NA'
                            })
                            
                        }
                    });

                    console.log(this.recipeCount);
                    
                }
            )
            .catch(
                error => console.log(error)
            );
    },
    methods: {
        onClickRecipeDetails(index) {
            axios({
                method: 'get',
                url: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'

            })
                .then(
                    (response) => {

                        axios({
                            method: 'get',
                            url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + index
                        })
                            .then(
                                (response) => {
                                    let item = response.data.meals;
                                    console.log(item);

                                    this.recipe.id = item[0].idMeal;
                                    this.recipe.image = item[0].strMealThumb;
                                    this.recipe.name = item[0].strMeal;
                                    this.recipe.category = item[0].strCategory;
                                    this.recipe.time = "20 min";
                                    this.recipe.level = "Easy";
                                    this.recipe.likes = 18;
                                    this.recipe.instructions = item[0].strInstructions;

                                    let ingredientsList = "";

                                    for (let i = 1; i <= 20; i++) {
                                        if (item[0]["strIngredient" + i] != "" && item[0]["strIngredient" + i] != null) {
                                            ingredientsList += item[0]["strMeasure" + i] + " - " + item[0][strIngredient + i] + "\n";
                                        }

                                    }
                                    this.recipe.ingredients = ingredientsList;
                                }
                            )
                            .catch(
                                error => console.log(error)
                            );
                            let items = response.data.meals;
                            items.forEach((element, index) => {
                                this.categories.push({id: index, name: element.strCategory});
                            })
                    }
                )
                .catch(
                    error => console.log(error)
                );

        },
        onClickRecipeLike(index) {
            this.recipes[index].likes += 1;
        },
        onClickRecipeUnlike(index) {
            if (this.recipes[index].likes > 0) {
                this.recipes[index].likes -= 1;
            }
        }
    },
})

const emitter = mitt();
app.config.globalProperties.$compEvent = emitter;