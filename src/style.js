const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-righteous font-semibold xs:text-[60px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",

  adminHeading:
    "font-righteous font-semibold xs:text-[30px] text-[20px] xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph:
    "font-righteous font-normal text-white text-[18px] leading-[30.8px] pb-5",

  authHeading:
    "font-righteous font-semibold xs:text-[32px] text-[24px] xs:leading-[76.8px] leading-[66.8px] text-white w-full",

  copyright: "font-righteous font-normal text-whiteGrey text-[16px]",
  sidebartext: "font-righteous font-normal text-white text-[14px]",
  sidebartextSelected: "font-righteous font-normal text-magenta text-[14px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
