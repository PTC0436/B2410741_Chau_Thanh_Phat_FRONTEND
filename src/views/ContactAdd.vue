<template>
  <div v-if="contact" class="page">
    <h4>Thêm mới Liên hệ</h4>
    <ContactForm
      :contact="contact"
      @submit:contact="createContact"
      mode="add"
    />
  </div>
</template>
<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";
export default {
  name: "ContactEdit",
  components: {
    ContactForm,
  },
  data() {
    return {
      contact: {},
    };
  },
  methods: {
    async createContact(data) {
      try {
        await ContactService.create(data);
        alert("Liên hệ được thêm thành công.");
        this.$router.push({ name: "contactbook" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
