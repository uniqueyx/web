<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      
      <br>

    </ul>
    <!-- <el-button>默认按钮</el-button>
    <el-button type="primary" @click="submit">提交</el-button>
    <el-button type="text">文字按钮</el-button> -->
    <!-- <el-input v-model=""></el-input> -->
    
    <!-- <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="60px" label-position="left" class="demo-ruleForm">
      
      <el-row type="flex" justify="center">
        <el-form-item prop="username" label="账号">
            <el-input v-model="ruleForm.username" placeholder="请输入账号"></el-input>
        </el-form-item>
      </el-row>    
      <el-row type="flex" justify="center">  
        <el-form-item prop="password" label="密码">
            <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
      </el-row>  
      <el-row type="flex" justify="center"> 
        <div class="login-btn">
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
      </el-row>
        <p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名和密码随便填。</p> 
    </el-form> -->
     <!-- highlight-current-row  @selection-change="selsChange" -->
    <el-table :data="infoList" v-loading="listLoading" style="width: 100%;">
        <!-- <el-table-column type="selection" width="55">
        </el-table-column> -->
        <el-table-column type="index" label="序号" width="60" align="center">
        </el-table-column>
        <el-table-column prop="name" label="姓名" min-width="60"  sortable>
        </el-table-column>
        <el-table-column prop="tel" label="电话" min-width="60"  sortable>
        </el-table-column>
        <el-table-column prop="info" label="信息" min-width="120"  sortable>
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Test2',
  data () {
    return {
      listLoading:true,
      infoList:[],
      msg: '列表',
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
          //{ validator: checkName }
          // { min:10 , message:'最少10个字符',trigger:'blur'},
          // { pattern: /^[\u4E00-\u9FA5]+$/, message:'用户名只能是中文'},
          // { pattern:/^[a-zA-Z]w{5,17}$/, message: '以字母开头，长度在6-18之间， 只能包含字符、数字和下划线'}
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }

    }
  },
  methods: {
    // getUsers(){
      
    // }
    selsChange(){}
  },
  mounted() {
      //this.getUsers();
    console.log(!sessionStorage.admin_username,"mounted>>>",sessionStorage.admin_username);
    if(!sessionStorage.admin_username){
      console.log("为什么没弹窗")
      this.$alert('请先登录', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$router.push({ path:'/BackStageLogin'  });
          }
        });
      return;
    }  
    this.$http.post(this.$apiUrl, {//172.10.154.31:3000    http://localhost:3000/api
      api_method: "api_get"
      //name: this.ruleForm.username,
      //tel: this.ruleForm.password,
      //info:"testinfo"
    })
    .then( res=> {
      console.log("数据",res);
      if(res.status==200){
        //this.$router.push({ path:'/Test'  });
        this.infoList=res.data;
        this.listLoading=false;
      }
    })
    .catch(function (res) {
      console.log(res);
      this.listLoading=false;
    });


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
