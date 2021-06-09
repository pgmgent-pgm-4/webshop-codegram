/**
 * Fetch and Show the results for a single course
 * Uses window location to get the course ID
 * Uses local storage to get the jwt token if present
 * Fetches the course and course video's from the database through the API
 * Renders the course and course video's
 * or a message
 */
const app = {
  
  /**
   * Initialize app
   */
  init() {
    this.courseId = '';
    this.course = {};
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
    this.$courseContainer = document.querySelector('.course__container');
  },
  
  /**
   * Register listeners
   */
  registerListeners() {
    // Not sure any listeners will be needed
  },

  /**
   * Get the current course ID from window location
   * and save it in a variable
   */
  getCourseId() {
    const locationStr = (window.location).toString();
    const [ , courseId] = locationStr.split('/course/');
    this.courseId = courseId;
  },

  /**
   * Get the auth token from the Storage API Localstorage
   * @returns {object} token
   */
  getAuthToken() {
    return JSON.parse(window.localStorage.getItem('jwt')) || null;
  },

  /**
   * Fetch the correct course from the database
   * use the course ID from the window location
   * use the auth token and set the header to include the token
   * for authentication
   */
  async fetchCourse() {
    try {
      const response = await fetch(`http://localhost:8080/api/courses/${this.courseId}`, {
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
      this.renderCourseHTML(data);
    } catch (error) {
      console.error(error);
      this.renderNotAllowedHTML();
    }
  },
  /**
   * Render the view for the course
   * @param {object} course 
   */
  renderCourseHTML(course) {
    let tags = JSON.parse(course.tags).join(', ');
    const output = `
      <h1 class="course__name">${course.name}</h1>
      <p class="course__desc">${course.description}</p>
      <p>Tags: ${tags}</p>
      ${this.renderVideos(course)}
    `
    this.$courseContainer.innerHTML = output;
  },

  /**
   * Render the view for the course video's
   * @param {object} course 
   * @returns {string} video HTML string
   */
  renderVideos(course) {
    let output = '<div class="course_videos">';
    for (let video of course.videos) {
      output += `
      <div class="card card__video">
        <a href="/video/${video.id}" title="Watch ${video.name}">
          <h3 class="video__name">${video.name}</h3>
          <img class="video__thumbnail" src=${video.thumbnail_url} alt=${video.name} />
        </a>
      </div>`
    }
    output += '</div>'
    return output;
  },

  /**
   * Render a message if user is not allowed to visit.
   * @returns {string} message
   */
  renderNotAllowedHTML() {
    return `<p>Uh oh! You do not have access.</p>`
  },
}

app.init();