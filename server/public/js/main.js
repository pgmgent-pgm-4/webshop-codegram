const app = {
    init() {
      this.cacheElements();
      this.registerListeners();
    },
    cacheElements() {
      this.$loginForm = document.querySelector('.login-form');
      this.$logoutButton = document.querySelector('.btn-logout');
    },
    registerListeners() {
      if (!!this.$loginForm) {
        console.log('Login form found');
        this.$loginForm.addEventListener('submit', (e) => {
          const data = new FormData(this.$loginForm);
          let entries = [];
          for (const entry of data) {
            const [key, value] = entry;
            entries.push(value);
          }
          const [username, password] = entries;
          this.tryLogin(username, password);
          e.preventDefault();
        })
      }
      if (!!this.$logoutButton) {
        this.$logoutButton.addEventListener('click', (e) => {
          window.localStorage.removeItem('jwt');
          alert('You were logged out!');
        })
      }
    },
    async tryLogin(username, password) {
      try {
        const body = {
          username,
          password,
        };

        const response = await fetch('http://localhost:8080/auth/login', {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
          body: JSON.stringify(body),
        });
        const data = await response.json();
        if (!!data) this.writeToCache('jwt', data);
        const paragraph = document.createElement('p');
        const message = document.createTextNode(`Welcome back ${username}!`)
        paragraph.appendChild(message);
        this.$loginForm.appendChild(paragraph);
      } catch (error) {
        console.error(error);
      }
    },
    writeToCache(key, data) {
      const mem = this.readFromCache(key);
      if (!(!!mem)) {
        window.localStorage.setItem(key, JSON.stringify(data));
        console.log('Saved jwt in local storage');
      } else {
        console.log('Jwt found in local storage');
      }
    },
    readFromCache(key) {
      return JSON.parse(window.localStorage.getItem(key)) || null;
    }
  }
  app.init();