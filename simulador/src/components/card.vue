<template>
    <div>
        <div class="card" > 
            <b-card class="text-start" style="border: none">
                <div class="primary text-light " >                   
                        <h4> {{codLabel}} Pergunta:</h4>
                        
                            <div >
                            <div  class="subtitle" style="padding:5px"  >  
                                <b-form-radio :name= "perguntas" value="A"> &nbsp; Option A</b-form-radio>                         
                            </div>
                            <div class="subtitle" style="padding:5px"  >
                                <b-form-radio :name= "perguntas" value="B">&nbsp; Option B</b-form-radio>   
                            </div>
                            <div class="subtitle" style="padding:5px" >
                                <b-form-radio :name= "perguntas" value="C">&nbsp; Option C</b-form-radio>   
                            </div>
                            <div class="subtitle" style="padding:5px" >
                                <b-form-radio :name= "perguntas" value="D">&nbsp; Option D</b-form-radio>   
                            </div>
                            <div class="subtitle " style="padding:5px" >
                                <b-form-radio :name= "perguntas" value="E">&nbsp; Option E</b-form-radio>   
                               
                            
                        </div>
                    </div>    
                </div>
            </b-card>
        </div>
        
    </div>
    
        
</template>



<script>
import body from './body.vue'
export default {
    name: 'card',
    component:{
        body
    },
    props:{
        perguntas:{
            type: String,
            required: true
        },
        codLabel:{
            type: String,
            required:true
        }
    
    }
}
</script>

<style  >

 .subtitle:hover{
     background-color: rgb(105, 105, 105);
     border-radius: 50px;
     color: rgb(223, 223, 223);
 }
 
 
 h4{
    color: black;
    padding-bottom: 10px ;
  }
</style>
