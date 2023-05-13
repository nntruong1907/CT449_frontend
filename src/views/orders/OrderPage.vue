<template>
    <main>
        <div class="container my-5">
            <div class="row table-product">
                <table class="table text-center">
                    <thead>
                        <tr>
                            <th class="font-monospace" scope="col"> </th>
                            <th class="font-monospace" scope="col">IMAGE</th>
                            <th class="font-monospace" scope="col">PRODUCT'S NAME</th>
                            <th class="font-monospace" scope="col">PRICE</th>
                            <th class="font-monospace" scope="col">STATUS</th>
                            <th class="font-monospace" scope="col">ORDER INFORMATION</th>
                            <!-- <th class="font-monospace" scope="col">CANCEL</th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(order, i) in this.orders">
                            <th scope="row" class="align-middle">{{ i + 1 }}</th>
                            <td class="col-img align-middle">
                                <router-link :to="{
                                    name: 'product.detail',
                                    params: { id: order.product._id },
                                }">
                                    <img :src="order.product.image.image_path" width="200" />
                                </router-link>
                            </td>
                            <td class="align-middle">{{ order.product.name }}</td>
                            <td class=" align-middle">{{ new Intl.NumberFormat('it-IT', {
                                style: 'currency', currency: 'VND'
                            }).format(order.product.price).replace("VND", "")
                            }} <i class="fa-solid fa-dong-sign"></i>
                            </td>
                            <td v-if="order.status == 'Unconfirmed'"
                                class="fw-bold text-warning align-middle">Unconfirmed</td>
                            <td v-else class="fw-bold text-success align-middle">{{ order.status }}</td>
                            <td class="align-middle">
                                <div class="row">
                                    <div class="col-md-6 text-end">
                                        <strong>Recipient's name: </strong>
                                    </div>
                                    <div class="col-md-6 text-start">
                                        <p>{{ order.receiver.name }}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 text-end">
                                        <strong>Phone number: </strong>
                                    </div>
                                    <div class="col-md-6 text-start">
                                        <p>{{ order.receiver.phone }}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 text-end">
                                        <strong>Address: </strong>
                                    </div>
                                    <div class="col-md-6 text-start">
                                        <p>{{ order.receiver.address }}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 text-end">
                                        <strong>Payment: </strong>
                                    </div>
                                    <div class="col-md-6 text-start">
                                        <p>{{ order.payment }}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 text-end">
                                        <strong>Time Order: </strong>
                                    </div>
                                    <div class="col-md-6 text-start">
                                        <p>{{ order.date_order }}</p>
                                    </div>
                                </div>
                            </td>
                            <!-- <td>
                                <router-link to="/delCart?masp="><button class="btn btn-dark text-light">X</button>
                                </router-link>
                            </td> -->
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</template>
<script>
import OrderService from '@/services/order.service';
import { useUserStore } from "@/store/UserStore";
export default {
    data() {
        const userStore = useUserStore();
        return {
            orders: [],
            userStore,
        }
    },
    methods: {
        async getData() {
            if (this.userStore.user.phone != null) {
                this.orders = await OrderService.findByUserId(this.userStore.user._id);
            }
        }
    },
    created() {
        this.getData();
    }

}
</script>

<style scoped></style>