<template>
    <div>
        <div class="card" > 
            <b-card class="text-start" style="border: none">
                <div class="primary text-light " >                   
                        <h4> Pergunta:</h4>
                        <p></p>
                            <div >
                            <div  class="subtitle" >                             
                                &nbsp;&nbsp;&nbsp;<input   type="radio"  name= "resposta" id="A" value="A" >
                                <label for="A" ><p style="padding-left:10px"> Option A</p></label>
                            </div>
                            <div class="subtitle" >
                                &nbsp;&nbsp;&nbsp;<input type="radio" name="resposta" id="B" value="B" >
                                <label for="B" ><p style="padding-left:10px">Option B</p></label>
                            </div>
                            <div class="subtitle" >
                                &nbsp;&nbsp;&nbsp;<input type="radio" name="resposta" id="C" value="C"  >
                                <label for="C" ><p style="padding-left:10px">Option C</p></label>
                            </div>
                            <div class="subtitle" >
                                &nbsp;&nbsp;&nbsp;<input type="radio" name="resposta" id="D" value="D"  >
                                <label for="D" ><p style="padding-left:10px">Option D</p></label>
                            </div>
                            <div class="subtitle ">
                                &nbsp;&nbsp;&nbsp;<input type="radio" name="resposta" id="E" value="E"  >
                                <label for="E" ><p style="padding-left:10px">Option E</p></label>
                               
                            
                        </div>
                    </div>    
                </div>
            </b-card>
        </div>
        
    </div>
    
        
</template>



<script>

export default {
    name: 'card',
    props:{
        perguntas:{
            nome: String
        }
    }
    }
</script>

<style >

 .subtitle:hover{
     background-color: rgb(27, 27, 27);
     border-radius: 50px;
 }
 input[type=radio]:checked{
      background-color: rgb(27, 27, 27);
        border-radius: 50px;

 }
 h4{
    color: black;
    padding-bottom: 10px ;
  }
</style>