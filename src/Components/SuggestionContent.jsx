const SuggestionContent = ({ suggestionItems,handleInput }) => {
  return (
    <div>
      <div className=" SUGGESTIONS text-[5vw] font-semibold tracking-wide leading-8 mx-[4vw] mt-[6vh] flex gap-4 overflow-x-auto no-scrollbar md:text-[4.5vw] md:leading-snug md:mt-[4vh] lg:text-[1.6vw] lg:mx-[2vw]">
        <div className="flex gap-4 lg:gap-6">
          {suggestionItems.map((suggestionItem, index) => {
            return (
              <div
                className=" rounded-xl w-[60vw] h-[25vh] pt-[2.5vh] px-[4vw] bg-suggestionBg hover:bg-suggestionhover md:h-[28vh] lg:w-[22.5vw] lg:px-[1.5vw] lg:h-[32vh]"
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
