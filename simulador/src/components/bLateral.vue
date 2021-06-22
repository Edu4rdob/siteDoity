<template >
   <div class="navLateral" variant="link"  >
        <ul class="list-unstyled">
            <li>
                <a href="#"  >
                    <font-awesome-icon icon="border-all"/>
                </a>
            </li>
            <li>
                <a href="#"  >
                    <font-awesome-icon icon="broadcast-tower"/>
                </a>
            </li>
            <li>
                <a href="#"  >
                    <font-awesome-icon icon="play-circle"/>
                </a>
            </li>
            <li>
                <a href="#" class="iconLight"  >
                    <font-awesome-icon icon="lightbulb"/>
                </a>
            </li>
       </ul>
   </div>
</template>

<script>
    export default {
        name: 'bLateral'
    }
</script>

<style lang="css" scoped>
    .navLateral{
        width: 60px;
        height: 585px;
        margin-top: 70px;
        display: block;
        background: #ffffff;
        background: linear-gradient(to top, #ffffff, #ffffff);
        border-radius: 0;
        margin-bottom: 0;
        padding: 50px 10px 0 0;
    
        min-height: 70px;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
}
    a{
        text-decoration: none;
        color: gray;
        display: block;
        padding-bottom: 45px;
        
    }
    a:hover{
        color: gray;
    }
    .iconLight{
        padding-top: 170px;
    }
    
</style>