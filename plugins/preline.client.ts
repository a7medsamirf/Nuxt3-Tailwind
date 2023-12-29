import "preline/preline";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:finish", () => {
    let HSStaticMethods;
    // @ts-ignore
    HSStaticMethods.autoInit();
  });
});