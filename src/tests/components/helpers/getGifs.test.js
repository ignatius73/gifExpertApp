import React from 'react';
import { shallow } from 'enzyme';
import { getGifs } from '../../../helpers/getGifs';

describe( "Unitary tests on getGifs", () =>{
    test( "debe traer 10 elementos", async()=>{

        const gifs = await getGifs('OnePunch');
        expect( gifs.length ).toBe(10);
    });
    
    test('should receive a category', async () => {
       const gifs = await getGifs('');
      
      console.log(gifs);
      // expect( gifs.length ).toBe(0);
    })
    
});