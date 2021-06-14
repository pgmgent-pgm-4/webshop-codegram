/**
 * Fetch and Show the results for a single course
 * Uses window location to get the course ID
 * Uses local storage to get the jwt token if present
 * Fetches the course video
 */
 const video = {
  
  /**
   * Initialize app
   */
  init() {
    this.videoId = '';
    this.video = {};
    this.cacheElements();
    this.registerListeners();
    this.getCourseId();
    this.getAuthToken();
    this.fetchCourse();
  },

  /**
   * Cache DOM elements
   */
  cacheElements() {
    this.$videoContainer = document.querySelector('.video__container');
  },
  
  /**
   * Register listeners
   */
  registerListeners() {
    // Not sure any listeners will be needed
  },

  /**
   * Get the current video ID from window location
   * and save it in a variable
   */
  getCourseId() {
    const locationStr = (window.location).toString();
    const [ , videoId] = locationStr.split('/video/');
    this.videoId = videoId;
  },

  /**
   * Get the auth token from the Storage API Localstorage
   * @returns {object} token
   */
  getAuthToken() {
    return JSON.parse(window.localStorage.getItem('jwt')) || null;
  },

  /**
   * Fetch the correct video from the database
   * use the video ID from the window location
   * use the auth token and set the header to include the token
   * for authentication
   */
  async fetchCourse() {
    try {
      const response = await fetch(`http://localhost:8080/api/videos/${this.videoId}`, {
        method: 'GET',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.getAuthToken().token}`
        },
        redirect: 'follow',
      });
      const data = await response.json();
      console.log(data)
      this.renderCourseHTML(data);
    } catch (error) {
      console.log("caught error", error)
      // console.error(error.message);
      this.renderNotAllowedHTML();
    }
  },
  /**
   * Render the view for the video
   * @param {object} video 
   */
  renderCourseHTML(video) {
    let tags = JSON.parse(video.tags).join(', ');
    const output = `
      <a href="/video/${video.id}" title="Watch ${video.name}">
        <h3 class="video__name">${video.name}</h3>
        <img class="video__thumbnail" src=${video.thumbnail_url} alt=${video.name} />
      </a>
    `
    this.$videoContainer.innerHTML = output;
  },

  /**
   * Render a message if user is not allowed to visit.
   * @returns {string} message
   */
  renderNotAllowedHTML() {
    return `<p>Uh oh! You do not have access.</p>`
  },
}

video.init();