<template >
  <b-container class="bv-example-row displayGrid">
        <b-row>
            <!-- barra lateral -->
            <b-col class="coluna1" col lg="1" >
                <div class="navLateral" variant="link"  >
                <ul class="list-unstyled ">
                    <li>
                        <a href="#" class="iconsLaterais"  >
                            <font-awesome-icon icon="border-all"/>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="iconsLaterais"  >
                            <font-awesome-icon icon="broadcast-tower"/>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="iconsLaterais" >
                            <font-awesome-icon icon="play-circle"/>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="iconLight iconsLaterais"  >
                            <font-awesome-icon icon="lightbulb"/>
                        </a>
                    </li>
                </ul>
            </div>
            </b-col>
    <!-- Questionario -->
            <b-col col lg="8"  class="coluna2 ">
                <h1>Questionário de Conclusão de Curso</h1>
                <p class="subtitle">O objetivo desta revisão é trazer parte dos estudos sobre um assunto pouco explorado: a relação entre o exercício físico e os aspectos psicobiológicos.</p>
                <br>
                <form>
                    <div class = "Cards">
                        
                        <card :perguntas="grupo1"></card><br>
                        <card/><br>
                        <card/><br>
                        <card/><br>
                        <card/>
                               
                    </div>
                    <div class="text-center botoes" >
                        <b-button variant="danger"  class = "botao">Enviar</b-button> &nbsp;                  
                        <b-button variant="outline-dark" class = "botao">Voltar</b-button>
                    </div>
                 </form>
            </b-col>
            <!-- Parte da direita -->
            <b-col  col lg="4" class = "coluna3">
                <div style="height: 580px">
                    <b-tabs content-class="mt-3" fill>
                    <b-tab title="Aulas"  active><font-awesome-icon icon="play-circle"/> <p>Nenhum vídeo cadastrado</p></b-tab>
                    <b-tab title="Materiais" ><font-awesome-icon icon="file-alt"/>
                    <p>Nenhum material cadastrado </p></b-tab>
                    </b-tabs>
                 </div>
                 <b-row style="background:rgb(243, 243, 243)" class="progresso"><progresso></progresso></b-row>
             </b-col>
             
        </b-row> 
         
    </b-container>
</template>



<script>
import card from './card.vue'
import progresso from './progresso.vue'




export default {
  name: 'corpo',
  components: {
      card,
    progresso
    
    
  },
  data: function(){
      return{ 
          grupo1:'grupo1'

      }
  }

    
}

</script>


<style>
 .navLateral{
        width: 60px;
        height: 587px;      
        background: #ffffff;
        background: linear-gradient(to top, #ffffff, #ffffff);
        border-radius: 0;
        margin-bottom: 0;
        padding: 50px 0px 0 0;
        min-height: 70px;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
        position: fixed;
        top:70px;
        left: 0px;
        
}
    .iconsLaterais{
        text-decoration: none;
        color: gray;
        display: block;
        padding-bottom: 45px;
        
    }
    .iconsLaterais:hover{
        color: gray;
    }
    .iconLight{
        padding-top: 170px;
    }
    .displayGrid{
        margin-top: 90px;
        
    }
    .subtitle{
        font-size: 14px;
        color: rgb(165, 165, 165);
        
    }
    .Cards{
        position: relative;
        left: 12px;
    }
   
    /*botoes*/
    .botao{
        
        padding-left: 40px !important; 
        padding-right: 40px !important;
    }
    .botoes{
        padding-top: 8px;
    }
    
    
    /*colunas Grid*/
    .coluna1{
        margin: 0px -100px 0px 0px;
        
    }
    .coluna2{
        margin: 0px 5px 0px 0px;
        height: 565px;
        overflow-y: scroll;
        background-color: rgb(253, 253, 253);
        position: relative;
        top: 0px;
        left: 0px;
        border-radius:  10px 0px 0px 10px;
        text-align: left;
        
        
}   
    .coluna3{
        background-color: rgb(241, 241, 241);
        margin: 0px 0px 0px 0px;
        border-radius: 0px 10px 10px 0px;
        overflow-y: scroll;
        height: 565px;
        position: absolute;
        top:73px;
        left: 860px;
        text-decoration: none;
        color: black !important;

    }
    .nav-link{
        color: rgb(70, 70, 70) !important;
    }
    
    

    
</style>