<template>
  <div>
    <!-- <button @click="get()">获取user表数据</button> -->
  </div>
  <table class="hovertable">
    <tr>
      <th>ID</th>
      <th>姓名</th>
      <th>密码</th>
      <th>性别</th>
      <th>出生日期</th>
    </tr>
    <tr v-for="(item, index) in user" v-bind:key="index">
      <td>{{ item.s_id }}</td>
      <td>{{ item.s_name }}</td>
      <td>{{ item.s_pwd }}</td>
      <td>{{ item.s_sex }}</td>
      <td>{{ item.s_birthday }}</td>
    </tr>
  </table>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      user: [],
    };
  },
  created() { 
    this.get()
   },
  methods: {
    get() {
      axios.get('http://127.0.0.1/user').then(res => {
        this.user = res.data
        console.log(res.data);
      }).catch(err => {
        console.log("获取数据失败" + err);
      })
    }
  }

}
</script>
<style scoped>
table {
  text-align: left;
}

th {
  width: 120px;
}
</style>
