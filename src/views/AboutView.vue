<script setup>

</script>

<template>

    <div id="content">
        <a href="#menu1"><span>Consulter mon compte</span></a>
        <div class="expandable" id="menu1">
            <p>Cum enim magna parturient</p>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <p>fin</p>
        </div>
        <a href="#menu2"><span>Payer</span></a>
        <div class="expandable" id="menu2">
            <p>Cum enim magna parturient</p>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <p>fin</p>
        </div>
        <a href="#menu3"><span>Convertir des € en §</span></a>
        <div class="expandable" id="menu3">
            <p>Cum enim magna parturient</p>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <p>fin</p>
        </div>
        <a href="#menu4"><span>Partenaires</span></a>
        <div class="expandable" id="menu4">
            <p>Cum enim magna parturient</p>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <p>fin</p>
        </div>
        <a href="#menu5"><span>Lire</span></a>
        <div class="expandable" id="menu5">
            <p>Cum enim magna parturient</p>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <p>fin</p>
        </div>
    </div>

</template>

<style scoped>

.expandable {
  background: yellow;
  overflow: scroll;
  color: #000;   
  line-height: 50px;
  padding: 0 2rem;

  transition: all .5s ease-in-out;
  height: 0;
 }
 
 .expandable:target {
  height: 500px;
}

a {
    background-color: yellow;
    text-decoration: none;
    display: block;
    width: 100%;
    text-align: center;
    border-top: 4px solid red;
    &:last-of-type {
        border-bottom: 4px solid red;
    }
    &>span,
    &>span:hover,
    &>span:link,
    &>span:visited,
    &>span:active {
        font-family: SolViolette;
        font-size: 2rem;
        font-weight: bold;
        color: red;
    }
}

</style>