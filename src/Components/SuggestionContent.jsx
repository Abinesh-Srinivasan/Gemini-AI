const SuggestionContent = ({ suggestionItems,handleInput }) => {
  return (
    <div>
      <div className=" SUGGESTIONS text-xl font-semibold tracking-wide leading-8 mx-4 mt-14 flex gap-4 overflow-x-auto no-scrollbar">
        <div className="flex gap-4">
          {suggestionItems.map((suggestionItem, index) => {
            return (
              <div
                className=" rounded-xl w-60 h-52 pt-6 px-3 bg-suggestionBg hover:bg-suggestionhover"
                key={index}
                onClick={()=>handleInput(suggestionItem)}
              >
                {suggestionItem}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SuggestionContent;
