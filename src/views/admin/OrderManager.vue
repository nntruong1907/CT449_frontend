<template>
  <div class="container ps-0" style="min-height: 100vh">
    <div class="row san-pham mt-4 ms-0">
      <div class="thong-ke text-center mb-3">
        <h4 class="fw-bolder">ORDER LIST</h4>
      </div>
      <div class="row justify-content-between">
        <div class="col-md-3">
          <select class="rounded ms-auto" style="padding:10px" @change="this.filter">
            <option value=1>Unconfirmed</option>
            <option value=2>All</option>
          </select>
        </div>
        <div class=" col-6 mb-4 text-end">
          <button type="button" class="btn btn-dark" @click="this.getData">
            Update
          </button>
        </div>
      </div>
      <table class="table table-light text-center">
        <thead>
          <tr>
            <th class="font-monospace" scope="col"> </th>
            <th class="font-monospace" scope="col">SENT DATE</th>
            <th class="font-monospace" scope="col">RESPONSE TIME</th>
            <th class="font-monospace" scope="col">CUSTOMER</th>
            <th class="font-monospace" scope="col">PHONE NUMBER</th>
            <th class="font-monospace" scope="col">PRODUCT</th>
            <th class="font-monospace" scope="col">PAYMENT</th>
            <th class="font-monospace" scope="col">STATUS</th>
          </tr>
        </thead>
        <tbody class="align-middle">
          <tr v-for="(e, i) in this.orders" :key="i">
            <th class="align-middle" scope="row">{{ i + 1 }}</th>
            <td class="align-middle">{{ e.date_order }}</td>
            <td class="align-middle">{{ e.date_update }}</td>
            <td class="align-middle fw-bold font-monospace">{{ e.receiver.name }}</td>
            <td class="align-middle">{{ e.receiver.phone }}</td>
            <td class="align-middle fw-bold font-monospace">{{ e.product.name }}</td>
            <td class="align-middle fw-light">{{ e.payment }}</td>
            <td class="align-middle" v-if="e.status == 'Unconfirmed'">

              <button type="button" @click="this.handleSubmit(e._id, true)" data-bs-toggle="modal"
                data-bs-target="#addProduct" class="btn btn-outline-success px-3">
                <i class="fas fa-check"></i>
              </button> <span></span>
              <button class="btn btn-outline-danger px-3" @click="this.handleSubmit(e._id, false)">
                <i class="fas fa-xmark mx-1"></i>
              </button>
            </td>
            <td class="align-middle font-monospace text-success" v-else>{{ e.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import OrderService from '@/services/order.service';
export default {
  data() {
    return {
      orders: [],
      allOrder: [],
      // status: {}
    }
  },
  methods: {
    async getData() {
      this.allOrder = await OrderService.getAll();
      this.orders = this.allOrder.filter((e) => e.status == "Unconfirmed")
    },
    async handleSubmit(id, bool) {
      try {
        if (bool) {
          await OrderService.update(id, { status: "Confirmed" });
          alert('Order confirmation successful!')
        } else {
          await OrderService.delete(id);
          alert('Deleted order successfully!')
        }
        this.getData();
      } catch (error) {
        console.log(error);
      }
    },
    filter(e) {
      if (e.target.value == 2) {
        this.orders = this.allOrder;
      } else {
        this.orders = this.allOrder.filter((e) => e.status == null)
      }
    }
  },
  created() {
    this.getData();
  }

}
</script>
