import { PrismicText } from "@prismicio/react";
import SectionPadding from "../SectionPadding/SectionPadding";
import styles from "./ContactSection.module.scss";
const ContactSection = ({ data }) => {

  return (
    <SectionPadding color={"black"}>
      <div className={styles.container}>
        <h1><PrismicText field={data?.data.title}/></h1>
        {data?.data.contacts.map((document) => (
          <div key={document.name[0].text}>
            <p className={styles.title}>{document.name[0].text}</p>

            {document.name[0].text === "Email" ? (
              <a
                target="_blank"
                href={`mailto:${document.link[0].text}`}
                without
                rel="noreferrer"
              >
                {document.linkname[0].text}
              </a>
            ) : (
              <a
                target="_blank"
                href={document.link[0].text}
                without
                rel="noreferrer"
              >
                {document.linkname[0].text}
              </a>
            )}
          </div>
        ))}
      </div>
    </SectionPadding>
  );
};

export default ContactSection;
