<template>

    <div class="modal" :class="openmodal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Aggiungi Contatto</p>
      <button class="delete" aria-label="close" @click="close"></button>
    </header>
    <section class="modal-card-body">
      <div class="field">
        <div class="control">
          <input class="input is-primary" type="text" placeholder="Nome" v-model="list.name">
        </div>
      </div>


      <div class="field">
        <div class="control">
          <input class="input is-primary" type="text" placeholder="Telefono" v-model="list.phone">
        </div>
      </div>


      <div class="field">
        <div class="control">
          <input class="input is-primary" type="email" placeholder="Email" v-model="list.email">
        </div>
      </div>



    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" @click='save'>Salva</button>
      <button class="button" @click="close">Annulla</button>
    </footer>
  </div>
</div>

</template>

<script>
    export default{
        props: ['openmodal'],
        data(){
          return{
            list:{
              name: '',
              phone: '',
              email: ''
            }
          }
        },
        methods:{

            close(){
                this.$emit('closeRequest')
            },

            save(){

            }
        }
    }
</script>