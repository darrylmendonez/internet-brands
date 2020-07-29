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