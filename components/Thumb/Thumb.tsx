import Image from 'next/image'

type Props = {
    imgUrl: string,
}

const Thumb = ({ imgUrl }: Props) => (
	<Image
		placeholder='blur'
		blurDataURL='./placeholder.jpg'
		src={imgUrl}
		className='rounded-lg'
		objectFit='cover'
		alt='movie thumbnail'
		layout='fill'
	/>
);

export default Thumb;