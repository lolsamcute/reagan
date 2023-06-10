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
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiLock2Fill } from 'react-icons/ri';
import { ImFacebook } from 'react-icons/im';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { GiPerson } from 'react-icons/gi';

const daily = ['25', '50', '100', '150', '200', '250'];
const monthly = ['10', '25', '40', '45', '50', '75'];

const Prices = (item) => {
  const [price, setPrice] = useState('');

  return (
    <>
      <Flex wrap={'wrap'} gap='1em'>
        {daily.map((items) => (
          <Button
            color='#1e4f6eff'
            bg='none'
            borderRadius={'15px'}
            border={'1px solid gray'}
            p='1.5em'
            w={'120px'}
            onClick={(e) => setPrice(` $ ${items}`)}
          >
            ${items}
          </Button>
        ))}
      </Flex>

      <Flex my='1em' alignItems={'center'} gap={'0.5em'}>
        <Text color={'#1e4f6e'} fontWeight={'bold'}>
          Amount:
        </Text>
        <Input w={'70%'} fontWeight={'bold'} value={price} />
      </Flex>

      <Checkbox my='1em' defaultChecked>
        Yes! Id like to receive email updates
      </Checkbox>
    </>
  );
};

const writeUp = (
  <>
    <Text fontSize={'1.2em'}>
      Will you consider becoming one of our valued monthly supporters by
      converting your $50.00 contribution into a monthly donation?
    </Text>
  </>
);

const otherWrite = (
  <>
    <Text fontSize={'1.2em'}>
      Ongoing monthly donations allow us to better focus on our mission.
    </Text>
  </>
);

function Payment() {
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
          <Flex alignItems={'center'} justifyContent={'center'}>
            <Text
              textAlign={'center'}
              my='1em'
              fontWeight={'500'}
              color={'#1e4f6eff'}
            >
              {' '}
              MAKE A DONATION{' '}
            </Text>
            <Box justifySelf={'flex-end'}>
              <RiLock2Fill />
            </Box>
          </Flex>

          <Box px='1em'>{writeUp}</Box>

          <Box px='1em' my='2em'>
            {otherWrite}
          </Box>

          <Box
            px='1em'
            position={['relative', 'relative', 'absolute']}
            _hover={{}}
            bottom={'1em'}
            right={0}
            left={0}
          >
            <Button
              bg='none'
              color={'#3080b4ff'}
              border={'1px solid gray'}
              w='100%'
              py='1.5em'
            >
              Keep my one time $200.00 gift
            </Button>
          </Box>
        </Box>
      </Flex>

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

export default Payment;
