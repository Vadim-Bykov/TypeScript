import { useEffect, useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import * as api from '../../../api/moviesApt';

interface TListProps {
  isEndReached: boolean;
  mediaType: string;
}

export const useInfiniteList = ({ isEndReached, mediaType }: TListProps) => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['infiniteMovieList', mediaType],
    api.getInfinityList,
    { getNextPageParam: (prevPage) => prevPage.next }
  );

  useEffect(() => {
    if (isEndReached && hasNextPage) {
      fetchNextPage();
    }
  }, [isEndReached, hasNextPage, fetchNextPage]);

  return { data };
};

interface THandlerProps {
  setIsEndReached: (isEndReached: boolean) => void;
}

export const useScrollHandler = ({ setIsEndReached }: THandlerProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // scroll to top after reload
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll: EventListener = (e: Event) => {
      // const screen: Document = e.target as Document;
      // const clientHeight = screen?.activeElement?.clientHeight;
      const clientHeight = scrollRef.current?.clientHeight;
      if (!clientHeight) return;
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;
      const isEndReached = scrollY > clientHeight - innerHeight;

      setIsEndReached(isEndReached);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setIsEndReached]);

  return { scrollRef };
};
