import createApiClient from './api.service';
import { useUserStore } from '@/store/UserStore';

class BrandService {
    constructor(baseUrl = '/api/brands') {
        this.api = createApiClient(baseUrl);
    }

    async getAll() {
        return (await this.api.get('/')).data;
    }

    async create(data) {
        const userStore = useUserStore();
        const res = await this.api.post("/", data, {
            headers: {
                Authorization: `Bearer ${userStore.token}`,
                "Content-Type": "multipart/form-data",
                Accept: "multipart/form-data",
            }
        })
        return res.data;
    }

    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }

    async update(id, data) {
        const userStore = useUserStore();
        const res = await this.api.put(`/${id}`, data, {
            headers: {
                Authorization: `Bearer ${userStore.token}`,
                'Content-Type': 'multipart/form-data',
                Accept: "multipart/form-data",
            }
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

export default new BrandService();