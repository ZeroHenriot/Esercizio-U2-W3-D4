const loadImages = function (query) {
  fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    headers: {
      Authorization: '4ooxsAFjJNfxguDyvT9cAheNlEaLsyOkWRYcrHySj27f0GThLF4xkg3D',
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('a fess e sort')
      }
    })
    .then((data) => {
      console.log(data)

      const allImgs = document.querySelectorAll('.card-img-top')
      for (let i = 0; i < allImgs.length; i++) {
        allImgs[i].src = data.photos[i].src.medium
      }
    })
    .catch((err) => {
      console.log('a fess e sort', err)
    })
}

const firstButton = document.querySelector('#firstImages')
firstButton.addEventListener('click', function () {
  loadImages('kittens')
})

const secondButton = document.querySelector('#secondImages')
secondButton.addEventListener('click', function () {
  loadImages('dogs')
})
