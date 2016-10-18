<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
  .contacts {
    display: flex;
    flex-flow: row wrap;
  }
  .card {
    width: 49%;
    display: flex;
    flex-flow: column nowrap; 
  }
  .card-header {
    flex: 1
  }
</style>

<template>
  <div>
    <div v-if="!contacts[0]" class="empty">
        <i class="fa fa-users fa-5x"></i>
        <p class="empty-title">You have no contacts</p>
        <p class="empty-meta">Click the button to add one</p>
        <button @click="addContact" class="empty-action btn btn-primary">Add Contact</button>
    </div>
    <div v-else class='contacts'>
      <div v-for="(contact, index) in contacts" class="card">
        <div class="card-header">
          <h4 class="card-title">{{contact.firstName}} {{contact.lastName}}</h4>
          <h6 class="card-meta">{{contact.email}}</h6>
          <h6 class="card-meta">{{contact.phone}}</h6>
        </div>
        <div class="card-footer">
          <button @click="openContact(contact)" class="btn btn-primary">Open</button>
          <button class="btn"><i class="fa fa-pencil"> Edit</button>
          <button class="btn"><i class="fa fa-trash"> Delete</button>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
            <h4 class="card-title">Create New</h4>
        </div>
        <div class="card-footer">
            <button @click="addContact" class="empty-action btn btn-primary">Add Contact</button>
        </div>
      </div>
      
    </div>
    <!-- <img src="./LandingPageView/assets/logo.png" alt="electron-vue">
    <h1>Welcome.</h1>
    <current-page></current-page>
    <versions></versions>
    <links class='testing'></links> -->
  </div>
</template>

<script>
  import CurrentPage from './LandingPageView/CurrentPage'
  import Links from './LandingPageView/Links'
  import Versions from './LandingPageView/Versions'
  const Dexie = require('dexie')
  let db = new Dexie('address-book')
  db.version(1).stores({
    contacts: '++id,firstName,lastName,email,phone,address,city,state,zip,description'
  })
  export default {
    data () {
      return {
        contacts: []
      }
    },
    components: {
      CurrentPage,
      Links,
      Versions
    },
    mounted () {
      console.log('checking db..', db.contacts)
      db.contacts.each((contact) => {
        console.log(contact.firstName)
        this.contacts.push(contact)
      })
    },
    ready () {
      // console.log('checking db..')
    },
    methods: {
      openContact (contact) {
        console.log('opening contact:', contact.id)
        this.$router.push({name: 'view-contact', params: contact})
      },
      addContact () {
        // console.log('contact creation time...')
        this.$router.push({ path: 'add-contact' })
        // this.contacts.push(1)
      }
    },
    name: 'landing-page'
  }
</script>
