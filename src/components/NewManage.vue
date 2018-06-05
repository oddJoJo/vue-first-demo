<template>
    <div>
      <header>
        <h2>33个任务,10个已完成</h2>
      </header>
      <section>
        <div class="createForm" v-show="ok">
          <h2 class="tit">任务编辑</h2>
          <input id="text" autocomplete="off"  type="text" name="uname" v-model="userName"><br>
          <br>
          <a v-on:click="deleteInfo(index)" id="btn2">取消</a>
          <a id="btn1" type="button" v-on:click="insertInfo">创建</a>
        </div>
        <table class="tab">
          <tr style="background-color: pink">
          </tr>
          <tr v-for="(person,index) in infoArr">
            <button @click="delte"  id="btn3"></button>
            <td >{{person.uname}}</td>
            <td><div id="delete" @click="editor()"><i class="iconfont icon-gengduoda"></i></div></td>

          </tr>
        </table>
        <button id="btn" @click="Toggle()">
+
        </button>
        <div class="chenges">
          <h2>编辑</h2>
          <input id="chenges-inputs" type="text">
          <div @click="contern()" class="content">修改</div>
        </div>
      </section>
    </div>
</template>

<script>
    export default {
        name: "NewManage",
      data(){
          return{
            userName:'',
            infoArr:[],
            ok:false,
            a:''
          }
      },
      methods:{
        Toggle:function(){
          $(".createForm").toggle()
        },
        //添加数据的方法
        insertInfo(){
          var obj={};
          obj.uname=this.userName;
          this.infoArr.push(obj);
          $(".createForm").toggle()
          function   fnSaveForm(){
            window.external.AutoCompleteSaveForm(oForm);
            oForm.input_one.value="";
            oForm.input_two.value="";
          }

        },
        //删除的方法
        deleteInfo(index){
          this.infoArr.splice(index,1);
          $(".createForm").toggle()
        },
        //编辑方法
        delte(){
          $("tr").css("text-decoration","line-through")
        },
        editor(){
        $(".chenges").toggle();
        $(".createForm").css("display","none")
        },
        contern(){
          $(".chenges").toggle()
        }

      }
    }
</script>

<style scoped>
  @import "../assets/css/index.css";
</style>
