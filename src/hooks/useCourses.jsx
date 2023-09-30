import { useQuery } from "@tanstack/react-query";
import useApi from "../api/api";

const useCourses = () => {
  const { getAllCourses } = useApi();
  const {
    data: courses = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: getAllCourses,
  });

  return [courses, loading, refetch];
};

export default useCourses;
