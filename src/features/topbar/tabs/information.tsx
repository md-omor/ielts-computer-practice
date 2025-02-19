const Infromation = () => {
  return (
    <div className="p-6">
      <div className="mb-5">
        <h3 className="font-semibold mb-1 text-base">
          INSTRUCTIONS TO CANDIDATES
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Answer all questions.</li>
          <li>You can change your answers at any time during the test.</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-1 text-base">
          INFORMATION FOR CANDIDATES
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>There are 40 questions in this test.</li>
          <li>Each question carries one mark.</li>
          <li>
            The test clock will show you when there are 10 minutes and 5 minutes
            remaining.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Infromation;
