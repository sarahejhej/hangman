import useSWR from 'swr';

export const useRandomWord = shouldFetch => {
  const headers = {
    'Content-Type': 'application/json',
    'X-Api-Key': process.env.REACT_APP_API_KEY,
  };

  const fetcher = async () => {
    const response = await fetch('https://api.api-ninjas.com/v1/randomword', {
      headers,
    });
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  };

  const randomWordUrl = 'https://api.api-ninjas.com/v1/randomword';

  const { data, error } = useSWR(shouldFetch ? null : randomWordUrl, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: true,
  });

  return {
    data,
    error,
  };
};
