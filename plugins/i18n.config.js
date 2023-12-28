export default defineNuxtPlugin((nuxtApp) => {
  const app = useNuxtApp();
  return computed(() =>
    app.i18n.locales.find((x) => x.code === app.i18n.locale)?.dir
  );
});



/* export const useDir = () => {
  const app = useNuxtApp();
  return computed(() =>
    app.i18n.locales.find((x) => x.code === app.i18n.locale)?.dir
  );
};
 */