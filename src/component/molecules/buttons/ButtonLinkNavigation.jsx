import ButtonLink from "../../atoms/buttons/ButtonLink";

const ButtonLinkNavigation = ({ links }) => {
  return (
    <nav className="navbar">
      {links.map((l) => (
        <ButtonLink link={l} key={l} />
      ))}
    </nav>
  );
};

export default ButtonLinkNavigation;
