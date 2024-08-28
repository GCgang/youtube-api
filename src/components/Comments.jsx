import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { formatAgo } from '../utils/date';

export default function Comments({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: comments,
  } = useQuery({
    queryKey: ['comments', id],
    queryFn: () => {
      return youtube.getComments(id);
    },
    staleTime: 1000 * 60 * 5,
  });
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>{'댓글 사용이 중지되었습니다.'}</div>}
      {comments && (
        <ul>
          {comments.map(
            ({
              id,
              authorProfileImageUrl,
              authorDisplayName,
              publishedAt,
              textOriginal,
            }) => (
              <li className='flex mb-5' key={id}>
                <div className='shrink-0'>
                  <img
                    src={authorProfileImageUrl}
                    alt={authorDisplayName}
                    className='w-10 h-10 rounded-full'
                  />
                </div>
                <div className='flex-1 ml-5'>
                  <p>
                    <b>{authorDisplayName}</b>
                    <span className='ml-3 text-sm'>
                      {formatAgo(publishedAt, 'ko')}
                    </span>
                  </p>
                  <pre className='whitespace-pre-wrap text-sm leading-6'>
                    {textOriginal}
                  </pre>
                </div>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
}
