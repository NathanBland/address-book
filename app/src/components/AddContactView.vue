<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>

<template>
  <div>
    <form @submit.prevent="saveContact">
      <!-- form input control -->
      <div class="form-group">
          <label class="form-label" for="contact--firstName">First Name</label>
          <input class="form-input" v-model="contact.firstName" type="text" id="contact--firstName" placeholder="John" required/>
          <label class="form-label" for="contact--lastName">Last Name</label>
          <input class="form-input" v-model="contact.lastName" type="text" id="contact--lastName" placeholder="Smith"/>
      </div>
      
      <div class="form-group">
          <label class="form-label" for="contact--email">Email Address</label>
          <input class="form-input" v-model="contact.email" type="email" id="contact--email" placeholder="John@smith.com" />
      </div>
      
      <div class="form-group">
          <label class="form-label" for="contact--address">Address</label>
          <input class="form-input" v-model="contact.address" type="text" id="contact--address" placeholder="123 South st." />
          <label class="form-label" for="contact--city">City</label>
          <input class="form-input" v-model="contact.city" type="text" id="contact--city" placeholder="Denver" />
          <label class="form-label" for="contact--state">State</label>
          <input class="form-input" v-model="contact.state" type="text" id="contact--state" placeholder="CA" />
          <label class="form-label" for="contact--zip">Zip Code</label>
          <input class="form-input" v-model="contact.zip" type="text" id="contact--zip" placeholder="90321" />
      </div>
      
      <!-- form textarea control -->
      <div class="form-group">
          <label class="form-label" for="contact--description">Description</label>
          <textarea class="form-input" v-model="contact.description" id="contact--description" placeholder="" rows="3"></textarea>
      </div>
      
      <button type="submit" class="btn btn-primary input-group-btn">Add Contact</button>
      <button @click.prevent="cancel" class="btn input-group-btn">Cancel</button>
  </form>
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
        contact: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          zip: '',
          description: ''
        }
      }
    },
    components: {
    },
    mounted () {
    },
    ready () {
    },
    methods: {
      cancel () {
        this.$router.push({ path: '/' })
      },
      saveContact () {
        console.log('Adding contact...', this.contact)
        // this.contacts.push(1)
        db.contacts.add(this.contact)
        this.$router.push({ path: '/' })
      }
    },
    name: 'add-contact'
  }
</script>
