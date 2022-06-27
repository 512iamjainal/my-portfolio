import './index.scss'
import { useEffect, useRef } from 'react'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>

      <svg
        width="40"
        viewBox="0 0 30 30.000001"
        height="40"
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#id1)">
          <path
            fill="#78788c"
            d="M 21.996094 2.914062 L 18.441406 2.914062 C 18.160156 2.914062 17.933594 3.144531 17.933594 3.429688 L 17.933594 18.789062 C 17.933594 20.464844 16.667969 21.925781 15.023438 21.988281 C 13.273438 22.058594 11.835938 20.652344 11.835938 18.898438 C 11.835938 18.613281 11.609375 18.382812 11.328125 18.382812 L 7.769531 18.382812 C 7.488281 18.382812 7.261719 18.621094 7.261719 18.910156 C 7.269531 22.882812 10.683594 26.117188 14.882812 26.117188 C 19.085938 26.117188 22.503906 22.878906 22.503906 18.898438 L 22.503906 3.429688 C 22.503906 3.144531 22.277344 2.914062 21.996094 2.914062 Z M 21.996094 2.914062 "
            fill-opacity="1"
            fill-rule="nonzero"
          ></path>
        </g>
      </svg>
    </div>
  )
}

export default Logo
