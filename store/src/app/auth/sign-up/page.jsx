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



const Signuppage = () => {
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
            const { name, email, password } = data;
            const createUser = await axios.post('/api/users/register', { name, email, password });
            router.push('/auth/sign-in');

            console.log('User created:', createUser);
        } catch (error) {
            console.log('Error during submission:', error.response?.data || error.message || error);

        }
    };

    return (
        <div className='flex flex-col justify-center items-center mt-8'>
            <div>
                <Image src='/logo.svg' alt='logo' width={200} height={200} />
                <h4 className='text-2xl font-bold mt-4'>Welcome to Bazaar</h4>
            </div>
            <div className='mt-4 border border-gray-400 rounded-md p-4'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Name" {...field} />
                                    </FormControl>
                                    <FormMessage>
                                        {form.formState.errors.name?.message}
                                    </FormMessage>
                                </FormItem>
                            )}
                        />
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
                        <Button type="submit" disabled={loading}>
                            {loading ? "Signing up..." : "Sign up"}
                        </Button>
                    </form>
                    <div className='mt-4'>
                        <FormDescription >
                            Already have an account? <Link href="/auth/sign-in" className='text-blue-500 underline ml-1'>Signin</Link>
                        </FormDescription>
                    </div>
                </Form>

            </div>
        </div>
    );
};

export default Signuppage;
