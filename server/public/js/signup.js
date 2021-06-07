const app = {
  init() {
    this.cacheElements();
    this.registerListeners();
  },
  cacheElements() {
    this.$signupForm = document.querySelector('.signup-form');
  },
  registerListeners() {
    if (!!this.$signupForm) {
      this.$signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Sign up form found');
        const data = new FormData(this.$signupForm);
        let entries = [];
        for (const entry of data) {
          const [key, value] = entry;
          entries.push(value);
        }
        this.tryCreateUser(entries);
      })
    }
  },
  async tryCreateUser(entries) {
    try {
      const [email, , username, password, ] = entries;
      const body = {
        user: {
          username,
          email,
          email_verified: true,
          password,
          role: 'guest',
          last_login: null
        }
      };

      const response = await fetch('http://localhost:8080/api/users', {
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

      console.log(response)
      let message = '';
      if (response.status === 500) {
        message = response.statusText;
      } else {
        message = 'Created user';
      }
      alert(message);
    } catch (error) {
      console.error(error)
    }
  }
}
app.init();