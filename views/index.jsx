var React = require('react');
var DefaultLayout = require('./layout');

function MessageBoard(props) {

  const styleDiv = {
    margin: "5px auto",
    border: "1px solid black",
    borderRadius: "15px",
    width: "40%",
    textAlign: "center"
  }

  const styleHeader = {
    textAlign: "center"
  }
  
  let messages = props.messages.map(message => {
    return <div style={styleDiv} ><h2>{message.text}</h2> <h4>{message.user}</h4> <h5>{message.added.toString()}</h5> </div>
  })

  return (
    <DefaultLayout title={props.title}>
      <h1 style={styleHeader}>Mini Messages Board</h1>
      <h4 style={styleHeader}><a href="./new">New message</a></h4>
      <div>
        {messages}
      </div>
      
    </DefaultLayout>
  );
}

module.exports = MessageBoard;