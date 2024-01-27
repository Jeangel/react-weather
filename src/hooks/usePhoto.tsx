import { SearchPhotosResponse } from "@/types/Unsplash";
import { useQuery } from "@tanstack/react-query";

const UNSPLASH_API = "https://api.unsplash.com";

interface UsePhotoArgs {
  name: string;
}

export const usePhoto = ({ name }: UsePhotoArgs) => {
  const query = useQuery({
    queryKey: ["city-image", name],
    enabled: false,
    staleTime: 1000 * 60 * 60,
    queryFn: async () => {
      const params = new URLSearchParams({
        client_id: import.meta.env.VITE_UNSPLASH_CLIENT_ID,
        per_page: "1",
        query: name,
        orientation: "landscape",
      }).toString();
      const response = await fetch(`${UNSPLASH_API}/search/photos?${params}`);
      const { results }: SearchPhotosResponse = await response.json();
      const [result] = results;
      return result.urls.regular;
    },
  });
  return query;
};
