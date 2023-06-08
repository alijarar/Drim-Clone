import React from "react";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Link,
    Text,
    Center
  } from "@chakra-ui/react";

export default function RegistrationForm() {
  return (
    <Center height="100vh">
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        bg="gray.100"
      >
        <Box width="400px" p="6" bg="white" borderRadius="md" boxShadow="md">
          <Box textAlign="center" mb="6">
            {/* <Image
              src="/logo.png" // Replace with your logo image path
              alt="Logo"
              maxW="150px"
              mx="auto"
              mb="4"
            /> */}
            <Text fontSize="xl">Sign in to your account</Text>
          </Box>

          <form>
          <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Enter your email" />
              </FormControl>

              <FormControl mt={4} isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="Enter your password" />
              </FormControl>

              <FormControl mt={4} isRequired>
                <FormLabel>Phone Number</FormLabel>
                <Input type="tel" placeholder="Enter your phone number" />
              </FormControl>

              <Button colorScheme="blue" mt={4}>
                Continue
              </Button>
          </form>

          <Box mt="4" textAlign="center">
            <Link color="blue.500" href="#">
              Forgot your password?
            </Link>
          </Box>
        </Box>
      </Box>
      </Center>
  );
}

