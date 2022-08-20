// Types
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Movies, Movie } from './../../api/types';
// API Urls
import { SEARCH_BASE_URL, POPULAR_BASE_URL } from '../../config';
// Basic Fetch Function
import { basicFetch } from './../../api/fetchFunctions';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Movies>) {
  const { page, search } = req.query; // Grab search param from query string

	// If search param is present, use search endpoint, otherwise use popular endpoint
	const endpoint = search
		? `${SEARCH_BASE_URL}${search}&page=${page}`
    : `${POPULAR_BASE_URL}&page=${page}`;

  const data = await basicFetch<Movies>(endpoint); // Fetch data from endpoint

  res.status(200).json(data); // Return data
}