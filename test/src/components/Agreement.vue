<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <h2>Essential Links</h2> -->
    <p style="text-align:left">{{ msg }}</p>
    <ul>

    </ul>
    <el-button type="primary" @click="nextSubmit">下一步</el-button>
    <br><br>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议'
      +'协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议'
      +'协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议'
      +'协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议'
      +'协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议'
      +'协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议'
      +'协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议'
      +'协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议'
      +'协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议'
      +'协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议'
      +'协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议'
      +'协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议'
      +'协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议'
      +'协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议'
      +'协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议'
      +'协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议'
      +'协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议'
      +'协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议'
      +'协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议'
      +'协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议'
      +'协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议'
      +'协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议'
      +'协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议'
      +'协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议协议'
    }
  },
  methods:{
    nextSubmit(){
      console.log("nextSubmit>>");
      this.$router.push({ path:'/SubmitInfo'  });
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
