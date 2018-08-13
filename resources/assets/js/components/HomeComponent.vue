<template>
<div>
    <nav class="panel column is-offset-2 is-8">
    <p class="panel-heading">
      Phonebook
    </p>
    <button class="button is-primary is-outlined" @click="openAddModal">
        Aggiungi
      </button>
    <div class="panel-block">
      <p class="control has-icons-left">
        <input class="input is-small" type="text" placeholder="cerca">
        <span class="icon is-small is-left">
          <i class="fa fa-search" aria-hidden="true"></i>
        </span>
      </p>
    </div>
    <a class="panel-block" v-for="item,key in lists">
    <span class="column is-9">
      {{ item.name }} 
    </span>
      
      <span class="panel-icon column is-1">
        <i class="has-text-primary fa fa-eye" aria-hidden="true" @click="openShowModal(key)"></i>
      </span>
      <span class="panel-icon column is-1">
        <i class="has-text-info fa fa-edit" aria-hidden="true"></i>
      </span>
      <span class="panel-icon column is-1">
        <i class="has-text-danger fa fa-trash" aria-hidden="true"></i>
      </span>
    </a>

  </nav>

  <Add :openmodal='addActive' @closeRequest='close'></Add>
  <Show :openmodal='showActive' @closeRequest='close'></Show>
</div>


   
</template>

<script>
let Add = require('./AddComponent.vue');
let Show = require('./ShowComponent.vue');

export default {
    components: {Add,Show},

    data(){
      return {
        addActive: '',
        showActive: '',
        lists: {},
        errors:{}
      }
    },

    mounted(){
      axios.get('/getData')
      .then((response) => this.lists = response.data)
      .catch((error) => this.errors = error.response.data.errors)
    },

    methods: {
      openAddModal(){
        this.addActive = 'is-active';
      },
      openShowModal(key){
        this.$children[1].list = this.lists[key];
        this.showActive = 'is-active';
      },
      close(){
        this.addActive = this.showActive = ''
      }
    }
}
</script>