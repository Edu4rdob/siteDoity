<template>
  <div class="text-start">
   
   <div class="card" > 
            <b-card class="text-start" style="border: none">
                <div class="primary text-light " >
                    <p style="color:black">Respostas</p>
                    <b-progress class="mt-2" :max="max" show-value>
                    <b-progress-bar :value="value * (1 / 10)" variant="success"></b-progress-bar>    
                    </b-progress>
                </div>
            </b-card>
        </div>
    
      
    

    
  </div>
</template>

<script>
  export default {
      name:'progresso',
    data() {
      return {
        value: 0,
        max: 10
      }
    },
    methods: {
     
      
    }
  }
</script>
