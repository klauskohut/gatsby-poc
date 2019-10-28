import React, { useEffect, useState } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './Slider.css'

const slides = [
  {
    src:
      'https://images.unsplash.com/photo-1568968107682-40c48d6af623?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=1000',
    title: 'Window'
  },
  {
    src:
      'https://images.unsplash.com/photo-1568185518838-3300c90c9170?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=1000',
    title: 'Laptop'
  },
  {
    src:
      'https://images.unsplash.com/photo-1570145820386-15a56730192c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=1000',
    title: 'Food'
  }
]


const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)


  const prev = () => setCurrentIndex(currentIndex - 1)

  const next = () => {
    setCurrentIndex(currentIndex + 1)
  }

  const currentImg = slides[Math.abs(currentIndex) % slides.length]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(currentIndex => currentIndex + 1);
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="wrapper">
      <button onClick={prev} className="prev">
        prev
      </button>
      <button onClick={next} className="next">
        next
      </button>

      <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={400} transitionLeaveTimeout={400} component='div'>
        <img src={currentImg.src} key={currentIndex} />
      </ReactCSSTransitionGroup>
    </div>
  )
}

export default Slider
