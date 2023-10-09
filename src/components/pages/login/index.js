'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { SignInSchema } from './lib/signin.schema';
import useSignInMutation from './hooks/useSignIn.mutation';
import Link from 'next/link';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
} from '@nextui-org/react';
import { ErrorMessage, Field, Formik } from 'formik';
import { FormInput, FormSelect } from '@/helpers/FormField';

export default function LoginComponent() {
  const { mutate, isLoading } = useSignInMutation();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
        validateOnMount
        validationSchema={SignInSchema}
      >
        {(props) => {
          console.log(props);
          return (
            <form onSubmit={props.handleSubmit}>
              <FormInput name='email' type='email' placeholder='Doe' label='Email' required />
              <FormSelect name='name' required label='Hewan' placeholder='Pilih Hewan'>
                {animals.map((animal) => (
                  <SelectItem key={animal.value} value={animal.value}>
                    {animal.label}
                  </SelectItem>
                ))}
              </FormSelect>
              <button type='submit'>Submit</button>
            </form>
          );
        }}
      </Formik>

      <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>Modal Title</ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
                  venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
                  venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit
                  dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris
                  do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  Close
                </Button>
                <Button color='primary' onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export const animals = [
  { label: 'Cat', value: 'cat', description: 'The second most popular pet in the world' },
  { label: 'Dog', value: 'dog', description: 'The most popular pet in the world' },
  { label: 'Elephant', value: 'elephant', description: 'The largest land animal' },
  { label: 'Lion', value: 'lion', description: 'The king of the jungle' },
  { label: 'Tiger', value: 'tiger', description: 'The largest cat species' },
  { label: 'Giraffe', value: 'giraffe', description: 'The tallest land animal' },
  {
    label: 'Dolphin',
    value: 'dolphin',
    description: 'A widely distributed and diverse group of aquatic mammals',
  },
  { label: 'Penguin', value: 'penguin', description: 'A group of aquatic flightless birds' },
  { label: 'Zebra', value: 'zebra', description: 'A several species of African equids' },
  {
    label: 'Shark',
    value: 'shark',
    description: 'A group of elasmobranch fish characterized by a cartilaginous skeleton',
  },
  {
    label: 'Whale',
    value: 'whale',
    description: 'Diverse group of fully aquatic placental marine mammals',
  },
  { label: 'Otter', value: 'otter', description: 'A carnivorous mammal in the subfamily Lutrinae' },
  { label: 'Crocodile', value: 'crocodile', description: 'A large semiaquatic reptile' },
];
