import React from 'react';
import Show from '@/components/ui/Show';

export default function InputError({ error }) {
  return (
    <Show when={!!error}>
      <p className='text-red-500 mt-2' data-testid='input-error'>
        {error}
      </p>
    </Show>
  );
}
