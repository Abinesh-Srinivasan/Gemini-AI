const SuggestionContent = ({ suggestionItems,handleInput }) => {
  return (
    <div>
      <div className=" SUGGESTIONS text-xl font-semibold tracking-wide leading-8 mx-4 mt-14 flex gap-4 overflow-x-auto no-scrollbar md:text-base md:mt-4 lg:mt-12 lg:text-xl">
        <div className="flex gap-4 lg:gap-6">
          {suggestionItems.map((suggestionItem, index) => {
            return (
              <div
                className=" rounded-xl w-60 h-52 pt-6 px-3 bg-suggestionBg hover:bg-suggestionhover md:h-40 lg:h-48 lg:w-[17rem] lg:px-5"
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
