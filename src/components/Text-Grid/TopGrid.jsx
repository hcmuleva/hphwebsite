
import curl from "../../assests/icon-arrow-curl-gray.svg";

function TopGrid() {
  return (
    <div>
      <div className="mx-auto my-5 flex text-center justify-center">
        <h1 className="font-bold">A box of “whoa, awesome” — delivered monthly!</h1>
      </div>

      <div className="   mt-2 md:flex-row grid grid-cols-1  md:grid-cols-3 px-5 py-1 md:gap-2 md:mx-40">
        <div>
          <h4 style={{ color: "rgb(42, 106, 201)" }} className="font-bold">
            1.Choose a subscription
          </h4>
          <p>
            We have projects for <b>every age and interest!</b>
          </p>
        </div>
        <div className="">
          <h4 style={{ color: "rgb(0, 171, 95)" }} className="font-bold">2.Pick a delivery plan</h4>
          <p>
            Choose between a monthly, 3-, 6-, or 12-month plan. Switch lines,
            pause, or <b>cancel anytime.</b>
          </p>
        </div>
        <div className="">
          <h4 style={{ color: "rgb(240, 88, 36)" }} className="font-bold">
            3.Receive fun-filled monthly crates
          </h4>
          <p>
            Each crate includes everything needed for{" "}
            <b>screen-free, hands-on enrichment.</b>
          </p>
        </div>
      </div>
      <div className="">
        {" "}
        <img
          src={curl}
          alt="arrow"
          className="mx-auto d-flex justify-content-center"
        />{" "}
      </div>
    </div>
  );
}

export default TopGrid;
