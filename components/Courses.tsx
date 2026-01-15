import { coursesData } from "@/data/courses";
import CourseCard from "./CourseCard";
import SectionContainer from "./ui/SectionContainer";
import SectionHeading from "./ui/SectionHeading";

export default function Courses() {
  return (
    <SectionContainer id="courses" className="bg-white dark:bg-black">
      <SectionHeading>Education & Certifications</SectionHeading>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" role="list">
        {coursesData.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </SectionContainer>
  );
}
