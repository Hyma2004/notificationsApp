const Notification = (props) => {
  return(
      const {className,image,message}=props;
      <div className="container">
          <h1 className="heading">Notifications</h1>
          <img className="imgCls" src={image} />
          <p className={className} {message}></p>
      </div>
  );
};
const element = (

    <ul>
      <Notification
        className="message1"
        image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        imgCls="img"
        message="Information Message"
      />
      <Notification
        className="message2"
        image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        imgCls="img"
        message="Success Message"
      />
      <Notification
        className="message3"
        image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        imgCls="img"
        message="Warning Message"
      />
      <Notification
        className="message4"
        image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        imgCls="image"
        message="Error Message"
      />
    </ul>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
