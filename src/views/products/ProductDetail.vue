<template>
    <div class="container-fluid mb-5 position-relative background-image" style="height:90vh">
        <div class="banner-title row">
            <div class="car">
                <img :src="this.product[0]?.image.image_path" class="w-100 py-3" height="600" />
                <p class="ms-5 text-secondary"><i class="fa-solid fa-circle-info"></i> All images and specifications
                    shown are for illustrative purposes only. PLEASE double check the Customer recommendation provided by
                    the Distributor to ensure correct equipment and vehicle configuration.
                </p>
            </div>
        </div>
        <div class="banner-title row">
            <div class="title">
                <h4>{{ this.product[0]?.name }}</h4>
                <p class="mt-4 m-0 text-secondary font-monospace">Price:</p>
                <p class="fw-bold"> {{ new Intl.NumberFormat('it-IT', {
                    style: 'currency', currency: 'VND'
                }).format(this.product[0]?.price).replace("VND", "")
                }} <i class="fa-solid fa-dong-sign"></i></p>
                <hr />
                <div>
                    <span><img src="@/assets/logo/brand.png" width="18" class="icon" />
                        {{ this.product[0]?.brand.name }}</span>
                    <span class="ms-5"><img src="@/assets/logo/type.png" width="" class="icon" />
                        {{ this.product[0]?.type.name }}</span>
                </div>
                <div class="mt-5">
                    <button class="btn-dark rounded" data-bs-toggle="modal" data-bs-target="#purchase">
                        Purchase
                    </button>
                </div>
                <!-- Form order -->
                <div class="modal fade" id="purchase" tabindex="-1" aria-labelledby="purchaseLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="purchaseLabel">Order</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body p-4 px-5">
                                <div class="row m-0">
                                    <div class="col-md-12">
                                        <div class="form-floating mb-3">
                                            <input v-model="this.data.receiver.name" type="text"
                                                class="form-control rounded" id="floatingInput" placeholder="">
                                            <label for="floatingInput">Recipient's name:</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row m-0">
                                    <div class="col-md-6">
                                        <div class="form-floating mb-3">
                                            <input v-model="this.data.receiver.phone" type="text"
                                                class="form-control rounded" id="floatingInput" placeholder="">
                                            <label for="floatingInput">Phone number</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating mb-3">
                                            <select v-model="this.data.payment" class="form-select" id="floatingSelect"
                                                aria-label="payment">
                                                <!-- <option selected>Options</option> -->
                                                <option value="COD">COD</option>
                                                <option value="Credit Card">Credit Card</option>
                                                <option value="Visa">Visa</option>
                                            </select>
                                            <label for="floatingSelect">Payment</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row m-0">
                                    <div class="col-md-12">
                                        <div class="form-floating mb-3">
                                            <input v-model="this.data.receiver.email" type="email"
                                                class="form-control rounded" id="floatingInput" placeholder="">
                                            <label for="floatingInput">Email</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row m-0">
                                    <div class="col-md-12">
                                        <div class="form-floating mb-3">
                                            <input v-model="this.data.receiver.address" type="text"
                                                class="form-control rounded" id="floatingInput" placeholder="">
                                            <label for="floatingInput">Receiving address</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row m-0">
                                    <div class="mt-2">
                                        <p class="m-0">I agree to receive information via</p>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1"
                                                value="option1" checked>
                                            <label class="form-check-label" for="inlineCheckbox1">Phone</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2"
                                                value="option2" checked>
                                            <label class="form-check-label" for="inlineCheckbox2">SMS/MMS</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2"
                                                value="option2" checked>
                                            <label class="form-check-label" for="inlineCheckbox2">Email</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary rounded"
                                    data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary rounded" data-bs-dismiss="modal"
                                    @click="this.handleSubmit()">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Details product -->
    <div class="container-fluid">
        <h2 class="text-center mb-5 font-monospace">Detailed specificationst</h2>
        <div class="row">
            <div class="col-md-4">
                <img :src="this.product[0]?.image.image_path" class="w-100" />
            </div>
            <div class="col-md-4 detail">
                <div>
                    <p class="font-monospace">Weight</p>
                    <span>{{ this.product[0]?.details.weight }} kg</span>
                </div>
                <div>
                    <p class="font-monospace">Length</p>
                    <span>{{ this.product[0]?.details.length }} mm</span>
                </div>
                <div>
                    <p class="font-monospace">Width</p>
                    <span>{{ this.product[0]?.details.width }} mm</span>
                </div>
                <div>
                    <p class="font-monospace">Height</p>
                    <span>{{ this.product[0]?.details.height }} mm</span>
                </div>
                <div>
                    <p class="font-monospace">Ground Clearance</p>
                    <span>{{ this.product[0]?.details.ground_clearance }} mm</span>
                </div>
                <div>
                    <p class="font-monospace">Fuel Capacity</p>
                    <span>{{ this.product[0]?.details.fuel_capacity }} l</span>
                </div>
            </div>
            <div class="col-md-4 detail">
                <div>
                    <p class="font-monospace">Color</p>
                    <span>{{ this.product[0]?.details.color }} </span>
                </div>
                <div>
                    <p class="font-monospace">Year</p>
                    <span>{{ this.product[0]?.details.year }} </span>
                </div>
                <div>
                    <p class="font-monospace">Engine</p>
                    <span>{{ this.product[0]?.details.engine }} </span>
                </div>
                <div>
                    <p class="font-monospace">Power</p>
                    <span>{{ this.product[0]?.details.power }} hp</span>
                </div>
                <div>
                    <p class="font-monospace">Speed</p>
                    <span>{{ this.product[0]?.details.speed }} kmph</span>
                </div>
                <div>
                    <p class="font-monospace">Compression Ratio</p>
                    <span>{{ this.product[0]?.details.compression_ratio }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductService from '@/services/product.service';
import OrderService from '@/services/order.service';
import { useUserStore } from "@/store/UserStore";
export default {
    data() {
        const userStore = useUserStore();
        return {
            product: {},
            userStore,
            data: {
                receiver: {
                    name: "",
                    email: "",
                    phone: "",
                    address: ""
                },
                payment: ""
            }
        }
    },
    props: {
        id: { type: String, required: true },
    },
    methods: {
        async getData() {
            this.product = await ProductService.getOne(this.id);
        },
        async handleSubmit() {
            try {
                await OrderService.create({ ...this.data, _productid: this.product[0]?._id });
                alert("Sent! Please wait for us to contact")
            } catch (error) {
                alert('Send failed')
            }
            this.getData();
        }
    },
    created() {
        this.getData();
    }
}
</script>

<style scoped>
.banner-title {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    color: black;
}

.title {
    position: absolute;
    top: 50px;
    right: 100px;
    padding: 40px;
    width: 23em;
    height: fit-content;
    background-color: white;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.349);
}

.car {
    position: absolute;
    width: 65%;
    height: fit-content;
    font-size: .9em;
}

.title h4 {
    font-size: 1.8em;
}

.btn-dark {
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0.815);
    color: aliceblue;
    border-radius: 0;
}

.img-title {
    font-size: 1em;
    font-weight: 600;
    margin-top: 20px;
}

.background-image {
    background-image: url('https://png.pngtree.com/thumb_back/fh260/background/20210115/pngtree-fantasy-minimalist-style-e-commerce-white-gradient-geometric-basic-background-image_519758.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}

.icon {
    filter: invert(47%) sepia(11%) saturate(332%) hue-rotate(167deg) brightness(93%) contrast(91%);
}

.detail div {
    margin-bottom: 20px;
    font-size: 1.2rem;
    margin-left: 20px;

}

.detail p {
    margin: 0;
    margin-bottom: .5rem;
    font-weight: 600;
}
</style>