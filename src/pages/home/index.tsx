// ** MUI Imports

import Grid from '@mui/material/Grid'

import { JSXElementConstructor, ReactElement } from 'react'
import { AccountCircle, Add,ArrowCircleRightOutlined } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

const Home = () => {
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
      >
        <AccountCircle
          sx={{
            fontSize: 75
          }}
        />
      </Box>

      <Grid
        sx={{
          // flexGrow: 1,
          flex: 1
        }}
        container
        spacing={6}
      >
        <Grid item xs={12} md={6} lg={3} display={'flex'} flexDirection={{ xs: 'row', md: 'column' }}>
          <Card height={'30%'}/>
          <Card arrow={true}/>
        </Grid>
        <Grid item xs={12} md={6} lg={3} display={'flex'} flexDirection={{ xs: 'row', md: 'column' }}>
          <Card/>
          <Card height={'40%'}/>
        </Grid>
        <Grid item xs={12} md={6} lg={3} display={'flex'} flexDirection={{ xs: 'row', md: 'column' }}>
          <Card height={'30%'}/>
          <Card />
        </Grid>
        <Grid item xs={12} md={6} lg={3} display={'flex'} flexDirection={{ xs: 'row', md: 'column' }}>
          <Card height={'60%'}/>
          <Card />
        </Grid>
      </Grid>
    </Box>
  )
}

Home.getLayout = (page: ReactElement<any, string | JSXElementConstructor<any>>) => page

const Card = ({height=null,arrow=false}:{height?:any,arrow?:boolean}) => {
  
  return (
    <Box
      borderRadius={2}
      m={2}
      sx={height? {
        backgroundColor: '#a35',

      }:{
        backgroundColor: '#a35',
        flex:1

      }}
      position={'relative'}
      width={'100%'}
      {...(height?{height}:{})}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'flex-end'}
    >
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
        <Add sx={{color:'#a35'}}/>
      </Box>
      <Box
      width={'80%'}
      p={4}
      >
        <Typography 
        sx={{
          color:'#fff',
          fontSize: 40,
          fontWeight: 100,
          textAlign: 'left',
          mt: 2,
          lineHeight: 1
        }}
        >
          Brand & Marketing Central
        </Typography>
        {
          arrow && (<Box my={6}>
          <ArrowCircleRightOutlined
           sx={{
            fontSize: 50,
            color: '#fff',
          }}
          />
        </Box>)
        }

      </Box>
    </Box>
  )
}

export default Home
