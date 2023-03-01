<template>
  <div class="flex flex-col flex-1 overflow-hidden">
    <div class="flex flex-1 overflow-auto">
      <conversation-wrap :grouped-messages="groupedMessages" />
    </div>
    <div class="px-5">
      <chat-footer />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import ChatFooter from '../components/ChatFooter.vue';
import ConversationWrap from '../components/ConversationWrap.vue';

export default {
  components: { ChatFooter, ConversationWrap },
  computed: {
    ...mapGetters({
      groupedMessages: 'conversation/getGroupedConversation',
    }),
  },
  mounted() {
    this.$store.dispatch('conversation/setUserLastSeen');

    if (this.groupedMessages.length === 0) {
      this.sendMessage({ content: 'Здравствуйте!' });
    }
  },
  methods: {
    ...mapActions('conversation', ['sendMessage']),
  },
};
</script>
