'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupFormSchema } from '@/utils/formSchema';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';



const Signinpage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(SignupFormSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  // Function to handle form submission
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const { email, password } = data;
      const response = await axios.post('/api/users/login', { email, password });
      router.push('/');

      console.log('User logged in:', response);
    } catch (error) {
      console.log('Error during submission:', error.response?.data || error.message || error);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center mt-8'>
      <div>
        <Image src='/logo.svg' alt='logo' width={200} height={200} />
        <h4 className='text-2xl font-bold mt-4'>Welcome Back</h4>
      </div>
      <div className='mt-4 border border-gray-400 rounded-md p-4'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.email?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.password?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <Button type="submit" disbaled={loading}>
              {loading ? 'Loading...' : 'Login'}
            </Button>
          </form>
          <div className='mt-4'>
            <FormDescription >
              Don't have an account? <Link href="/auth/sign-up" className='text-blue-500 underline ml-1'>Signup</Link>
            </FormDescription>
          </div>
        </Form>

      </div>
    </div>
  );
};

export default Signinpage;
