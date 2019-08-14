<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <h2>Essential Links</h2> -->
    <p style="text-align:left">{{ msg }}</p>
    <ul>

    </ul>
    <el-button type="primary" @click="adminCreate">创建管理员账号</el-button>
    <br><br>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  methods:{
    adminCreate(){
      console.log("nextSubmit>>");
      //this.$router.push({ path:'/SubmitInfo'  });
      this.$http.post(this.$apiUrl, {//172.10.154.31:3000    http://localhost:3000/api
              api_method: "api_admin_create"
              // name: this.ruleForm.username,
              // tel: this.ruleForm.password,
              // info:"testinfo"
            })
            .then( res=> {
              console.log(res);
              if(res.status==200){
                this.$message('账号创建成功！');
                
              }
            })
            .catch(function (res) {
              console.log(res);
            });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
