import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Unitary test over CustomHook', () => {
    
    test('should return the start state', async() => {
      //  const { data: images, loading } = useFetchGifs({ 'OnePunch' });
        const { result, waitForNextUpdate } = renderHook( () =>{
          return useFetchGifs( 'One Punch' );
        });
        const { data, loading } = result.current;
        // onsole.log(`${data} ' ' ${loading}`);
        await waitForNextUpdate({ timeout:4000});
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('should return an array of gifs and loading false', async () => {
      const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ));
      await waitForNextUpdate({timeout:4000});
      const { data, loading } = result.current;
      expect(data.length).toEqual(10);
      expect(loading).toBe(false);
    })
    
    
})

