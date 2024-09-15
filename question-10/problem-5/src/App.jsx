import React from 'react';
import { ChakraProvider, Box, Image, Text, Heading, Stack } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box padding="5" display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Card />
      </Box>
    </ChakraProvider>
  );
}


function Card() {
  return (
    <Box
      maxW={{ base: "90%", sm: "400px" }} 
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={6}
      bg="white"
      _hover={{ boxShadow: "xl" }} 
      transition="all 0.3s"
    >
      
      <Heading as="h3" size="lg" mb={4} textAlign="center">
        Chakra UI Card
      </Heading>

      
      <Box display="flex" justifyContent="center">
        <Image
          borderRadius="full"
          boxSize="150px"
          src="https://via.placeholder.com/150"
          alt="Card image"
        />
      </Box>

      
      <Text mt={4} textAlign="center" color="gray.600">
        This is a simple, responsive card component created using Chakra UI. It adjusts beautifully across different screen sizes and includes customizable styling.
      </Text>
    </Box>
  );
}

export default App;