<template>
  <div class="recipe-form-input-group flex justify-between">
    <div class="flex flex-col">
      <label for="foodName">FoodName</label>
      <WithBgInput
        :placeholder="'foodName'"
        :value="element.foodName"
        @input="element.foodName = $event"
      />
    </div>
    <div class="flex flex-col">
      <label for="measure">Measure</label>
      <WithBgInput
        :placeholder="'measure'"
        :value="element.measure"
        @input="element.measure=$event"
      />
    </div>
    <div class="flex flex-col">
      <label for="unit">Unit</label>
      <WithBgInput :placeholder="'unit'" :value="element.unit" @input="element.unit=$event" />
    </div>
  </div>
</template>
<script>

export default {
    name:'food-input-group',
    components: {
    },
    props: {
        foodElement: {
          type: Object,
          default: ()=>({
            id: 1,
            foodName: 'defaultFoodName',
            measure: 55,
            unit: 'g',
          })
        }
    },
    computed: {
      element: {
        get() { return this.foodElement; },
        set(value) { this.$emit('update:foodElement', value); }
      }
    },
}
</script>
<style scoped>
.recipe-form-input-group {
  margin-bottom: 30px;
}
.recipe-form-input-group label {
  color: #101010;
}
.recipe-form-input-group input {
  width: 100%;
  margin: 0;
}
.recipe-form-input-group div.flex:nth-child(1) {
  max-width: 400px;
  width: 100%;
}
.recipe-form-input-group div.flex:nth-child(2) {
  max-width: 100px;
  width: 100px;
}
.recipe-form-input-group div.flex:nth-child(3) {
  max-width: 100px;
  width: 100px;
}
</style>