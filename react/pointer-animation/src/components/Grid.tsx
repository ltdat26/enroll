import styled from '@emotion/styled'
import { animate, AnimationOptions, motion, useMotionValue, useMotionTemplate, useTransform, useVelocity } from 'framer-motion'
import { useEffect, useState } from 'react'
import Cell, { CELL_SIZE } from './Cell'

const Container = styled(motion.div) < {
  columns: number
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  mask-image: radial-gradient(
    400px 400px,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.7),
    transparent
  );
  mask-repeat: no-repeat;
`

function Grid() {
  const [columns, setColumns] = useState(0)
  const [rows, setRows] = useState(0)

  //Determine rows and columns
  useEffect(() => {
    const calculatedGrid = () => {
      const columnsCount = Math.ceil(window.innerWidth / CELL_SIZE)
      setColumns(columnsCount)
      const rowCount = Math.ceil(window.innerHeight / CELL_SIZE)
      setRows(rowCount)
    }
    // Calculate grid on load
    calculatedGrid()
    window.addEventListener('resize', calculatedGrid)
    // cleanup
    return () => {
      window.removeEventListener('resize', calculatedGrid)
    }
  }, [])

  //Mouse position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  //Handle mouse move on document
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      //Animate mouse X and mouse Y
      animate(mouseX, e.clientX)
      animate(mouseY, e.clientY)

      //Animate eased
      const transition: AnimationOptions<number> = {
        ease: 'easeOut',
        duration: 1.2
      }
      animate(mouseXEased, e.clientX, transition)
      animate(mouseYEased, e.clientY, transition)
    }
    //Re-calculate grid on resize
    window.addEventListener('mousemove', handleMouseMove)

    //cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const centerMouseX = useTransform<number, number>(mouseX, (newX) => {
    return newX - window.innerWidth / 2
  })
  const centerMouseY = useTransform<number, number>(mouseY, (newY) => {
    return newY - window.innerHeight / 2
  })
  const WebkitMaskPosition = useMotionTemplate`${centerMouseX}px ${centerMouseY}px`

  //Eased mouse Position
  const mouseXEased = useMotionValue(0)
  const mouseYEased = useMotionValue(0)

  //Mouse velocity
  const mouseXVelocity = useVelocity(mouseXEased)
  const mouseYVelocity = useVelocity(mouseYEased)
  const mouseVelocity = useTransform<number, number>(
    [mouseXVelocity, mouseYVelocity],
    ([latestX, latestY]) => Math.abs(latestX) + Math.abs(latestY)
  )

  //Map mouse velocity to an opacity value
  const opacity = useTransform(mouseVelocity, [0, 1000], [0, 1])

  return (
    <Container columns={columns} style={{
      // opacity,
      WebkitMaskPosition
    }}>
      {Array.from({ length: columns * rows }).map((_, i) => (
        <Cell key={i} mouseX={mouseX} mouseY={mouseY} />
      ))}
    </Container>
  )
}

export default Grid