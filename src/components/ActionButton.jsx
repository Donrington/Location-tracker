import "../login.css";
const ActionButton = ({ role }) => {
  return (
    <button type="submit" className="btn btn-update w-100">
      {role}
    </button>
  );
};

export default ActionButton;
