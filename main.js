function isWhitespace (char) {
  return /\s+/.test(char)
}

new Vue({
  el: document.body,
  data: {
    message: ''
  },
  computed: {
    groups: function () {
      var dict = {}
      for (var i = 0; i < this.message.length; i++) {
        var char = this.message[i]

        if (isWhitespace(char)) { continue }

        if (char in dict) {
          dict[char] += 1
        } else {
          dict[char] = 1
        }
      }

      var groups = {}
      for (var letter in dict) {
        if (!dict.hasOwnProperty(letter)) { continue }
        var count = dict[letter]
        if (count in groups) {
          groups[count].push(letter)
        } else {
          groups[count] = [letter]
        }
      }

      var arr = []
      for (var count in groups) {
        if (!groups.hasOwnProperty(count)) { continue }
        var letters = groups[count]
        arr.push({count: count, letters: letters})
      }

      return arr
    }
  }
})
