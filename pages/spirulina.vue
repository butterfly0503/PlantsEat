<template>
  <div class="bg-white">
   
    <!-- Main area  -->
    <div class="w-full bg-blue-bglight py-8">
      <div class="container mx-auto">
        <h6 class="block text-green-lighter text-sm font-roboto mb-2">NUTRITION FACTS</h6>
        <h4 class="block text-black-light text-3xl font-semibold mb-8">Spirulina Dried</h4>
        <div class="flex justify-between">
          <div class="rounded-20 bg-white p-4 left-card">
            <div class="flex justify-between align-baseline mt-8 mb-2.5">
              <h5 class="text-red-light font-normal">
                <span class="text-3xl">290</span>kCal
              </h5>
              <span class="text-xs text-black-light flex opacity-50 items-end">DV %</span>
            </div>
            <div class="bg-blue-bglight rounded-lg mb-2">
              <div class="p-4 flex justify-between">
                <h5>Total Fat</h5>
                <span class="amount-detail text-red-light ml-auto">7.72g</span>
                <span class="percentage-detail text-red-light">100%</span>
              </div>
              <hr class="text-black-light mx-4" />
              <div class="p-4 flex justify-between">
                <h5 class="opacity-50">Saturated Fat</h5>
                <span class="amount-detail text-red-light ml-auto">7.72g</span>
                <span class="percentage-detail text-red-light">100%</span>
              </div>
            </div>

            <div class="bg-blue-bglight rounded-lg mb-2">
              <div class="p-4 flex justify-between">
                <h5>Cholesterol</h5>
                <span class="amount-detail text-red-light ml-auto">7.72g</span>
                <span class="percentage-detail text-red-light">100%</span>
              </div>
            </div>

            <div class="bg-blue-bglight rounded-lg mb-2">
              <div class="p-4 flex justify-between">
                <h5>Cholesterol</h5>
                <span class="amount-detail text-red-light ml-auto">7.72g</span>
                <span class="percentage-detail text-red-light">100%</span>
              </div>
            </div>

            <div class="bg-blue-bglight rounded-lg mb-2">
              <div class="p-4 flex justify-between">
                <h5>Total Carbohydrates</h5>
                <span class="amount-detail text-red-light ml-auto">7.72g</span>
                <span class="percentage-detail text-red-light">100%</span>
              </div>
              <hr class="text-black-light mx-4" />
              <div class="p-4 flex justify-between">
                <h5 class="opacity-50">Dietary Fibre</h5>
                <span class="amount-detail text-red-light ml-auto">7.72g</span>
                <span class="percentage-detail text-red-light">100%</span>
              </div>
              <div class="p-4 flex justify-between">
                <h5 class="opacity-50">Total Sugars</h5>
                <span class="amount-detail text-red-light ml-auto">7.72g</span>
                <span class="percentage-detail text-red-light">100%</span>
              </div>
            </div>
            <div class="bg-blue-bglight rounded-lg mb-2">
              <div class="p-4 flex justify-between">
                <h5>Protein</h5>
                <span class="amount-detail text-red-light ml-auto">7.72g</span>
                <span class="percentage-detail text-red-light">100%</span>
              </div>
            </div>
          </div>

          <div class="rounded-20 bg-white p-4 right-card">
            <div class="flex justify-between">
              <search-input></search-input>
            </div>

            <div class="bg-blue-bglight rounded-lg mb-2">
              <div class="p-4 flex justify-between">
                <h5>Total Carbohydrates</h5>
                <span class="amount-detail text-red-light ml-auto">7.72g</span>
                <span class="percentage-detail text-red-light">100%</span>
              </div>
              <hr class="text-black-light mx-4" />
              <div class="p-4 flex justify-between">
                <h5 class="opacity-50">Dietary Fibre</h5>
                <span class="amount-detail text-red-light ml-auto">7.72g</span>
                <span class="percentage-detail text-red-light">100%</span>
              </div>
              <hr class="text-black-light mx-4" />
              <div class="p-4 flex justify-between">
                <h5 class="opacity-50">Dietary Fibre</h5>
                <span class="amount-detail text-red-light ml-auto">7.72g</span>
                <span class="percentage-detail text-red-light">100%</span>
              </div>
              <hr class="text-black-light mx-4" />
              <div class="p-4 flex justify-between">
                <h5 class="opacity-50">Dietary Fibre</h5>
                <span class="amount-detail text-red-light ml-auto">7.72g</span>
                <span class="percentage-detail text-red-light">100%</span>
              </div>
              <hr class="text-black-light mx-4" />
              <div class="p-4 flex justify-between">
                <h5 class="opacity-50">Dietary Fibre</h5>
                <span class="amount-detail text-red-light ml-auto">7.72g</span>
                <span class="percentage-detail text-red-light">100%</span>
              </div>
              <hr class="text-black-light mx-4" />
              <div class="p-4 flex justify-between">
                <h5 class="opacity-50">Dietary Fibre</h5>
                <span class="amount-detail text-red-light ml-auto">7.72g</span>
                <span class="percentage-detail text-red-light">100%</span>
              </div>
              <hr class="text-black-light mx-4" />
              <div class="p-4 flex justify-between">
                <h5 class="opacity-50">Dietary Fibre</h5>
                <span class="amount-detail text-red-light ml-auto">7.72g</span>
                <span class="percentage-detail text-red-light">100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'spirulina',

  // Page level style and js
  //  head() {
  //     return {
  //       script: [
  //         {
  //           src:
  //             'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
  //         }
  //       ],
  //       link: [
  //         {
  //           rel: 'stylesheet',
  //           href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
  //         }
  //       ]
  //     }
  //   }
}
</script>

<style scoped>
.left-card {
  max-width: 360px;
  margin-right: 30px;
  width: 33.3%;
}

.right-card {
  max-width: 690px;
  width: 64%;
}

.right-card .search-input {
  margin-left: 0;
  margin-bottom: 18px;
}

.amount-detail {
  display: flex;
  align-items: center;
}

.percentage-detail {
  width: 70px;
  height: 20px;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  justify-content: right;
  align-items: center;
}
</style>
