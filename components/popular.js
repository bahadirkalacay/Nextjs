import Link from 'next/link';

export default function Popular({movies}) {
	return <div className="w-[75rem] my-0 mx-auto py-5 px-0 ">
		<h2 className='text-center mb-3 text-green-800 text-lg font-bold'>Popüler Filmler</h2>
		<div className="flex flex-wrap gap-2.5">
			{movies.results.map(movie => (
				<Link legacyBehavior href={`/film/${movie.id}`}>
					<a>
						<h3>{movie.title}</h3>
						<img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt=""/>
					</a>
				</Link>
			))}
		</div>
	</div>
}