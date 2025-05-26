export const determinateBackground = () => {
  return process.env.NODE_ENV === "development"
    ? document.body.classList.add("backgroundDev")
    : document.body.classList.add("backGroundPro");
};
