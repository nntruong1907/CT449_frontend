<template>
  <main>
    <div class="container text-left my-5">
      <h3 class="my-4">Brand<img src="@/assets/logo/brand.png" width="30" class="" /></h3>
      <div class="row">
        <div class="btn-group col-10" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-outline-secondary" style="width: 100px" @click="this.show('')">
            ALL
          </button>
          <button type="button" class="btn btn-outline-secondary" @click="this.show('BMW')">
            <img src="@/assets/logo/BMW.png" width="40" />
            BMW
          </button>
          <button type="button" class="btn btn-outline-secondary" @click="this.show('Ducati')">
            <img src="@/assets/logo/Ducati.png" width="40" />
            Ducati
          </button>
          <button type="button" class="btn btn-outline-secondary" @click="this.show('Honda')">
            <img src="@/assets/logo/Honda.png" width="40" />
            Honda
          </button>
          <button type="button" class="btn btn-outline-secondary" @click="this.show('Kawasaki')">
            <img src="@/assets/logo/Kawasaki.png" width="40" />
            Kawasaki
          </button>
        </div>

        <div class="col-md-2 ms-auto">
          <select class="rounded ms-auto" style="padding:10px" @change="this.sort">
            <option value="">Sort By</option>
            <option value="1">Price from low to high</option>
            <option value="2">Price from high to low</option>
          </select>
        </div>

      </div>
      <div class="row mt-5">
        <div class="col-lg-3 side-bar">
          <div>
            <h4 class="type">Type <img src="@/assets/logo/type.png" width="" class="" /> </h4>
            <p class="type-motor" @click="this.show('Cruiser')">Cruiser</p>
            <p class="type-motor" @click="this.show('Sport')">Sport</p>
            <p class="type-motor" @click="this.show('Street')">Street</p>
            <p class="type-motor" @click="this.show('Touring')">Touring</p>
          </div>
          <!-- <div>
            <h5 class="type">Brand</h5>
            <p class="type-motor" @click="this.show('BMW')">
              <img src="@/assets/logo/BMW.png" width="40" />
              BMW
            </p>
            <p class="type-motor" @click="this.show('Ducati')">
              <img src="@/assets/logo/Ducati.png" width="40" />
              Ducati
            </p>
            <p class="type-motor" @click="this.show('Honda')">
              <img src="@/assets/logo/Honda.png" width="40" />
              Honda
            </p>
            <p class="type-motor" @click="this.show('Kawasaki')">
              <img src="@/assets/logo/Kawasaki.png" width="40" />
              Kawasaki
            </p>
            <p class="fw-bold type-motor" @click="this.show('')">Xem tất cả</p>
          </div> -->
        </div>
        <div class="col-lg-9">
          <div v-if="this.filter == ''">
            <div class="row">
              <h3 class="col-md-2 m-0 ps-3">HOT</h3>
            </div>
            <hr style="width:105%" />
            <div class="row ms-4">
              <div class="product p-2 col-sm-6 col-md-6 col-lg-4 mb-3 text-center">
                <img
                  src="https://res.cloudinary.com/dvbzja2gq/image/upload/v1679901529/motorcycle/edlklpz1aiwkzmobz6zn.png"
                  class="w-100 py-3" height="190" />
                <p class="fw-bold m-0 mb-3 h5" style="height:3rem">M1000 RR</p>
                <div class="" style="font-size:.8em;">
                  <span class=""><img src="@/assets/logo/brand.png" width="25" class="icon" />BMW</span>
                  <span class="ms-2"><img src="@/assets/logo/type.png" width="" class="icon" />Sport</span>
                </div>
                <div class=" mt-3 py-2 bg-light">
                  <p class="text-secondary m-0 font-monospace">Price:</p>
                  <h6>1.500.000.000 <i class="fa-solid fa-dong-sign"></i></h6>
                </div>
              </div>
              <div class="product p-2 col-sm-6 col-md-6 col-lg-4 mb-3 text-center">
                <img
                  src="https://res.cloudinary.com/dvbzja2gq/image/upload/v1679907831/motorcycle/vgv5d2wcceoswhcha4it.png"
                  class="w-100 py-3" height="190" />
                <p class="fw-bold m-0 mb-3 h5" style="height:3rem">Ninja H2 Carbon</p>
                <div class="" style="font-size:.8em;">
                  <span class=""><img src="@/assets/logo/brand.png" width="25" class="icon" />Kawasaki</span>
                  <span class="ms-2"><img src="@/assets/logo/type.png" width="" class="icon" />Sport</span>
                </div>
                <div class=" mt-3 py-2 bg-light">
                  <p class="text-secondary m-0 font-monospace">Price:</p>
                  <h6>1.299.000.000 <i class="fa-solid fa-dong-sign"></i></h6>
                </div>
              </div>
              <div class="product p-2 col-sm-6 col-md-6 col-lg-4 mb-3 text-center">
                <img
                  src="https://res.cloudinary.com/dvbzja2gq/image/upload/v1679902988/motorcycle/muwbetbugckelnncdnv1.png"
                  class="w-100 py-3" height="190" />
                <p class="fw-bold m-0 mb-3 h5" style="height:3rem">Supersport 950 S</p>
                <div class="" style="font-size:.8em;">
                  <span class=""><img src="@/assets/logo/brand.png" width="25" class="icon" />Ducati</span>
                  <span class="ms-2"><img src="@/assets/logo/type.png" width="" class="icon" />Sport</span>
                </div>
                <div class=" mt-3 py-2 bg-light">
                  <p class="text-secondary m-0 font-monospace">Price:</p>
                  <h6>590.000.000 <i class="fa-solid fa-dong-sign"></i></h6>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <h3 class=" m-0 ps-3 text-uppercase">{{ this.filter != '' ? this.filter : 'All motorcycle' }}</h3>
          </div>
          <hr />
          <div class="row ms-4">
            <div v-for="(product, index) in this.products" :key="product._id"
              class="product p-2 col-sm-6 col-md-6 col-lg-4 mb-3 text-center">
              <router-link :to="{
                  name: 'product.detail',
                  params: { id: product._id },
                }">
                <img :src="product.image.image_path" class="w-100 py-3" height="200" />
              </router-link>
              <p class="fw-bold m-0 mb-3 h5" style="height:3rem">{{ product.name }}</p>
              <div class="" style="font-size:.8em;">
                <span class=""><img src="@/assets/logo/brand.png" width="25" class="icon" /> {{ product.brand.name
                }}</span>
                <span class="ms-2"><img src="@/assets/logo/type.png" width="" class="icon" /> {{ product.type.name
                }}</span>
              </div>
              <div class=" mt-3 py-2 bg-light ">
                <p class="text-secondary m-0 font-monospace">Price:</p>
                <h6>{{ new Intl.NumberFormat('it-IT', {
                  style: 'currency', currency: 'VND'
                }).format(product.price).replace("VND", "")

                }} <i class="fa-solid fa-dong-sign"></i></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ProductService from '@/services/product.service';
export default {
  data() {
    return {
      products: [],
      productsTemp: [],
      filter: ''
    }
  },
  methods: {
    async getData() {
      this.productsTemp = await ProductService.getAll();
      this.products = this.productsTemp;
      console.log("🚀 ~ file: ProductPage.vue:168 ~ getData ~ this.products:", this.products)
    },
    sort(e) {

      if (e.target.value == 1) {
        this.products.sort((a, b) => a.price - b.price)
        this.filter = "Price from low to high"
      } else if (e.target.value == 2) {
        this.products.sort((a, b) => b.price - a.price)
        this.filter = "Price from high to low"
      } else {
        this.filter = ''
      }
    },
    show(name) {
      this.filter = name;
      setTimeout(() => {
        this.products = this.productsTemp.filter(e => e.brand.name.includes(name) || e.type.name.includes(name))
      }, 100)
    }
  },

  mounted() {
    this.getData();
  }

}
</script>

<style scoped>
.product:hover {
  background-color: aliceblue;
}

.type-motor:hover {
  cursor: pointer;
  filter: invert(53%) sepia(40%) saturate(3043%) hue-rotate(158deg) brightness(90%) contrast(101%);
}

.type {
  font-weight: 600;
  margin: 20px 0;
}

.side-bar {
  border-right: 1px solid rgba(128, 128, 128, 0.3);
}

.title {
  font-size: 1.4em;
  font-weight: 500;
  padding: 10px 0;
  border-bottom: 1px solid rgba(128, 128, 128, 0.3);
}

.btn-outline-secondary:focus,
.btn:focus,
.btn-outline-secondary.active:focus {
  box-shadow: none;
}

.icon {
  filter: invert(47%) sepia(11%) saturate(332%) hue-rotate(167deg) brightness(93%) contrast(91%);
}
</style>