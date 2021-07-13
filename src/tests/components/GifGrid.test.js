import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');




describe('Unitary tests over GifGrid.js', () => {

    const categ = 'One Punch';
    //let wrapper = shallow( <GifGrid category={ categ } /> );

   /* beforeEach( ()=>{

    })*/

    test('should match with the snapshot', () => {
        //Controla la llegada por default del hookw

        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        });
        const wrapper = shallow( <GifGrid category={ categ } /> );
        expect( wrapper ).toMatchSnapshot();
        
       
    })

    test('should be show items when images were loaded', () => {
        //Creo un objeto de las características que debería recibir del Fetch
        const gifs = [{
            id: 'ABC',
            gif:'http://cualqierCosa.com/imagen.jpg',
            title: 'Cualquier cosa'
        }];

        //Llamo el returnValue del Hook
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={ categ } />);

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
    
    
    
});
