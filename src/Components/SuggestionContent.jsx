const SuggestionContent = ({ suggestionItems,handleInput }) => {
  return (
    <div>
      <div className=" SUGGESTIONS text-[5vw] font-semibold tracking-wide leading-8 mx-[4vw] mt-[6vh] flex gap-4 overflow-x-auto no-scrollbar md:text-[4.5vw] md:leading-snug md:mt-[4vh] lg:text-[1.6vw] lg:mx-[2vw] xl:text-[2vw] xl:mt-[5vh]">
        <div className="flex gap-4 lg:gap-6 4k:gap-16">
          {suggestionItems.map((suggestionItem, index) => {
            return (
              <div
                className=" cursor-grab rounded-xl w-[60vw] h-[25vh] pt-[2.5vh] px-[4vw] bg-suggestionBg hover:bg-suggestionhover md:h-[28vh] lg:w-[22.5vw] lg:px-[1.5vw] lg:h-[32vh] xl:rounded-3xl xl:h-[35vh] 4k:w-[23vw]"
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
