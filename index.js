const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = './Assets/img/OriginalMap.png'

const playerImage = new Image()
playerImage.src = './Assets/img/playerDown.png'

// image.onload = () => {
//     c.drawImage(image, -500, -750)
//     c.drawImage(
//         playerImage, 
//         0,
//         0,
//         playerImage.width / 4,
//         playerImage.height,
//         canvas.width / 2 - playerImage.width / 4 / 2, 
//         canvas.height / 2 - playerImage.height / 2,
//         playerImage.width / 4,
//         playerImage.height
//         )
//     }

class Sprite {
    constructor({
        position,
        velocity,
        image
    }) {
        this.position = position
        this.image = image
    }

    draw() {
        c.drawImage(this.image, -500, -750)
    }
}

const background = new Sprite({position: {
    x: -500,
    y: -750
    },
    image: image
})

    function animate() {
        window.requestAnimationFrame(animate)
        background.draw
        c.drawImage(
            playerImage, 
            0,
            0,
            playerImage.width / 4,
            playerImage.height,
            canvas.width / 2 - playerImage.width / 4 / 2, 
            canvas.height / 2 - playerImage.height / 2,
            playerImage.width / 4,
            playerImage.height
            )
    }
    animate()

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            break
        case 'a':
            break
        case 's':
            break
        case 'd':
            break

    }
})


