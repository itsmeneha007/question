import React from 'react';
import { ChakraProvider, Heading, Button, Input, Box, Stack } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box padding="5" maxW="500px" margin="auto" mt="10">
        
        <Heading as="h1" size="xl" textAlign="center" marginBottom="5">
          My Chakra UI App
        </Heading>

        
        <Stack spacing={3}>
          <Input placeholder="Enter something..." size="md" />
          <Input placeholder="Enter more text..." size="md" />
        </Stack>

        
        <Button
          colorScheme="blue"
          size="lg"
          width="100%"
          marginTop="4"
        >
          Submit
        </Button>

        
        <Box
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p="6"
          mt="6"
          textAlign="center"
        >
          <Heading as="h2" size="md" mb="4">
            Chakra UI Card
          </Heading>
          <p>This is a simple card component created using Chakra UI.</p>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;