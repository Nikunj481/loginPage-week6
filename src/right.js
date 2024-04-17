import './App.css'; 
const FormSubmitData = ({formData}) => {
    return (
        <div className="submitted-content">
          <h2>Submitted Content</h2>
          <div>
            <strong>First Name:</strong> {formData.firstName}
          </div>
          <div>
            <strong>Last Name:</strong> {formData.lastName}
          </div>
          <div>
            <strong>Age:</strong> {formData.age}
          </div>
          <div>
            <strong>Interest:</strong> {formData.interest}
          </div>
          <div>
            <strong>Mobile Number:</strong> {formData.mobile}
          </div>
          <div>
            <strong>Email:</strong> {formData.email}
          </div>
        </div>
      );
 };

export default FormSubmitData;





    