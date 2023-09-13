new Vue({
  el: "#app",
  data: {
    timer: null, //set up timer
    active_index: 0, //current index
    is_prev: false, //prev y/n (control pacman direction)
    // pic data (json format)
    list: [
      {
        title: "Now Streaming TI11: PSG.LGD vs BOOM",
        image: "./images/1.webp",
        bottom_color: "rgb(35, 11, 11)",
      },

      {
        title: "LPL2021 Summer <A Series To Remember>",
        image: "./images/random3.jpg",
        bottom_color: "rgb(225, 170, 153)",
      },

      {
        title: "Now Streaming TI11: PSG.LGD vs BOOM",
        image: "./images/1.webp",        
        bottom_color: "rgb(35, 11, 11)",
      },

      {
        title: "LPL2021 Summer <A Series To Remember>",
        image: "./images/random3.jpg",
        bottom_color: "rgb(225, 170, 153)",
      },

      {
        title: "Now Streaming TI11: PSG.LGD vs BOOM",
        image: "./images/1.webp",
        bottom_color: "rgb(35, 11, 11)",
      },

      {
        title: "LPL2021 Summer <A Series To Remember>",
        image: "./images/random3.jpg",
        bottom_color: "rgb(225, 170, 153)",
      },

      {
        title: "Now Streaming TI11: PSG.LGD vs BOOM",
        image: "./images/1.webp",
        bottom_color: "rgb(35, 11, 11)",
      },

      {
        title: "LPL2021 Summer <A Series To Remember>",
        image: "./images/random3.jpg",
        bottom_color: "rgb(225, 170, 153)",
      },
    ],
  },
  methods: {
    // stop autoplay
    stopAutoPlay() {
      // empty timer
      for (let i = 0; i <= this.timer; i++) {
        clearInterval(i);
      }
    },
    //slow down a bit
    // start autoplay
    startAutoPlay() {
      // stop auto play
      this.stopAutoPlay();
      let _t = this;
      this.timer = setInterval(function () {
        _t.active_index++;
        if (_t.active_index > _t.list.length - 1) {
          _t.active_index = 0;
        }
        _t.is_prev = false;
        _t.changeBanner(_t.active_index);
      }, 3000);
    },
    // switch banner index=rotate index(click prev/next button,value = -1;click on the rotator,value=current index),is_prev=(true==prev,false==next)
    changeBanner(index, is_prev) {
      if (index >= 0) {
        // next by decult,pacman direction right
        this.is_prev = false;
        if (index < this.active_index) {
          // if the index is smaller than the current index,go to the prev one,pacman direction left
          this.is_prev = true;
        }
        // set current index
        this.active_index = index;
      } else {
        // when press button
        if (is_prev) {
          // prev one
          this.active_index--;
          if (this.active_index < 0) {
            this.active_index = this.list.length - 1;
          }
        } else {
          // next one
          this.active_index++;
          if (this.active_index > this.list.length - 1) {
            this.active_index = 0;
          }
        }
        // prev or next
        this.is_prev = is_prev;
      }
      // --m-left,--c-color (css variables)
      // set up shift amount to switch pictures
      document
        .querySelector(".img-box")
        .style.setProperty("--m-left", this.active_index);
      // set up picture gradient effect
      document
        .querySelector(".bottom-box")
        .style.setProperty(
          "--b-color",
          this.list[this.active_index].bottom_color
        );
    },
  },
  mounted() {
    // initiate autoplay
    this.startAutoPlay();
  },
});