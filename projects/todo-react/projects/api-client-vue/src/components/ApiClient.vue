
cd /Users/drahmetacik/Projects/master-js-and-best-practices/projects/api-client-vue
npm run dev<template>
  <div class="api-client">
    <h1>API Client (Vue)</h1>
    <form @submit.prevent="fetchData" class="api-form">
      <select v-model="method" class="api-method">
        <option>GET</option>
        <option>POST</option>
      </select>
      <input v-model="endpoint" placeholder="Enter API endpoint" class="api-input" />
      <button type="submit" class="api-btn">Send</button>
    </form>
    <textarea
      v-if="method === 'POST'"
      v-model="body"
      placeholder="Request body (JSON)"
      class="api-body"
      rows="4"
    ></textarea>
    <div v-if="history.length" class="api-history">
      <strong>History:</strong>
      <ul>
        <li v-for="(item, i) in history" :key="i">
          <a href="#" @click.prevent="setFromHistory(item)">{{ item.method }} {{ item.endpoint }}</a>
        </li>
      </ul>
    </div>
    <div v-if="loading" class="api-loading">Loading...</div>
    <pre v-if="error" class="api-error">{{ error }}</pre>
    <div v-if="responseHeaders && !error" class="api-headers">
      <strong>Response Headers:</strong>
      <pre>{{ responseHeaders }}</pre>
    </div>
    <pre v-if="result && !error" class="api-result">{{ result }}</pre>
  </div>
</template>

<script>
export default {
  name: 'ApiClient',
  data() {
    return {
      endpoint: 'https://jsonplaceholder.typicode.com/todos/1',
      method: 'GET',
      body: '',
      result: null,
      error: '',
      loading: false,
      responseHeaders: '',
      history: JSON.parse(localStorage.getItem('api-client-history') || '[]'),
    };
  },
  methods: {
    async fetchData() {
      this.loading = true;
      this.result = null;
      this.error = '';
      this.responseHeaders = '';
      const req = {
        method: this.method,
        headers: {},
      };
      if (this.method === 'POST') {
        req.headers['Content-Type'] = 'application/json';
        try {
          req.body = JSON.stringify(JSON.parse(this.body));
        } catch (e) {
          this.error = 'Invalid JSON in request body.';
          this.loading = false;
          return;
        }
      }
      try {
        const res = await fetch(this.endpoint, req);
        let text = await res.text();
        try {
          text = JSON.stringify(JSON.parse(text), null, 2);
        } catch {}
        this.result = text;
        this.responseHeaders = Array.from(res.headers.entries())
          .map(([k, v]) => `${k}: ${v}`)
          .join('\n');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        this.saveHistory();
      } catch (e) {
        this.error = e.message;
      } finally {
        this.loading = false;
      }
    },
    saveHistory() {
      const entry = { method: this.method, endpoint: this.endpoint };
      this.history = [entry, ...this.history.filter(h => h.endpoint !== entry.endpoint || h.method !== entry.method)].slice(0, 5);
      localStorage.setItem('api-client-history', JSON.stringify(this.history));
    },
    setFromHistory(item) {
      this.method = item.method;
      this.endpoint = item.endpoint;
      this.body = '';
    },
  },
};
</script>

<style scoped>
.api-client {
  max-width: 600px;
  margin: 40px auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.10);
  padding: 36px;
  font-family: system-ui, sans-serif;
}
.api-client h1 {
  color: #42b983;
  text-align: center;
  margin-bottom: 28px;
  letter-spacing: 1px;
}
.api-form {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}
.api-method {
  padding: 8px 10px;
  border-radius: 4px;
  border: 1px solid #bbb;
  font-size: 15px;
  background: #f6f8fa;
}
.api-input {
  flex: 1;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 15px;
}
.api-btn {
  padding: 8px 16px;
  border-radius: 4px;
  background: #42b983;
  color: #fff;
  border: none;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
}
.api-body {
  width: 100%;
  margin-bottom: 12px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 15px;
  font-family: monospace;
}
.api-history {
  margin-bottom: 12px;
  font-size: 14px;
}
.api-history ul {
  padding-left: 18px;
  margin: 4px 0 0 0;
}
.api-history a {
  color: #1976d2;
  text-decoration: underline;
  cursor: pointer;
}
.api-loading {
  color: #888;
  margin-bottom: 8px;
}
.api-error {
  color: #d32f2f;
  background: #fff0f0;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 8px;
}
.api-headers {
  background: #f6f8fa;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 8px;
  font-size: 13px;
}
.api-result {
  background: #f6f8fa;
  padding: 1em;
  border-radius: 6px;
  overflow-x: auto;
  font-size: 15px;
}
</style>
