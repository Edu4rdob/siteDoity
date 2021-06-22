<template>
  <div >
    <h4> Pergunta:</h4>
    <form action="">
      <div class="subtitle">
        <div class="alternativas">
          &nbsp;&nbsp;&nbsp;<input type="radio" name= {{rps}} value="A"  >
          <label for="A" ><p style="padding-left:10px"> Option A</p></label>
        </div>
        <div class="alternativas">
          &nbsp;&nbsp;&nbsp;<input type="radio" name="resposta" value="B" >
          <label for="B" ><p style="padding-left:10px">Option B</p></label>
        </div>
        <div class="alternativas">
          &nbsp;&nbsp;&nbsp;<input type="radio" name="resposta" value="C"  >
          <label for="C" ><p style="padding-left:10px">Option C</p></label>
        </div>
        <div class="alternativas">
          &nbsp;&nbsp;&nbsp;<input type="radio" name="resposta" value="D"  >
          <label for="D" ><p style="padding-left:10px">Option D</p></label>
        </div>
        <div class="alternativas">
          &nbsp;&nbsp;&nbsp;<input type="radio" name="resposta" value="E"  >
          <label for="E" ><p style="padding-left:10px">Option E</p></label>
        </div>
      </div>
    </form>
  </div>
</template>



<script>
  export default {
    name: 'questionario',
    data() {
      rps: 'resposta'
      return {
        selected: ''
      }
      
    }
  }
</script>

<style>
 
  
</style>
