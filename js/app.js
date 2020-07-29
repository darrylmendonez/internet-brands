new Vue({
  el: `#app`,
  data: {
    darkModeActive: false,
    bonusModeActive: false,
    responsiveBreakpoints: {
      extraSmall: 539,
      small: 576,
      medium: 768,
      large: 992,
      extraLarge: 1200
    },
    currentWidth: null,
    title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
    subtitle: `Lorem ipsum dolor sit amet consctur adipiuing elit onec pulneque ut rstibr`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue mauris rhoncus augue varius congue. Phasellus lacinia eros vitae nunc ornare, sit amet auctor ante pharetra. Nunc lorem odio, iaculis sit amet dapibus varius, efficitur nec ligula. Etiam ac felis lacinia, euismod velit at, imperdiet massa. Donec ornare est quis finibus cursus. Donec ac leo purus.`,
    buttonText: `DONEC ULLMCORPER QUA`,
    img: {
      src: `img/flowers.jpeg`,
      alt: `pink dahlias at sunset bokeh`,
    },
  },
  created() {
    window.addEventListener("resize", this.calcCurrentWidth);
    this.currentWidth = window.innerWidth
  },
  destroyed() {
    window.removeEventListener("resize", this.calcCurrentWidth);
  },
  methods: {
    calcCurrentWidth(e) {
      this.currentWidth = e.currentTarget.window.innerWidth
      if (this.currentWidth <= this.responsiveBreakpoints.medium) {
        this.bonusModeActive = false
      }
    },
    activateBonusMode() {
      if (this.currentWidth >= this.responsiveBreakpoints.medium) {
        this.bonusModeActive = !this.bonusModeActive
      }
    }
  }
})