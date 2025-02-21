import QuestionContent from "@/components/organisms/question/QuestionContent";
import QuestionHeader from "@/components/organisms/question/QuestionHeader";
import QuestionPagination from "@/components/organisms/question/QuestionPagination";

const ListeningLayout = () => {
  return (
    <div className="w-full h-full px-5 py-6 bg-gradient-to-b from-sky-50 via-white to-sky-100">
      <QuestionHeader part="1" questionRange="1 – 10" />
      <QuestionContent className="my-4" />
      <QuestionPagination />
    </div>
  );
};

export default ListeningLayout;
