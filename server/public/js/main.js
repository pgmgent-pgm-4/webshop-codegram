/**
 * The main app
 */
const app = {

    /**
     * Initialize the app
     */
    init() {
      this.cacheElements();
      this.registerListeners();
    },
    
    /**
     * Cache the DOM elements
     */
    cacheElements() {
      this.$loginForm = document.querySelector('.login-form');
      this.$logoutButton = document.querySelector('.btn-logout');
    },

    /**
     * Register listeners
     */
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

    /**
     * Attempts to login a user with username and password
     * @param {string} username 
     * @param {string} password 
     */
    async tryLogin(username, password) {
      try {
        // Define body
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

        // Write the jwt to the local storage
        if (!!data) this.writeToCache('jwt', data);

        // Show a success message to the user after login
        const paragraph = document.createElement('p');
        const message = document.createTextNode(`Welcome back ${username}!`)
        paragraph.appendChild(message);
        this.$loginForm.appendChild(paragraph);
      } catch (error) {
        console.error(error);
      }
    },

    /**
     * Write token to local storage 
     * @param {string} key 
     * @param {object} data 
     */
    writeToCache(key, data) {
      // Check if jwt key exists in local storage
      const mem = this.readFromCache(key);
      if (!(!!mem)) {
        window.localStorage.setItem(key, JSON.stringify(data));
        console.log('Saved jwt in local storage');
      } else {
        console.log('Jwt found in local storage');
      }
    },

    /**
     * Get token from local storage
     * @param {string} key | 'jwt'
     * @returns {object} token
     */
    readFromCache(key) {
      return JSON.parse(window.localStorage.getItem(key)) || null;
    }
  }

  // Function calls
  app.init();