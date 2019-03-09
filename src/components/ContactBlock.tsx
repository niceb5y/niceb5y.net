import React from "react"

import Contact from "./Contact"
import ContactData from "../data/Contact"

export default () => (
  <div className="block block-bordered-lg">
    <div className="row">
      {ContactData.map((contact, index) => {
        return (
          <Contact
            icon={contact.icon}
            title={contact.title}
            link={contact.link}
            desc={contact.desc}
            key={index}
          />
        )
      })}
    </div>
  </div>
)
