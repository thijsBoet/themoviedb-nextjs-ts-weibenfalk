import Image from 'next/image';
// Helpers
import { convertMoney, calcTime } from '../../helpers';
// Components
import Thumb from '../Thumb/Thumb';
import Pill from '../Pill/Pill';
// Types
import type { Crew } from '../../api/types';

type Props = {
	thumbUrl: string;
	backgroundImgUrl: string;
	title: string;
	year: string;
	summary: string;
	rating: number;
	directors: Crew[];
	time: number;
	budget: number;
	revenue: number;
};

const MovieInfo =
	({
		thumbUrl,
		backgroundImgUrl,
		title,
		year,
		summary,
		rating,
		directors,
		time,
		budget,
		revenue,
	}: Props) =>
	() =>
		(
			<div className='relative w-full h-auto p-4'>
				<div className='relative h-full min-h-128 flex flex-col md:flex-row max-w-7xl p-4 m-auto z-10 rounded-xl bg-zinc-800 bg-opacity-90'>
					<div className='relative w-full h-96 md:h-auto md:w-1/3'>
						<Thumb imgUrl={thumbUrl} />
						<div className='absolute top-4 left-4 rounded-full bg-white w-10 h-10 flex justify-center items-center text-black text-sm font-bold'>
							{rating}
						</div>
					</div>
				</div>
			</div>
		);

export default MovieInfo;
