import React from "react";

const SwitchVersion = () => {
  return (
    <section className="scroll-mt-14 pb-10">
      <div className="mx-auto mt-16 md:mt-20 px-4 sm:px-6 md:max-w-[52rem] md:px-4">
        <div className="md:flex">
          <div
            className="n-cascader"
            style={{ maxWidth: "10rem", marginRight: "1rem" }}
          >
            {/* Dropdown Selector Component */}
          </div>

          <div className="relative mt-2 md:mt-0 flex-1">
            {/* Some content */}
          </div>
        </div>

        {/* Radio Buttons for Version Selection */}
        <div
          className="text-sm"
          style={{
            display: "flex",
            flexFlow: "wrap",
            justifyContent: "flex-start",
            gap: "8px 12px",
            marginTop: "1rem",
          }}
        >
          <div className="">
            <label htmlFor="radio1">
              <input type="radio" id="radio1" value="1" name="version" />
              <span className="inline-block ml-3">专科/本科(约1万字)</span>
            </label>
          </div>
          <div className="">
            <label htmlFor="radio2">
              <input type="radio" id="radio2" value="2" name="version" />
              <span className="inline-block ml-3"> 本科(约2万字) </span>
            </label>
          </div>
          <div className="">
            <label htmlFor="radio3">
              <input type="radio" id="radio3" value="3" name="version" />
              <span className="inline-block ml-3"> 研究生(约3万字) </span>
            </label>
          </div>
          <div className="">
            <label htmlFor="radio4">
              <input type="radio" id="radio4" value="4" name="version" />
              <span className="inline-block ml-3"> 在职(约3万字*2个版本) </span>
            </label>
          </div>
          <div className="">
            <label htmlFor="radio5">
              <input type="radio" id="radio5" value="5" name="version" />
              <span className="inline-block ml-3"> 期刊论文(约5千字) </span>
            </label>
          </div>
        </div>

        {/* Button for generating outline */}
        <div
          className="mt-12 mx-auto relative text-center"
          style={{ width: "14rem" }}
        >
          <button
            className="n-button n-button--primary-type n-button--large-type"
            type="button"
            disabled
          >
            生成大纲
          </button>
          <div className="flex items-center justify-center mt-4">
            <div
              role="switch"
              aria-checked="false"
              className="n-switch n-switch--round n-switch--rubber-band"
              tabIndex="0"
            >
              {/* Switch toggle */}
            </div>
            <div className="flex items-center hover:cursor-pointer">
              <span className="ml-1 text-[#666]">使用三级大纲</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="ml-1 text-base text-[#999] hover:cursor-pointer iconify iconify--material-symbols"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                {/* SVG icon */}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwitchVersion;
