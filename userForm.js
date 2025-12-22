

function userForm(req, res) {
  res.write(`\n
    <form action = "/submit" method = "post">
    <input type="text" placeholder = "enter name" name = "name" >
    <input type="email" placeholder = "enter your email" name="email">
    <button type= 'submit'>Submit </button>
    </form>
    
    `);
    res.end()
}

module.exports = userForm;
