'use client';
import React, { useCallback, useState } from 'react';
import { parseListInput, validateInput } from '../../lib';
import { detectSumsV2 } from '../../lib';
import PrettyJSON from '../ui/PrettyJSON';
import InputError from '../ui/InputError';
import Fade from '../ui/Fade';
import useDebounceCallback from '../../hooks/useDebounceCallback';

export default function InputForm() {
  const [text, setText] = useState('');
  const [inputError, setInputError] = useState('');
  const [results, setResults] = useState('');
  const init = useCallback(async () => {
    const inputError = validateInput(text);
    if (inputError) {
      setInputError(inputError);
      setResults('');
    } else {
      setInputError('');
      const results = detectSumsV2(parseListInput(text));
      setResults(JSON.stringify(results));
    }
  }, [text]);
  useDebounceCallback(init, text);

  return (
    <Fade
      className='bg-[var(--light-blue-gray)] rounded-2xl'
      toward='S'
      initialScale={0.85}
      finalScale={1}
      duration={0.25}
      initialOpacity={0}
      finalOpacity={1}
    >
      <div className='relative lg:w-[500px] sm:w-[400px] bg-[var(--light-blue-gray)]  lg:p-8 sm:p-6 p-4 mt-2 rounded-2xl '>
        <h1 className='text-[var(--gray-900)] leading-[1.2] text-2xl my-4 font-semibold'>
          Enter a list of numbers separated with commas
        </h1>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          type='text'
          id='number'
          className='block outline-none w-full rounded-md border-0 py-4 px-5 text-gray-900  focus:bg-white bg-white placeholder:text-gray-400  sm:text-sm sm:leading-6'
          placeholder='type here...'
        />
        <InputError error={inputError} />
        <PrettyJSON results={results} />
      </div>
    </Fade>
  );
}
