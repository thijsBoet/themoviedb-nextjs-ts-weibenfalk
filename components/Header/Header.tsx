import Link from 'next/link'
import Image from 'next/image'
//Components

const Header = () => {
    return (
			<div className='sticky flex top-0 z-40 w-full h-24 bg-zinc-900'>
				<div className='flex justify-between w-full h-full max-w-7xl px-4 m-auto'>
					<Link href='/'>
						<div className='flex items-center cursor-pointer'>
							<div className='flex items-center cursor-pointer'>
								<div className='invisible md:visible'>
									<Image
										width='150'
										height='50'
										src='/rmdb-logo.svg'
										alt='rmdb-logo'
									/>
								</div>
								<div className='absolute md:invisible pt-2'>
									<Image
										height='42'
										width='42'
										src='/rmdb-logo-small.svg'
										alt='rmdb-logo-small'
									/>
								</div>
							</div>
						</div>
					</Link>
				</div>
			</div>
		);
}

export default Header