import mixpanel from "mixpanel-browser";

const MIXPANEL_EVENTS = {
  Visit: "Visit",
  ArticlePageViewed: "Article Page Viewed",
  ArticleShared: "Article Shared",
  SignUpPageViewed: "Sign Up Page Viewed",
  RegistrationCompleted: "Registration Completed",
  Login: "Login",
  EndContent: "End Content",
  PlanUpgraded: "Plan Upgraded",
  PlanDowngraded: "Plan Downgraded",
};

export const MIXPANEL_PROPERTIES = {
  PageName: "Page Name",
  PlanType: "Plan Type",
  ArticleTitle: "Article Title",
  EntryPoint: "Entry Point",
  ContentId: "Content Id",
  FirstArticleRead: "First Article Read",
  ArticlesViewed: "Articles Viewed",
  SocialMediaShares: "Social Media Shares",
  TotalArticlesShares: "Total Articles Shares",
  SignUpPageViewed: "Sign Up Page Viewed",
  $name: "$name",
  $email: "$email",
  RegistrationDate: "Registration Date",
  DeviceNumber: "Device Number",
  PlatformsUsed: "Platforms Used",
  SocialMedia: "Social Media",
};

export const trackSignUpPageViewed = () => {
  mixpanel.track(MIXPANEL_EVENTS.SignUpPageViewed, {
    [MIXPANEL_PROPERTIES.SignUpPageViewed]: true,
  });
};

export const trackSignUp = ({
  name,
  email,
  premium,
}: {
  name: string;
  email: string;
  premium: boolean;
}) => {
  mixpanel.identify(email);
  mixpanel.register({
    [MIXPANEL_PROPERTIES.PlanType]: premium ? "Premium" : "Free",
  });
  mixpanel.track(MIXPANEL_EVENTS.RegistrationCompleted);
  mixpanel.people.set({
    [MIXPANEL_PROPERTIES.$name]: name,
    [MIXPANEL_PROPERTIES.$email]: email,
    [MIXPANEL_PROPERTIES.RegistrationDate]: new Date().toISOString(),
    [MIXPANEL_PROPERTIES.PlanType]: premium ? "Premium" : "Free",
  });
};

export const trackLogin = (userEmail: string, planType: "Premium" | "Free") => {
  mixpanel.identify(userEmail);
  mixpanel.register({
    [MIXPANEL_PROPERTIES.PlanType]: planType,
  });
};

export const trackArticleView = (article, entryPoint) => {
  mixpanel.track(MIXPANEL_EVENTS.ArticlePageViewed, {
    [MIXPANEL_PROPERTIES.ArticleTitle]: article.title,
    [MIXPANEL_PROPERTIES.ContentId]: article.id,
    [MIXPANEL_PROPERTIES.EntryPoint]: entryPoint,
  });
  mixpanel.people.set_once({
    [MIXPANEL_PROPERTIES.FirstArticleRead]: new Date().toISOString(),
  });
  mixpanel.people.increment(MIXPANEL_PROPERTIES.ArticlesViewed);
};

export const trackEndContent = (article) => {
  mixpanel.track(MIXPANEL_EVENTS.EndContent, {
    [MIXPANEL_PROPERTIES.ArticleTitle]: article.title,
    [MIXPANEL_PROPERTIES.ContentId]: article.id,
  });
};

export const trackUpgradePlan = () => {
  mixpanel.register({
    [MIXPANEL_PROPERTIES.PlanType]: "Premium",
  });
  mixpanel.track(MIXPANEL_EVENTS.PlanUpgraded);
  mixpanel.people.set({
    [MIXPANEL_PROPERTIES.PlanType]: "Premium",
  });
};

export const trackDowngradePlan = () => {
  mixpanel.register({
    [MIXPANEL_PROPERTIES.PlanType]: "Free",
  });
  mixpanel.track(MIXPANEL_EVENTS.PlanDowngraded);
  mixpanel.people.set({
    [MIXPANEL_PROPERTIES.PlanType]: "Free",
  });
};

export const trackVisit = (page: string, planType: "Premium" | "Free") => {
  mixpanel.register({
    [MIXPANEL_PROPERTIES.PageName]: page,
    [MIXPANEL_PROPERTIES.PlanType]: planType,
  });
};

export const trackSocialShare = (title: string, social: "Facebook" | "Twitter" | "Reddit") => {
  mixpanel.track(MIXPANEL_EVENTS.ArticleShared, {
    [MIXPANEL_PROPERTIES.ArticleTitle]: title,
    [MIXPANEL_PROPERTIES.SocialMedia]: social,
  });
  mixpanel.people.increment(MIXPANEL_PROPERTIES.TotalArticlesShares);
};
