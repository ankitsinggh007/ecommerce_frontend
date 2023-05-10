import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import React from 'react'
import { Login, SignUp } from './LoginSignUp copy'
import { Flex,Box,Img, Text } from '@chakra-ui/react'

function LoginSignUp() {
  return (
    <Flex border='1px solid' w='50%'  >

<Tabs isFitted w='100%' h='600px' >
  <TabList mb='1em'>
  <Tab>Register</Tab>
  
    <Tab>Login</Tab>
  </TabList>
  <TabPanels >
    <TabPanel >
    <Login/>
    </TabPanel>
    <TabPanel>
      <SignUp/>
    </TabPanel>
  </TabPanels>
  </Tabs>
    </Flex>
  )
}

export default LoginSignUp
