import createApiClient from './api.service';
import { useUserStore } from '@/store/UserStore';

class OrderService {
    constructor(baseUrl = '/api/orders') {
        this.api = createApiClient(baseUrl);
    }

    async getAll() {
        const userStore = useUserStore();
        const res = await this.api.get(('/'), {
            headers: { Authorization: `Bearer ${userStore.token}` }
        });
        return res.data;
    }

    async create(data) {
        const userStore = useUserStore();
        const res = await this.api.post("/", data, {
            headers: { Authorization: `Bearer ${userStore.token}` }
        })
        return res.data;
    }

    async getOne(id) {
        const userStore = useUserStore();
        const res = await this.api.get((`/${id}`), {
            headers: { Authorization: `Bearer ${userStore.token}` }
        });
        return res.data;
    }

    async findByUserId(uid) {
        const userStore = useUserStore();
        const res = await this.api.get((`/findByUserId/${uid}`), {
            headers: { Authorization: `Bearer ${userStore.token}` }
        });
        return res.data;
    }

    async update(id, data) {
        const userStore = useUserStore();
        const res = await this.api.put(`/${id}`, data, {
            headers: { Authorization: `Bearer ${userStore.token}` }
        })
        return res.data;
    }

    async delete(id) {
        const userStore = useUserStore();
        const res = await this.api.delete((`/${id}`), {
            headers: { Authorization: `Bearer ${userStore.token}` }
        })
        return res.data;
    }
}

export default new OrderService();