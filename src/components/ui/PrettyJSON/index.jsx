import React from 'react';
import Show from '@/components/ui/Show';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

export default function PrettyJSON({ results }) {
  return (
    <Show when={!!results}>
      <JSONPretty
        className='h-[35vh] p-4 bg-[#272822] scroll-bar-wrapper overflow-y-auto mt-4  rounded-md text-sm'
        id='json-pretty'
        data={results}
      />
    </Show>
  );
}
