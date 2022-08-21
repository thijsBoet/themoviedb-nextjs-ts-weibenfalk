import React, { useState } from 'react';
import Image from 'next/image';

type Props = {
	setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const TIMEOUT = 300; // ms

const SearchInput = ({ setQuery }: Props) => {
    const [text, setText] = useState('');
    const timer = React.useRef<NodeJS.Timeout>();

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;

        clearTimeout(timer.current);
        setText(value);
        timer.current = setTimeout(() => {
            setQuery(value)
        }, TIMEOUT);
	};

	return (
		<>
			<input
				type='text'
				placeholder='Search Movie'
				value={text}
				onChange={handleInput}
				className='h-10 pr-14 md:w-96 rounded-full p-4 text-md bg-zinc-700 text-white focus:outline-none focus:border focus:border-solid focus:border-cyan-400'
			/>
			<div className='absolute right-4 top-8'>
				<Image src='/tmdb-logo.svg' width="30" height="32" alt='tmdb logo' />
			</div>
		</>
	);
};

export default SearchInput;
