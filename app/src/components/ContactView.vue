<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>

<template>
  <div class="modal active">
    <div class="modal-overlay"></div>
    <div class="modal-container">
      <div class="modal-header">
        <button @click='close' class="btn btn-clear float-right"></button>
        <div class="modal-title">{{contact.firstName}} {{contact.lastName}}
          <div class="form-group">
            <label class="form-switch">
              <input @click="toggleEdit" type="checkbox" />
              <i class="form-icon"></i> Edit
            </label>
          </div> 
        </div>
        
      </div>
      <div class="modal-body">
        <div class="content">
          <form class="form-horizontal">
            <div class="form-group">
              <label class="form-label" for="input-example-1">Email</label>
              <input class="form-input" type="text" id="input-example-1" v-model="contact.email" placeholder="email"
              :readonly="isEditing ? null : 'readonly' "/>
            </div>
          </form
          <address>
            {{contact.address}}<br/>
            {{contact.city}}, {{contact.state}}<br/>
            {{contact.zip}}
          </address>
        </div>
      </div>
      <div class="modal-footer">
        <button @click='close' class="btn btn-link">Close</button>
        <button v-if="isEditing" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
  const Dexie = require('dexie')
  let db = new Dexie('address-book')
  db.version(1).stores({
    contacts: '++id,firstName,lastName,email,address,city,state,zip,description'
  })
  export default {
    data () {
      return {
        contact: {},
        isEditing: false
      }
    },
    components: {
    },
    mounted () {
      this.contact = this.$route.params
    },
    ready () {
    },
    methods: {
      close () {
        this.$router.push({ path: '/' })
      },
      toggleEdit () {
        this.isEditing = !(this.isEditing)
      }
    },
    name: 'view-contact'
  }
</script>
