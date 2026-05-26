import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function HeaderMain({data}) {
  return (
    <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
      <div className="flex md:flex-row justify-between items-center">

        <div className="space-x-8 hidden md:block">
          <HeaderLinkCard data={data.header.fields} />
        </div>

      </div>
    </div>
  );
}

const HeaderLinkCard = ({ data }) => {
    return data.map((element, idx) => {
      return <a
      key={idx}
      href={element.link}
      className={`text-base text-blue-600 font-semibold dark:text-gray-400`}
    >
      {element.name}{" "}
    </a>
    });
}


