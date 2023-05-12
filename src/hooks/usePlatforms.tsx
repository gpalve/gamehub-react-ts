import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient";
import ms from "ms";

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
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
