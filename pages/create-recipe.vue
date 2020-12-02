<template>
  <div class="recipe-block bg-blue-bglight">
    <!-- Main area  -->
    <div class="container mx-auto w-full py-8">
      <div class="recipe-card mx-auto rounded-20 bg-white">
        <div class="title-wrapper flex flex-col text-center">
          <h6 class="text-green-lighter text-sm mb-2">DELICIOUS RECIPES</h6>
          <h5 class="text-black-light text-2.5xl mb-10">Create your own recipe</h5>
        </div>
        <div class="pt-3">
          <h6 class="text-black-light font-normal">Recipe name</h6>
          <WithBgInput :placeholder="recipeTitle" />
          <p
            class="mt-2 mb-8"
            style="color: #9AABC6"
          >Some cute little message, so choose it carefully</p>
          <br class="border" style="  color: #8aa9d8" />
        </div>
        <food-input-group :key="element.id" :foodElement="element" v-for="element in elements"></food-input-group>
        <div class="recipe-card-button-group flex justify-between mt-5">
          <button
            class="btn bg-white border border-green-light rounded-10 text-green-light font-roboto"
            @click="addFormGroup"
          >+ Add</button>
          <button
            class="btn bg-green-light text-white rounded-10 font-roboto"
            @click="submit"
          >Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const ingredients = [
    {
        id: 1,
        foodName: 'FoodName',
        measure: 55,
        unit: 'g',
    },
    {
        id: 2,
        foodName: 'FoodName2',
        measure: 33,
        unit: 'g',
    },
    {
        id: 3,
        foodName: 'FoodName3',
        measure: 22,
        unit: 'g',
    },
    {
        id: 4,
        foodName: 'FoodName4',
        measure: 10,
        unit: 'g',
    },
    {
        id: 5,
        foodName: 'FoodName5',
        measure: 55,
        unit: 'g',
    },
]
export default {
    data (){
        return {
            recipeTitle: "My Recipe",
            elements: ingredients
        }
    },
    methods: {
        addFormGroup(){
            this.elements.push({
                id: this.elements.length,
                foodName: 'FoodName',
                measure: 55,
                unit: 'g',
            })       
        },
        submit() {
            alert(this.elements.toString())
            console.log('this.elements',this.elements)
        }
    },
}
</script>
<style scoped>
.recipe-block {
  padding: 70px 0 30px;
}

.recipe-card {
  max-width: 840px;
  box-shadow: 0px 0px 20px rgba(223, 223, 223, 0.15);
  padding: 50px 90px;
}
.recipe-card-button-group {
  margin-top: 50px;
}
.recipe-card-button-group button:nth-child(1) {
  max-width: 120px;
  width: 40%;
}
.recipe-card-button-group button:nth-child(2) {
  max-width: 300px;
  width: 40%;
}
.title-wrapper h5 {
  line-height: 32px;
}
.with-bg-input {
  width: 100%;
}
</style>