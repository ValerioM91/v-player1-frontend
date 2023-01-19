import mixpanel from "mixpanel-browser";
import Link from "next/link";
import useStore from "../../store";
import { trackDowngradePlan, trackUpgradePlan } from "../../utils/MixPanel";

const UserNav = () => {
  const { isLoggedIn, setIsLoggedIn, planType, setPlanType } = useStore();

  const logoutHandler = () => {
    alert("You are now logged out");
    setIsLoggedIn(false);
  };

  const premiumMember = planType === "Premium";

  const membershipHandler = () => {
    alert(premiumMember ? "You are now a free user" : "You are now a Premium Member");
    setPlanType(premiumMember ? "Free" : "Premium");
    premiumMember ? trackDowngradePlan() : trackUpgradePlan();
  };

  if (isLoggedIn) {
    return (
      <>
        <li>
          <div
            role="button"
            style={{ position: "relative", display: "inline-block" }}
            tabIndex={0}
            className="link underline"
            onClick={membershipHandler}
          >
            {premiumMember ? "Downgrade" : "Upgrade"}
          </div>
        </li>
        <li>
          <div
            role="button"
            style={{ position: "relative", display: "inline-block" }}
            tabIndex={0}
            className="link underline"
            onClick={logoutHandler}
          >
            Logout
          </div>
        </li>
      </>
    );
  }

  return (
    <>
      <li>
        <Link href="/login">
          <a className="link underline">Login</a>
        </Link>
      </li>
      <li>
        <Link href="/signup">
          <a className="link underline">Sign up</a>
        </Link>
      </li>
    </>
  );
};

export default UserNav;
