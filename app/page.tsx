import NextLink from 'next/link'
import { Box, Container, Link, VStack } from '@chakra-ui/react';


export default async function Home() {
  const response = await fetch('http://localhost:3000/api/test', { cache: 'no-store' })
  const json = await response.json()
  console.log(json);


  return (
    <>
      <Container
        maxW={'xl'}
      >
        <Box
          display={'flex'}
          flexDirection={'column'}
        >
          Hello world Home Page
          <Link as={NextLink} href='/goodbye2'>
            Goodbye
          </Link>
        </Box>
      </Container>
    </>
  );
}
