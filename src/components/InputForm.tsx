'use client';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
const inputFormSchema = z.object({
  number: z.number({
    required_error: 'Required',
    invalid_type_error: 'Only Number allowed',
  }),
});

export type InputFormSchemaType = z.infer<typeof inputFormSchema>;
export default function InputForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<InputFormSchemaType>({
    resolver: zodResolver(inputFormSchema),
    mode: 'onSubmit',
  });
  const onSubmit = (data: InputFormSchemaType) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='relative w-96 mt-2 rounded-md shadow-sm'>
        <Controller
          name='number'
          control={control}
          render={({ field: { onChange, value } }) => (
            <input
              value={value}
              onChange={value =>
                onChange(
                  Number(value.target.value) || value.target.value
                )
              }
              type='text'
              id='number'
              className='block outline-none w-full  rounded-md border-0 py-4 px-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              placeholder='0.00'
            />
          )}
        />
      </div>
      <ErrorMessage
        errors={errors}
        name='number'
        render={({ message }) => (
          <p className='text-red-700'>{message}</p>
        )}
      />
      <div className='flex justify-start'>
        <button className='bg-[#52C2CC] rounded-lg text-white text-lg font-semibold mt-2 hover:opacity-90 py-3 px-6'>
          Submit
        </button>
      </div>
    </form>
  );
}
