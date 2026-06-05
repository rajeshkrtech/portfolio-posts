import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function HeaderMain({data}) {
  return (
    <div className="flex h-auto items-center justify-center gap-16 mt-16">
      <HeaderLinkCard data={data.header.fields} />
    </div>
  );
}

const HeaderLinkCard = ({ data }) => {
    return data.map((element, idx) => {
      return <a
      key={idx}
      href={element.link}
      className={`text-base dark:text-gray-400`}
    >
      {element.name}{" "}
    </a>
    });
}


