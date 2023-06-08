import React from "react";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Link,
    Image,
    Text,
    Center
  } from "@chakra-ui/react";

export default function LoginForm() {
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
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter your email" />
            </FormControl>

            <FormControl mt="4">
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Enter your password" />
            </FormControl>

            <Button
              mt="6"
              colorScheme="blue"
              width="full"
              type="submit"
            >
              Log In
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
