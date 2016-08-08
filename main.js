console.log("it me")
new Vue({
  el: document.body,
  data: {
    message: ''
  },
  computed: {
    groups: function () {
      return [{count: 3, letters: ["e", "f"]}, {count: 2, letters: ["a", "b"]}]
    }
  }
})
