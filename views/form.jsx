var React = require('react');
var DefaultLayout = require('./layout');

function Form(props) {

    const styleDiv = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "5px auto",
        width: "40%",
        textAlign: "center"
      }

  return (
    <DefaultLayout title={props.title}>
        <div style={styleDiv}>
            <h2> Enter a new message</h2>
            
            <form style={styleDiv} method="POST" action="/new">
                <label for="name">Authors name:</label>
                <input name="authorText" type="text" id="name" />
                <label for="message">Message:</label>
                <input name="messageText" type="text" id="message" />
                <input style={{marginTop: "5px"}} type="submit" value="Submit" />
            </form>  
            
            <h4><a href="./">Go back</a></h4>

        </div>
        
      
    </DefaultLayout>
  );
}

module.exports = Form;