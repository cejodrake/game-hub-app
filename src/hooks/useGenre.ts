import Genres from "../data/genres";
import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: Genres.length, results: Genres },
  });

export default useGenre;
