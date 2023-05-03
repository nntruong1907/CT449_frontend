import createApiClient from './api.service';
import { useUserStore } from '@/store/UserStore';

// const userStore = useUserStore();
// const commonConfig = {
//     headers: {
//         'Authorization': `Bearer ${userStore.user.token}`,
//         "Content-Type": "application/json",
//         Accept: "application/json",
//     }
// }

class UserService {
    constructor(baseUrl = '/api/users') {
        this.api = createApiClient(baseUrl);
    }

    async login(data) {
        return (await this.api.post("/login", data)).data;
    }
    async signup(data) {
        return (await this.api.post("/signup", data)).data;
    }
    async refreshToken() {
        try {
            const res = await this.api.post(('/refresh'), {
                withCredentials: true
            });
            return res.data;
        } catch (error) {
            console.log(error)
        }
    }

    async getAll() {
        const userStore = useUserStore();
        const res = await this.api.get(('/'), {
            headers: { Authorization: `Bearer ${userStore.token}` },
        });
        return res.data;
    }

    async logout() {
        const userStore = useUserStore();
        await this.api.post(("/logout"), {
            headers: { Authorization: `Bearer ${userStore.token}` }
        });
    }

    async getOne(id) {
        const userStore = useUserStore();
        const res = await this.api.get((`/${id}`), {
            headers: { Authorization: `Bearer ${userStore.token}` }
        });
        return res.data;
    }

    async update(id, data) {
        const userStore = useUserStore();
        const res = await this.api.put(`/${id}`, data, {
            headers: {
                Authorization: `Bearer ${userStore.token}`,
                "Content-Type": "multipart/form-data",
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

export default new UserService();