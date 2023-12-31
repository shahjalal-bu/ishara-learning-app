// import useAxios from "../hooks/useAxios";
import Axios from "../utils/Axios";

const useApi = () => {
  //   const [axiosSecure] = useAxios();
  //add class
  const addCourse = async (newClass) => {
    const response = await Axios.post("/courses", newClass);
    return response.data;
  };
  //get all course
  const getAllCourses = async () => {
    const response = await Axios.get("/courses");
    return response.data;
  };
  //enroll a course
  const enrollCourse = async (data) => {
    const response = await Axios.put(`/courses/enroll`, data);
    return response.data;
  };

  //add a syllabus
  const addSyllabus = async (data) => {
    const response = await Axios.put(
      `/courses/addSyllabus/${data.courseId}`,
      data
    );
    return response.data;
  };

  //add a syllabus
  const addContent = async (data) => {
    const response = await Axios.put(
      `/courses/addContent/${data.courseId}`,
      data
    );
    return response.data;
  };
  //   //add users
  //   const addUser = async (newUser) => {
  //     const response = await Axios.post("/users", newUser);
  //     return response.data;
  //   };
  //   //get all user
  //   const getAllUser = async () => {
  //     const response = await Axios.get("/users");
  //     return response.data;
  //   };
  //   //get all user
  //   const getAllClasses = async () => {
  //     const response = await Axios.get("/classes");
  //     return response.data;
  //   };
  //   //update user role admin
  //   const makeAdmin = async (userId) => {
  //     const response = await axiosSecure.patch(`/users/make-admin/${userId}`);
  //     return response.data;
  //   };
  //   //make instructor
  //   const makeInstructor = async (userId) => {
  //     try {
  //       const response = await Axios.patch(`/users/make-instructor/${userId}`);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   //update user role admin
  //   const approvedClass = async (classId) => {
  //     const response = await axiosSecure.patch(
  //       `/classes/approved-class/${classId}`
  //     );
  //     return response.data;
  //   };

  //   const deniedClass = async (classId) => {
  //     const response = await axiosSecure.patch(
  //       `/classes/denied-class/${classId}`
  //     );
  //     return response.data;
  //   };

  //   const feedbackClass = async ({ id, feedback }) => {
  //     const response = await axiosSecure.patch(`/classes/feedback-class/${id}`, {
  //       feedback: feedback,
  //     });
  //     return response.data;
  //   };
  //   const updateClass = async ({ id, data }) => {
  //     console.log(id);
  //     console.log(data);
  //     const response = await axiosSecure.patch(
  //       `/classes/update-class/${id}`,
  //       data
  //     );
  //     return response.data;
  //   };

  //   const selectClass = async ({ email, classId }) => {
  //     const response = await axiosSecure.patch(`/users/select-class/${email}`, {
  //       classId,
  //     });
  //     return response;
  //   };
  //   const deleteClass = async ({ email, classId }) => {
  //     const response = await axiosSecure.patch(`/users/delete-class/${email}`, {
  //       classId,
  //     });
  //     return response;
  //   };

  return {
    addCourse,
    getAllCourses,
    enrollCourse,
    addSyllabus,
    addContent,
  };
};

export default useApi;
