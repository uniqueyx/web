<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <h2>Essential Links</h2>
    <ul>
    </ul> -->
    <!-- <el-button>默认按钮</el-button>
    <el-button type="primary" @click="submit">提交</el-button>
    <el-button type="text">文字按钮</el-button> -->
    <!-- <el-input v-model=""></el-input> -->
    
    <!-- <el-table :data="infoList" style="width: 100%;">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column type="index" label="" width="60" align="center">
        </el-table-column>
        <el-table-column prop="name" label="" min-width="60"  >
        </el-table-column>
        <el-table-column prop="tel" label="" min-width="120"  >
        </el-table-column>
    </el-table> -->

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  label-width="120px" label-position="left" class="demo-ruleForm">
        <el-row type="flex" justify="center">
          <el-form-item prop="name" label="姓名">
              <el-input v-model="ruleForm.name" placeholder="请输入您的姓名"></el-input>
          </el-form-item>
        </el-row> 
        <!-- <el-row type="flex" justify="center">
          <el-form-item prop="wxAccount" label="微信号">
              <el-input v-model="ruleForm.wxAccount" placeholder="请输入您的微信号"></el-input>
          </el-form-item>
        </el-row>    
        <el-row type="flex" justify="center">
          <el-form-item prop="wxNick" label="微信名">
              <el-input v-model="ruleForm.wxNick" placeholder="请输入您的微信名"></el-input>
          </el-form-item>
        </el-row>  -->
        <el-row type="flex" justify="center">
          <el-form-item prop="tel" label="手机号">
              <el-input v-model="ruleForm.tel" placeholder="请输入您的手机号"></el-input>
          </el-form-item>
        </el-row> 
        <el-row type="flex" justify="center">
          <el-form-item prop="payment" label="收款账号">
              <el-input v-model="ruleForm.payment" placeholder="请输入您的收款账号"></el-input>
          </el-form-item>
        </el-row> 
        <el-row type="flex" justify="center">
          <el-form-item prop="identity" label="身份证号">
              <el-input v-model="ruleForm.identity" placeholder="请输入您的身份证号"></el-input>
          </el-form-item>
        </el-row> 
        <el-row type="flex" justify="center">
          <el-form-item prop="superior" label="上级代理编号">
              <el-input v-model="ruleForm.superior" placeholder="请输入您的上级代理编号"></el-input>
          </el-form-item>
        </el-row> 
        <!-- <el-row type="flex" justify="center">  
          <el-form-item prop="password" label="密码">
              <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
          </el-form-item>
        </el-row>   -->
      <el-row type="flex" justify="center"> 
        <div class="login-btn">
            <el-button type="primary" @click="submitForm('ruleForm')">确认提交</el-button>
        </div>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'info',
  data () {
    return {
      msg: '欢迎成为代理',
      infoList:[],
      ruleForm: {
        
      },
      rules: {
        name: [
          { required: true, message: "请输入您的姓名", trigger: "blur" }
          ,{ pattern: /^[\u4E00-\u9FA5]+$/, message:'姓名名只能是中文'}
          // ,{ validator: checkName }
          // ,{ min:10 , message:'最少10个字符',trigger:'blur'}
          // ,{ pattern:/^[a-zA-Z]w{5,17}$/, message: '以字母开头，长度在6-18之间， 只能包含字符、数字和下划线'}
          //,{ type: 'number', message: '年龄必须为数字值'}
        ],
        // wxAccount:[{ required: false, message: "请输入您的微信号", trigger: "blur" }],
        // wxNick:[{ required: false, message: "请输入您的微信名", trigger: "blur" }],
        tel:[{ required: true,type:'number', message: "请输入您的手机号", trigger: "blur" }
          ,{  pattern : /^1[3|4|5|7|8][0-9]\d{8}$/ , message:'请输入正确的手机号',trigger:'blur'}
        ],
        payment:[{ required: true, message: "请输入您的收款账号", trigger: "blur" }],
        identity:[{ required: true , message: "请输入您的身份证号", trigger: "blur" }
          ,{pattern: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,message: '证件号码格式有误！',trigger: 'blur'}],
        superior:[{ required: true, message: "请输入您的上级代理编号", trigger: "blur" }]
        //,password: [{ required: true, message: "请输入密码", trigger: "blur" }]
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
          console.log("提交"+this.ruleForm.name);
          
          this.$http.post(this.$apiUrl, {//172.10.154.31:3000    http://localhost:3000/api
              api_method: "api_insert",
              name: this.ruleForm.name,
              // wxAccount: this.ruleForm.wxAccount,
              // wxNick: this.ruleForm.wxNick,
              tel: this.ruleForm.tel,
              payment: this.ruleForm.payment,
              identity: this.ruleForm.identity,
              superior: this.ruleForm.superior
            })
            .then( res=> {
              console.log(res);
              if(res.status==200){
                this.$router.push({ path:'/SubmitSuccess'  });
                
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
  },
  mounted(){
    

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
