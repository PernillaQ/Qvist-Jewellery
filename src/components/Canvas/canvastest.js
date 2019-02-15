import React, { Component } from 'react'

let circles = []
let maxRadius = 10
let mouse = {
  x: undefined,
  y: undefined
}
let colors = [
  '#ffffff',
  '#e6c68a',
  '#f3e5c9',
  '#f4f4f4',
  '#ddb260',
  '#d49e36'
]
let canvas = ''
let ctx = ''
class Canvas extends Component {
  constructor (props) {
    super(props)
    this.canvas = React.createRef()
  }

  componentDidMount () {
    const canvas = this.canvas.current
    let ctx = canvas.getContext('2d', { alpha: false })
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }
/*
    window.addEventListener('mousemove', function (event) {
      mouse.x = event.x
      mouse.y = event.y
    //  console.log(mouse)
    })
*/
  /*  window.addEventListener('resize', function (event) {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      init()
    }) */

  circle (x, y, dx, dy, radius) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.minRadius = radius
    this.color = colors[Math.floor(Math.random() * colors.length)]

    this.draw = function () {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false)
      ctx.fillStyle = this.color
      ctx.strokeStyle = '#f4f4f4'
        // ctx.lineWidth = 1
        // ctx.lineCap = 'round'
      ctx.stroke()
      ctx.fill()
        /* ctx.shadowOffsetX = 0
        ctx.shadowOffsetY = 0
        ctx.shadowBlur = 15
        ctx.shadowColor = '#e6c68a' */
    }
/*
      this.update = function () {
        if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
          this.dx = -this.dx
        }
        if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
          this.dy = -this.dy
        }

        this.x += this.dx
        this.y += this.dy

        // interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
          if (this.radius < maxRadius) {
            this.radius += 1
          }
        } else if (this.radius > this.minRadius) {
          this.radius -= 1
        }
*/
    this.draw()
      // }
  }

  init () {
    circles = []
    for (let i = 0; i < 100; i++) {
      let radius = Math.random() * 3 + 1
      let x = Math.random() * (window.innerWidth - radius * 2) + radius
      let y = Math.random() * (window.innerHeight - radius * 2) + radius
      let dx = (Math.random() - 1 / 2)
      let dy = (Math.random() - 1 / 2)

      circles.push(this.Circle(x, y, dx, dy, radius))
    }
  }
  init()
/*
    animate()
    init()

    function animate () {
      window.requestAnimationFrame(animate)
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      for (let i = 0; i < circles.length; i++) {
        circles[i].update()
      }
    } */

  render () {
    return (
      <div>
        <canvas ref={this.canvas} width={window.innerWidth} height={window.innerHeight} />
        {/*  <img ref='image' src={cheese} className='hidden' /> */}
      </div>
    )
  }
}
export default Canvas
