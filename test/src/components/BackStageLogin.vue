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
    
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="60px" label-position="left" class="demo-ruleForm">
      
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
        <!-- <p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名和密码随便填。</p> -->
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Test2',
  data () {
    return {
      msg: '登录',
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
    submitForm(formName) {
      console.log("submitForm>>")
      this.$refs[formName].validate(valid => {
        if (valid) {
          //localStorage.setItem("ms_username", this.ruleForm.username);
          //this.$router.push("/");
          console.log("提交"+this.ruleForm.username);
          
          this.$http.post(this.$apiUrl, {//172.10.154.31:3000    http://localhost:3000/api
              api_method: "api_admin_login",
              username: this.ruleForm.username,
              password: this.ruleForm.password,
            })
            .then( res=> {
              console.log(res);
              if(res.status==200){
                if(res.data=="fail"){
                  this.$alert('账号或密码错误！', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                      //this.$router.push({ path:'/BackStageLogin'  });
                      sessionStorage.removeItem("admin_username");
                    }
                  });
                }else{
                  sessionStorage.setItem("admin_username", this.ruleForm.username);
                  this.$router.push({ path:'/BackStageList'  });
                }
              }
            })
            .catch(function (res) {
              console.log(res);
            });
        
        } else {
          console.log("error submit!!");
          return false;
        }
      });  
    },
    submit(){
      console.log("submit>>");
      this.$router.push({ path:'/Test'  });
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
