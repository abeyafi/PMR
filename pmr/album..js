new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "img1.jpeg",
          img2: "img2.jpeg",
          img3: "img3.jpeg",
   
          isOpen: false,
        },
        {
          img1: "img4.jpeg",
          img2: "img5.jpeg",
          img3: "img6.jpeg",

          isOpen: false,
        },
        {
          img1: "img7.jpeg",
          img2: "img8.jpeg",
          img3: "img9.jpeg",
    
          isOpen: false,
        }
        ,
        {
          img1: "img10.jpeg",
          img2: "img11.jpeg",
          img3: "img12.jpeg",
          isOpen: false,
        }
      ]
       
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
