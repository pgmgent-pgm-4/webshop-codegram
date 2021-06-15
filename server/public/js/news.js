const news = {
  init() {
    this.cacheElements();
    this.editBgImages();
  },
  cacheElements() {
    this.$bgImageContainers = document.querySelectorAll('.card--header.card--blog__header');
  },
  editBgImages() {
    this.$bgImageContainers.forEach(async (el) => {
      const id = el.dataset.id;
      el.style.backgroundImage = `url('http://placeimg.com/640/480/${id}')`
    })
  }
}

news.init();