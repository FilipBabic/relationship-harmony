const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  PROFILE: (id: string) => `/profile/${id}`,
  SIGN_IN_WITH_OAUTH: `signin-with-oauth`,
  DASHBOARD: "/dashboard",
};

export default ROUTES;
