// ** MUI Imports

import Grid from '@mui/material/Grid'
import { JSXElementConstructor, ReactElement, useEffect } from 'react'
import { AccountCircle } from '@mui/icons-material'
import { Box, useTheme } from '@mui/material'
import { motion, useAnimation } from 'framer-motion'
import Card from 'src/views/pages/home/Card'

const Home = () => {
  const controls = useAnimation()
  const theme = useTheme()

  const getRandomColor = () => {

    const colors = [
      theme.palette.primary.main,
      theme.palette.secondary.main,

      // theme.palette.info.main,
      // theme.palette.success.main,
      // theme.palette.warning.main,
      // theme.palette.error.main
    ]

    return colors[Math.floor(Math.random() * colors.length)]
  }

  useEffect(() => {
    controls.start('visible')
  }, [])

  return (
    <Box
      py={16}
      px={32}
      sx={{
        height: '100vh'
      }}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'flex-start'}
      alignItems={'center'}
    >
      <Box
        width={'100%'}
        py={4}
        display='flex'
        justifyContent='flex-end'
        alignItems='flex-end'
        sx={{
          maxHeight: '80px'
        }}
        component={motion.div}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <AccountCircle
          sx={{
            fontSize: 75
          }}
        />
      </Box>

      <Grid
        sx={{
          flex: 1
        }}
        container
        spacing={6}
        component={motion.div}
        initial='hidden'
        animate={controls}
        variants={{}}
      >
        <Grid item xs={6} md={6} lg={3} display={'flex'} flexDirection={{ xs: 'row', md: 'column' }}>
          <Card height={'35%'} logo index={0} title='' bgColor={getRandomColor()} />
          <Card index={1} title='Knowledge HUB' arrow  bgColor={getRandomColor()} />
        </Grid>
        <Grid item xs={6} md={6} lg={3} display={'flex'} flexDirection={{ xs: 'row', md: 'column' }}>
          <Card index={2} title='Brand & Marketing Central' bgColor={getRandomColor()} />
          <Card height={'50%'} index={3} title='Human Resources System' bgColor={getRandomColor()} />
        </Grid>
        <Grid item xs={6} md={6} lg={3} display={'flex'} flexDirection={{ xs: 'row', md: 'column' }}>
          <Card  index={4} title='Events Calendar'  bgColor={getRandomColor()} />
          <Card height={'50%'} index={5} title='Learning & Development Community' bgColor={getRandomColor()} />
        </Grid>
        <Grid item xs={6} md={6} lg={3} display={'flex'} flexDirection={{ xs: 'row', md: 'column' }}>
          <Card height={'30%'} index={6} title='Global News' bgColor={getRandomColor()} />
          <Card index={7} title='People Directory' bgColor={getRandomColor()} />
        </Grid>
      </Grid>
    </Box>
  )
}

Home.getLayout = (page: ReactElement<any, string | JSXElementConstructor<any>>) => page

export default Home
