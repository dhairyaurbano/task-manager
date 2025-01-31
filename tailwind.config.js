import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			screens: {
				'threshold1':'1250px',
				'threshold2':'1312px',
                'threshold3':'1405px',
                'threshold4':'1500px',
                'threshold5':'1623px',
                'threshold6':'1753px',
                'threshold7':'1883px',
                'threshold8':'2010px',
              },
              fontFamily: {
			  }
		}
	},

	plugins: [typography, forms, containerQueries]
};
