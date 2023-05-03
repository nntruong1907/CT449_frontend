<template>
  <div class="container ps-0" style="min-height: 100vh">
    <div class="row san-pham ms-0">
      <!-- Content -->
      <div class="thong-ke text-center mb-3 mt-3">
        <h4 class="fw-bolder">LIST OF PRODUCTS</h4>
      </div>
      <!-- Search and button -->
      <div class="row">
        <div class="col-md-6 mb-4">
          <input @input="this.search" type="text" class="form-control border-dark w-75" placeholder="Search..."
            style="background-color:transparent">
        </div>
        <div class="col-md-6 mb-4 ">
          <div class="text-end">
            <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#addProduct">
              <i class="fa-solid fa-plus"></i> Add product
            </button> <span></span>
            <button @click="this.getData()" type="button" class="btn btn-dark">
              Update
            </button>
          </div>
        </div>
      </div>
      <!-- Table product -->
      <table class="table table-light text-center">
        <thead>
          <tr>
            <th class="font-monospace" scope="col"> </th>
            <th class="font-monospace" scope="col">IMAGE</th>
            <th class="font-monospace" scope="col">PRODUCT'S NAME</th>
            <th class="font-monospace" scope="col">TYPE</th>
            <th class="font-monospace" scope="col">BRAND</th>
            <th class="font-monospace" scope="col">PRICE</th>
            <th class="font-monospace" scope="col">QUANTITY</th>
            <th class="font-monospace" scope="col"> </th>
          </tr>
        </thead>
        <tbody class="align-middle">
          <tr v-for="(product, i) in this.products" :key="product._id">
            <th class="align-middle" scope="row">{{ i + 1 }}</th>
            <td class="align-middle px-0 w-25">
              <img :src="product.image.image_path" class="m-0" height="100" />
            </td>
            <td class="align-middle px-0 w-25">{{ product.name }}</td>
            <td class="align-middle">{{ product.type.name }}</td>
            <td class="align-middle">{{ product.brand.name }}</td>
            <td class="align-middle px-0 w-25 text-danger fw-bold">{{ new Intl.NumberFormat('it-IT', {
              style: 'currency', currency: 'VND'
            }).format(product.price).replace("VND", "")
            }} <i class="fa-solid fa-dong-sign"></i></td>
            <td class="align-middle">{{ product.quantity }}</td>
            <td class="align-middle">
              <button type="button" @click="this.data = e" data-bs-toggle="modal" data-bs-target="#addProduct"
                class="btn btn-outline-primary px-3">
                <i class="fas fa-edit"></i></button>
              <button class="btn btn-outline-danger px-3 mt-2" @click="this.delete(product._id)">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Form AddProduct -->
    <!-- <div class="modal fade" id="addProduct" tabindex="-1" aria-labelledby="addProductLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="addProductLabel">Product</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6">
                <div class="form-floating mb-3">
                  <input v-model="this.data.name" type="text" class="form-control" id="floatingInput" placeholder="">
                  <label for="floatingInput">Product's name</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating mb-3">
                  <input v-model="this.data.price" type="number" class="form-control" id="floatingInput" placeholder="">
                  <label for="floatingInput">Price</label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-floating">
                  <select v-model="this.data.type.name" class="rounded form-select" id="floatingSelect" aria-label="type">
                    <option selected>Options</option>
                    <option value="cruiser">Cruiser</option>
                    <option value="sport">Sport</option>
                    <option value="street">Street</option>
                    <option value="touring">Touring</option>
                  </select>
                  <label for="floatingSelect">Type</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating mb-3">
                  <input type="file" class="form-control" @change="this.changeFile" style="padding-top: 1.9rem"
                    id="floatingInput" placeholder="">
                  <label for="floatingInput">Image</label>
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <div class="form-floating">
                  <select v-model="this.data.brand.name" class="rounded form-select" id="floatingSelect"
                    aria-label="Brand">
                    <option selected>Options</option>
                    <option value="bmw">BMW</option>
                    <option value="ducati">Ducati</option>
                    <option value="honda">Honda</option>
                    <option value="kawasaki">Kawasaki</option>
                  </select>
                  <label for="floatingSelect">Brand</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating mb-3">
                  <input v-model="this.data.quantity" type="number" class="form-control" id="floatingInput"
                    placeholder="Quantity">
                  <label for="floatingInput">Quantity</label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <div class="form-floating mb-3">
                  <input v-model="this.data.details.weight" type="number" class="form-control" id="floatingInput"
                    placeholder="">
                  <label for="floatingInput">Weight</label>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-floating mb-3">
                  <input v-model="this.data.details.length" type="number" class="form-control" id="floatingInput"
                    placeholder="">
                  <label for="floatingInput">Length</label>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-floating mb-3">
                  <input v-model="this.data.details.width" type="number" class="form-control" id="floatingInput"
                    placeholder="">
                  <label for="floatingInput">Width</label>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-floating mb-3">
                  <input v-model="this.data.details.height" type="number" class="form-control" id="floatingInput"
                    placeholder="">
                  <label for="floatingInput">Height</label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <div class="form-floating mb-3">
                  <input v-model="this.data.details.ground_clearance" type="number" class="form-control"
                    id="floatingInput" placeholder="">
                  <label for="floatingInput">Ground Clearance</label>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-floating mb-3">
                  <input v-model="this.data.details.fuel_capacity" type="number" class="form-control" id="floatingInput"
                    placeholder="">
                  <label for="floatingInput">Fuel Capacity</label>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-floating mb-3">
                  <input v-model="this.data.details.color" type="text" class="form-control" id="floatingInput"
                    placeholder="">
                  <label for="floatingInput">Color</label>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-floating mb-3">
                  <input v-model="this.data.details.year" type="number" class="form-control" id="floatingInput"
                    placeholder="">
                  <label for="floatingInput">Year</label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <div class="form-floating mb-3">
                  <input v-model="this.data.details.engine" type="text" class="form-control" id="floatingInput"
                    placeholder="">
                  <label for="floatingInput">Engine</label>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-floating mb-3">
                  <input v-model="this.data.details.power" type="number" class="form-control" id="floatingInput"
                    placeholder="">
                  <label for="floatingInput">Power</label>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-floating mb-3">
                  <input v-model="this.data.details.speed
                    " type="number" class="form-control" id="floatingInput" placeholder="">
                  <label for="floatingInput">Speed
                  </label>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-floating mb-3">
                  <input v-model="this.data.details.compression_ratio
                    " type="text" class="form-control" id="floatingInput" placeholder="">
                  <label for="floatingInput">Compression Ratio
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button v-if="this.data._id != null" type="button" class="btn btn-primary" data-bs-dismiss="modal"
              @click="this.handleUpdate()">Update</button>
            <button v-else type="button" class="btn btn-primary" data-bs-dismiss="modal"
              @click="this.handleAdd()">Add</button>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import ProductService from '@/services/product.service';
export default {
  data() {
    return {
      products: [],
      productsTemp: [],
      filter: '',
      data: {
        details: {
        }
      },
      selectedFile: ''
    }
  },
  methods: {
    async getData() {
      this.productsTemp = await ProductService.getAll();
      this.products = this.productsTemp.reverse();
      console.log("🚀 ~ file: ProductManager.vue:253 ~ getData ~ this.products:", this.products)
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
      this.products = this.productsTemp.filter(e => e.brand.name.includes(name) || e.type.name.includes(name))
    },
    changeFile(e) {
      const file = e.target.files[0];
      this.selectedFile = file;
    },
    buildFormData(formData, data, parentKey) {
      if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
        Object.keys(data).forEach(key => {
          this.buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
        });
      } else {
        const value = data == null ? '' : data;

        formData.append(parentKey, value);
      }
    },
    async handleAdd() {
      var formData = new FormData();
      formData.append('file', this.selectedFile);
      this.buildFormData(formData, this.data)
      await ProductService.create(formData);
      this.getData();
    },

    async handleUpdate() {
      var formData = new FormData();
      formData.append('file', this.selectedFile);
      this.buildFormData(formData, this.data)
      const rs = await ProductService.update(this.data._id, formData);
      this.getData();
      alert(rs.message);
    },
    async delete(id) {
      await ProductService.delete(id);
      this.getData();
    },
    search(title) {
      this.products = this.productsTemp.filter(e => e.name.toLowerCase().includes(title.target.value.toLowerCase()))
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

.type-car:hover {
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

.icon {
  filter: invert(47%) sepia(11%) saturate(332%) hue-rotate(167deg) brightness(93%) contrast(91%);
}
</style>