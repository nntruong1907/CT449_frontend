<template>
  <div class="container ps-0" style="min-height: 100vh">
    <div class="row san-pham mt-4 ms-0">
      <div class="thong-ke text-center mb-3">
        <h4 class="fw-bolder">USER LIST</h4>
      </div>
      <div class="mb-4 text-end">
        <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#addUser">
          <i class="fa-solid fa-plus"></i> Add user
        </button> <span></span>
        <button type="button" class="btn btn-dark" @click="this.getData()">
          Update
        </button>
      </div>
      <div class="modal fade" id="addUser" tabindex="-1" aria-labelledby="addUserLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="addUserLabel">User</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-floating mb-3">
                    <input v-model="this.data.name" type="text" class="form-control" id="floatingInput"
                      placeholder="">
                    <label for="floatingInput">Name</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating mb-3">
                    <input v-model="this.data.phone" type="text" class="form-control" id="floatingInput"
                      placeholder="">
                    <label for="floatingInput">Phone number</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-floating mb-3">
                    <input v-model="this.data.email" type="text" class="form-control" id="floatingInput"
                      placeholder="">
                    <label for="floatingInput">Email</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating mb-3">
                    <input v-model="this.data.address" type="text" class="form-control" id="floatingInput"
                      placeholder="">
                    <label for="floatingInput">Address</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-floating mb-3">
                    <input v-model="this.data.account.username" type="text" class="form-control"
                      id="floatingInput" placeholder="">
                    <label for="floatingInput">Username</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating mb-3">
                    <input v-model="this.data.account.password" type="password" class="form-control"
                      id="floatingInput" placeholder="">
                    <label for="floatingInput">Password</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button v-if="this.data._id != null" type="button" class="btn btn-primary "
                data-bs-dismiss="modal" @click="this.handleUpdate()">Update</button>
              <button v-else type="button" class="btn btn-primary " data-bs-dismiss="modal"
                @click="this.handleAdd()">Add</button>
            </div>
          </div>
        </div>
      </div>
      <table class="table table-light table-hover text-center">
        <thead>
          <tr>
            <th class="font-monospace" scope="col"> </th>
            <th class="font-monospace" scope="col">USERNAME</th>
            <th class="font-monospace" scope="col">NAME</th>
            <th class="font-monospace" scope="col">PHONE NUMBER</th>
            <th class="font-monospace" scope="col">EMAIL</th>
            <th class="font-monospace" scope="col">ADDRESS</th>
            <th class="font-monospace" scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(e, i) in this.users">
            <th class="align-middle" scope="row">{{ i + 1 }}</th>
            <td class="align-middle">{{ e.account.username }}</td>
            <td class="align-middle">{{ e.name }}</td>
            <td class="align-middle">{{ e.phone }}</td>
            <td class="align-middle">{{ e.email }}</td>
            <td class="align-middle">{{ e.address }}</td>
            <td class="align-middle"><button type="button" class="btn btn-outline-primary px-3" @click="this.data = e"
                data-bs-toggle="modal" data-bs-target="#addUser">
                <i class="fas fa-edit"></i></button>
              <button class="btn btn-outline-danger ms-1 px-3" @click="this.delete(e._id)">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import UserService from '@/services/user.service';
export default {
  data() {
    return {
      users: [],
      productsTemp: [],
      filter: '',
      data: {
        account: {
        }
      },
    }
  },
  methods: {
    async getData() {
      this.users = await UserService.getAll();
      this.users = this.users.reverse();
    },
    async handleAdd() {
      await UserService.signup(this.data);
      alert('User successfully created!');
      this.getData();
    },
    async handleUpdate() {
      try {
        if (confirm('Update confirmation?')) {
          const rs = await UserService.update(this.data._id, this.data);
          alert(rs.message);
        }
        this.getData();
      } catch (error) {
        alert(error)
      }
    },
    async delete(id) {
      try {
        if (confirm('Definitely delete?')) {
          const rs = await UserService.delete(id);
          alert(rs.message);
        }
        this.getData();
      } catch (error) {
        alert(error)
      }
    }
  },

  mounted() {
    this.getData();
  }

}
</script>