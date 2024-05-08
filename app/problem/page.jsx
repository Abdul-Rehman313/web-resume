'use client'
import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

const Problem = () => {
  const [hover,setHover] = useState(0)

  const handleHover = (()=>{
    setHover(hover+1)
  })
  const handleClick = (()=>{
    console.log("Clicked!")
  })
  const [show,setShow]= useState(1)
  const handleToggle = (()=>{
   setShow(!show)
  })
  
 return (
  <>
  <Flex h="100vh" bgColor="purple" justifyContent="center" alignItems="center">
    <Flex direction="column" alignItems="center" bgColor="#FFF" w="50%" h="500px">
<Image src='/images.jpg'w="100%" h="300px" alt= "problem" />
<Heading>
  My Name is Abdul Rehman
</Heading>
<Text>
  I am learing ReactJs
</Text>
<Button color="yellow" bgColor="blue" > Click me!</Button>
    </Flex>

  </Flex>

    <Flex bgColor="grey" direction='column' alignItems='center'  justifyContent='center'>
<Button onMouseEnter={handleHover} bgColor="red" w="10%" >
  Hover me 
</Button>
<Heading textAlign='center'>
  set hover :{hover}
</Heading>
    </Flex>
  <Flex>
    <Button onClick={handleClick}>
      Click me!
    </Button>
  </Flex>
   <Flex>
    {
      show&&
  
    <Text>
    this is the paragraph to toggle you 
    </Text>  }
    <Button  onClick={handleToggle}>
      toggle paragraph
    </Button>
   </Flex>
   <Flex>
    <button style={{ color:"white", backgroundColor:"blue", fontSize:"16px", padding:"10px 20px",
     borderRadius: "5px",
     cursor:"pointer"   }}>
      Click me!
    </button>
   </Flex>
   <Text> hello my Name is Abdul Rehman, whats your name? 
    whats your name ? tell me about us ?
    i am still working in geekybugs 
    and you ?
   </Text>
    </>
  )
}

export default Problem;
