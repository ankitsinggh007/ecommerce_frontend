import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import React from 'react'
import { Login, SignUp } from '../component/LoginSignUp Componenet'
import { Flex,Box,Img, Text } from '@chakra-ui/react'

function LoginSignUp() {
  return (
    <Flex mx='auto' mt='30px' border='1px solid' w='50%'  >

<Tabs isFitted w='100%' h='530px' >
  <TabList mb='1em'>
  <Tab>Register</Tab>
  
    <Tab>Login</Tab>
  </TabList>
  <TabPanels >
    <TabPanel  >
    <SignUp/>

    </TabPanel>
    <TabPanel>
    <Login/>

    </TabPanel>
  </TabPanels>
  </Tabs>
    </Flex>
  )
}

export default LoginSignUp
