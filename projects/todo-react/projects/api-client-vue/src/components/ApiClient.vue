<template>
  <div class="api-client">
    <h1>Simple API Client (Vue)</h1>
    <form @submit.prevent="fetchData" style="margin-bottom: 1em; display: flex; gap: 8px;">
      <input v-model="endpoint" placeholder="Enter API endpoint" style="flex:1; padding:8px; border-radius:4px; border:1px solid #ccc;" />
      <button type="submit" style="padding:8px 16px; border-radius:4px; background:#42b983; color:#fff; border:none; font-weight:600;">Fetch</button>
    </form>
    <div v-if="loading" style="color:#888;">Loading...</div>
    <pre v-if="error" style="color:#d32f2f;">{{ error }}</pre>
    <pre v-if="result && !error" style="background:#f6f8fa; padding:1em; border-radius:6px; overflow-x:auto;">{{ result }}</pre>
  </div>
</template>

<script>
export default {
  name: 'ApiClient',
  data() {
    return {
      endpoint: 'https://jsonplaceholder.typicode.com/todos/1',
      result: null,
      error: '',
      loading: false,
    };
  },
  methods: {
    async fetchData() {
      this.loading = true;
      this.result = null;
      this.error = '';
      try {
        const res = await fetch(this.endpoint);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        this.result = JSON.stringify(data, null, 2);
      } catch (e) {
        this.error = e.message;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.api-client {
  max-width: 540px;
  margin: 40px auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  padding: 32px;
  font-family: system-ui, sans-serif;
}
.api-client h1 {
  color: #42b983;
  text-align: center;
  margin-bottom: 24px;
}
</style>
