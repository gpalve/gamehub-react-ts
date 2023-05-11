import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const platformService = new ApiClient<Platform>("/platforms/lists/parents");
// const usePlatforms = () => ({ data: platforms });
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
