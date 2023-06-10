import { Box , Text , Flex , Button, Center } from "@chakra-ui/react";
import { BsCheckCircle } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
const Success =() => {

    const navigate = useNavigate()
    return (
        <>
          <Box my='9em'>
             <Center>
            <BsCheckCircle size='4em' fill="green"/>
            </Center>
            <Text my='0.5em' fontWeight={'bold'} textAlign={'center'} fontSize={'2em'}>Thanks for Donating</Text>
            
            <Center>

                
            <Button
             
             py='1.6em'
             my='2em'
             onClick={e => navigate('/')}
             w={'10%'}
             px='1em'
             bg='#3080b4'
             color={'#fff'}
             bottom='1em'
             _hover={{}}
    
           >
             Go back home
           </Button>
            </Center>
          </Box>
        </>
    )
}

export default Success;