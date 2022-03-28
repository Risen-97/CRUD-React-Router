import Title from "../components/ui/Title";
import ContactRow from "../components/layout/ContactRow";
import { useContact } from "../context/contact-auth";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const [contact, setContact] = useContact();
  const { contactList } = contact;
  const navigate = useNavigate();
  const deleteContact = (id) => {
    const newContact = contactList.filter((contact) => contact.id !== id);
    setContact({ ...contact, contactList: newContact });
  };

  const detailsHandler = (data) => {
    navigate("/contact");
  };

  return (
    <div className="flex flex-col items-center py-20">
      <Title title="Contact  Page" />

      <div className="bg-slate-700 w-full max-w-3xl h-[600px] overflow-auto rounded-lg text-lg">
        <div className="flex flex-col">
          {contactList?.map((contact) => {
            return (
              <ContactRow
                key={contact.id}
                onDetails={() => detailsHandler(contact)}
                onDelete={() => deleteContact(contact.id)}
                {...contact}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
