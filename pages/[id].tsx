import {
	movieUrl,
	creditsUrl,
	IMAGE_BASE_URL,
	POSTER_SIZE,
	BACKDROP_SIZE,
} from '../config';
// Basic Fetch
import { basicFetch } from '../api/fetchFunctions';
// Types
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { Movie, Credits, Crew, Cast } from '../api/types';
// Components
import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import MovieInfo from '../components/MovieInfo/MovieInfo';
import Grid from '../components/Grid/Grid';
import Card from '../components/Card/Card';

type Props = {
	movie: Movie;
	directors: Crew[];
	cast: Cast[];
};

const Movie: NextPage<Props> = ({ movie, directors, cast }) => (
	<main>
		<Header />
		<Breadcrumb title={movie.original_title} />
		<MovieInfo
			thumbUrl={
				movie.poster_path
					? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
					: './no_image.jpg'
			}
			rating={movie.vote_average}
		/>
		<Grid>
			<Card />
		</Grid>
	</main>
);

export default Movie;

export const getStaticProps: GetStaticProps = async context => {
	const id = context.params?.id as string;

	const movieEndpoint: string = movieUrl(id);
	const creditsEndpoint = creditsUrl(id);

	const movie = await basicFetch<Movie>(movieEndpoint);
	const credits = await basicFetch<Credits>(creditsEndpoint);

	// Get directors only
	const directors = credits.crew.filter(crew => crew.job === 'Director');
	return {
		props: {
			movie,
			directors,
			cast: credits.cast,
		},
		revalidate: 60 * 60 * 24, // rebuild page every 24 hours
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking',
	};
};
