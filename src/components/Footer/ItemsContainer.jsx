import Item from "./Item";
import { SUPPORT, ABOUT, STORE, GIFTING, DIY } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-5 gap-6 sm:px-8 px-5 py-16">
      <Item Links={ABOUT} title="ABOUT" />
      <Item Links={SUPPORT} title="SUPPORT" />
      <Item Links={STORE} title="STORE" />
      <Item Links={GIFTING} title="GIFTING" />
      <Item Links={DIY} title="DIY, Blog & Groups" />
    </div>
  );
};

export default ItemsContainer;