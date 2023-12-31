import { ApolloError, DocumentNode, QueryHookOptions, QueryResult, useQuery } from '@apollo/client';
import { useState } from 'react';

export const useFetch = (
  query: DocumentNode,
  config?: QueryHookOptions,
  setRefreshing?: (a: boolean) => any,
  onCompleted?: (res: QueryResult) => any | undefined,
) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApolloError>();

  const { refetch } = useQuery(query, {
    onError: (err) => {
      console.error({ method: 'useFetch', error: err });
      setError(err);
    },
    onCompleted: (res) => {
      setData(res);

      {
        onCompleted && onCompleted(res);
      }
      setLoading(false);
    },
    notifyOnNetworkStatusChange: true,
    ...config,
  });

  return { data, loading, error, refetch, setLoading };
};
