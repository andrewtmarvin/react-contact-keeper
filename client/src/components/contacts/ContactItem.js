import PropTypes from "prop-types";

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        Name: {name}&nbsp;
        <span
          style={{ float: "right", textTransform: "capitalize" }}
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type}
        </span>
      </h3>
      <ul className='list'>
        {email && (
          <li>
            <i className='fas fa-envelope-open'></i>&nbsp;{email}
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone'></i>&nbsp;{phone}
          </li>
        )}
      </ul>
      <p>
        <button className='btn btn-dark btn-sm'>Edit</button>
        <button className='btn btn-danger btn-sm'>Delete</button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
