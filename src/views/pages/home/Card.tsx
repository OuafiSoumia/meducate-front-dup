import { ArrowForward } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useLayoutEffect, useRef } from 'react'

type CardProps = {
  height?: any
  arrow?: boolean
  logo?: boolean
  index: number
  title: string
  bgColor?: string
}
const itemVariants = {
  hidden: {
    opacity: 0,
    x: 100
  },
  visible: (delayRef: any) => ({
    opacity: 1,
    x: 0,
    transition: { delay: delayRef.current }
  })
}

const Card = ({ height = null, arrow = false, logo = false, index, title, bgColor }: CardProps) => {
  const delayPerPixel = 0.0005
  const originOffset = useRef({ top: 0, left: 0 })
  const originIndex = 0
  const offset = useRef({ top: 0, left: 0 })
  const delayRef = useRef(0)
  const ref = useRef<HTMLDivElement>()

  useLayoutEffect(() => {
    const element = ref.current
    if (!element) return

    offset.current = {
      top: element.offsetTop,
      left: element.offsetLeft
    }

    if (index === originIndex) {
      originOffset.current = offset.current
    }
  }, [delayPerPixel])

  useEffect(() => {
    const dx = Math.abs(offset.current.left - originOffset.current.left)
    const dy = Math.abs(offset.current.top - originOffset.current.top)
    const d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
    delayRef.current = d * delayPerPixel
  }, [delayPerPixel])

  if (logo) {
    return (
      <Box
        component={motion.div}
        ref={ref}
        variants={itemVariants}
        custom={delayRef}
        borderRadius={2}
        m={2}
      
        sx={
          height
            ? {}
            : {
                flex: 1
              }
        }
        width={'100%'}
        position={'relative'}
        {...(height ? { height } : {})}
      >
        <Image
          src='/images/logo-meducate.png'
          alt='meducate'
          fill
          style={{
            objectFit: 'contain'
          }}
        />
      </Box>
    )
  }

  return (
    <Box
      component={motion.div}
      ref={ref}
      variants={itemVariants}
      custom={delayRef}
      borderRadius={2}
      m={2}
      sx={{
        backgroundColor: bgColor,
        cursor: 'pointer',
        ...(height ? {} : { flex: 1 })
      }}
      whileHover={{
        scale: 1.05
      }}
      position={'relative'}
      width={'100%'}
      {...(height ? { height } : {})}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'flex-end'}
    >
      {/*       
      <Box
        position={'absolute'}
        top={0}
        right={0}
        width={25}
        height={25}
        m={4}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius={50}
        sx={{
          backgroundColor: '#fff'
        }}
      >
        <Add sx={{ color: '#a35' }} />
      </Box> */}
      <Box width={'80%'} px={6} py={8}>
        <Typography
          sx={{
            color: '#fff',
            fontSize: 35,
            fontWeight: 300,
            textAlign: 'left',
            mt: 2,
            lineHeight: 1
          }}
        >
          {title}
        </Typography>
        {arrow && (
          <Box
            my={6}
            borderRadius={50}
            sx={{
              border: '3px solid #fff',
              display: 'inline-block',
              width: 60,
              height: 60
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%'
              }}
            >
              <ArrowForward
                sx={{
                  fontSize: 50,
                  color: '#fff'
                }}
              />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default Card
