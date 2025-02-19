const TestHelp = () => {
  return (
    <div className="max-h-[400px] overflow-y-auto p-6">
      <div className="space-y-4">
        <h4 className="font-medium">Multiple choice questions</h4>
        <p className="text-sm text-gray-600 mb-4">
          Choose your question by clicking on it
        </p>

        {/* Question items with hover effect and background */}
        <div className="space-y-2">
          <div className="p-3 bg-white/80 hover:bg-blue-50 rounded-md cursor-pointer transition-colors">
            <p>
              1. Marie Curie&apos;s husband was a joint winner of both
              Marie&apos;s Nobel Prizes.
            </p>
            <div className="mt-2 space-y-1">
              <label className="flex items-center space-x-2">
                <input type="radio" name="q1" />
                <span>TRUE</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="q1" />
                <span>FALSE</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="q1" />
                <span>NOT GIVEN</span>
              </label>
            </div>
          </div>

          <div className="p-3 bg-white/80 hover:bg-blue-50 rounded-md cursor-pointer transition-colors">
            <p>2. Marie became interested in science when she was a child</p>
          </div>

          <div className="p-3 bg-white/80 hover:bg-blue-50 rounded-md cursor-pointer transition-colors">
            <p>3. Marie&apos;s family in Poland had financial problems</p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="font-medium">Multiple choice questions</h4>
        <p className="text-sm text-gray-600 mb-4">
          Choose your question by clicking on it
        </p>

        {/* Question items with hover effect and background */}
        <div className="space-y-2">
          <div className="p-3 bg-white/80 hover:bg-blue-50 rounded-md cursor-pointer transition-colors">
            <p>
              1. Marie Curie&apos;s husband was a joint winner of both
              Marie&apos;s Nobel Prizes.
            </p>
            <div className="mt-2 space-y-1">
              <label className="flex items-center space-x-2">
                <input type="radio" name="q1" />
                <span>TRUE</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="q1" />
                <span>FALSE</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="q1" />
                <span>NOT GIVEN</span>
              </label>
            </div>
          </div>

          <div className="p-3 bg-white/80 hover:bg-blue-50 rounded-md cursor-pointer transition-colors">
            <p>2. Marie became interested in science when she was a child</p>
          </div>

          <div className="p-3 bg-white/80 hover:bg-blue-50 rounded-md cursor-pointer transition-colors">
            <p>3. Marie&apos;s family in Poland had financial problems</p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="font-medium">Multiple choice questions</h4>
        <p className="text-sm text-gray-600 mb-4">
          Choose your question by clicking on it
        </p>

        {/* Question items with hover effect and background */}
        <div className="space-y-2">
          <div className="p-3 bg-white/80 hover:bg-blue-50 rounded-md cursor-pointer transition-colors">
            <p>
              1. Marie Curie&apos;s husband was a joint winner of both
              Marie&apos;s Nobel Prizes.
            </p>
            <div className="mt-2 space-y-1">
              <label className="flex items-center space-x-2">
                <input type="radio" name="q1" />
                <span>TRUE</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="q1" />
                <span>FALSE</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="q1" />
                <span>NOT GIVEN</span>
              </label>
            </div>
          </div>

          <div className="p-3 bg-white/80 hover:bg-blue-50 rounded-md cursor-pointer transition-colors">
            <p>2. Marie became interested in science when she was a child</p>
          </div>

          <div className="p-3 bg-white/80 hover:bg-blue-50 rounded-md cursor-pointer transition-colors">
            <p>3. Marie&apos;s family in Poland had financial problems</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestHelp;
