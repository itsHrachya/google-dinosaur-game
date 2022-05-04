document.addEventListener('DOMContentLoaded', () => {
   setInterval(() => {
      const cactusType = document.querySelector('.cactus')
      const cactusArr = ['img/one-cactus.png', 'img/two-cactus.png']
      cactusType.src = cactusArr[Math.floor(Math.random() * cactusArr.length)]
   }, 1000)
   const character = document.querySelector('#character')
   const block = document.querySelector('#block')
   const startTxt = document.querySelector('.start')
   let iteral = 0
   const play = () => {
      const coolAudio = new Audio('audio/jump-effect.mp3')
      return coolAudio.play()
   }
   document.addEventListener('keydown', (event) => {
      const keyName = event.key
      if (keyName === ' ' || keyName === 'ArrowUp') {
         iteral = iteral + 1
         startTxt.textContent = iteral
         character.className = 'animate'
         play()
      }
      else if (keyName === 'ArrowDown') {
         character.classList.add('rotateDino')
         iteral = iteral + 1
      }
      setTimeout(() => {
         character.classList.remove('animate')
      }, 500)
      const checkDead = setInterval(() => {
         const characterTop = parseInt(window.getComputedStyle(character, null).getPropertyValue('top'))
         const blockLeft = parseInt(window.getComputedStyle(block, null).getPropertyValue('left'))
         if (blockLeft < 70 && blockLeft > 0 && characterTop >= 40) {
            const lose = alert('Woah you lose. Press enter for a new game!',)
            if (lose === undefined) {
               location.reload()
            }
         }
      }, 10)
   })
})
