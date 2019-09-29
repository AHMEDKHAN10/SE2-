
$('#navbar').load('navbar.html');
$('#footer').load('footer.html');

const devices = JSON.parse(localStorage.getItem('devices')) || [];
const users = JSON.parse(localStorage.getItem('users')) || [];


devices.forEach(function(device) {
    $('#devices tbody').append(`
      <tr>
        <td>${device.user}</td>
        <td>${device.name}</td>
      </tr>`
  ); });

  


  $('#control-device').on('click', function() {
    const user = $('#user').val();
    const name = $('#name').val();
    devices.push({ user, name });
    localStorage.setItem('devices', JSON.stringify(devices));
    location.href = '/control';
    });
  
  $('#register').on('click', function() {
    const username = $('#user').val();
    const passwrd = $('#password').val();
    const confirmpasswrd = $('#confirmpassword').val();
    const exists = users.find((user) => {console.log(user.username); return user.username === username});
    if (exists == undefined)
    {
      if(passwrd == confirmpasswrd)
      {
        users.push({ username, passwrd, confirmpasswrd });
        localStorage.setItem('users', JSON.stringify(users));
        location.href = '/login';
      }
      else
      {
        $("#message-warning").text("Passwords do not match! Please Try again");
        $("#message").fadeIn();
      }
    }
    else
    {
      $("#message-warning").text("User Exists!");
      $("#message").fadeIn();
    }
  });
  
  $('#Login-Button').on('click', function() {
    const username = $('#user').val();
    const passwrd = $('#password').val();
    //const exists = users.find(user => user.name === username);
    //const confirmpassword = users.find(user => user.passwrd === passwrd);
    const exists = users.find((user) => {console.log(user.username); return user.username === username});
    const confirmpswd = users.find((user) => {console.log(user.passwrd); return user.passwrd === passwrd});
    if (exists == undefined)
    {
      $("#message-warning").text("User doesn't Exists!");
      $("#message").fadeIn();
    }
    else
    {
      if (confirmpswd == undefined)
      {
        $("#message-warning").text("Password does not match.. Try Again!");
        $("#message").fadeIn();
      }
      else
      {
        localStorage.setItem('isAuthenticated', JSON.stringify(true));
        location.href = '/home';
      }
    }
  });
  $('#fb-login-button').on('click', function(){
    localStorage.setItem('isAuthenticated', JSON.stringify(true));
    location.href = '/home';
  });
  // const logout = () => 
  // {
  //   localStorage.removeItem('isAuthenticated');
  //   location.href = '/';
  // }


  

 


  $('#send-command').on('click', function() {
    const command = $('#command').val();
    console.log(`command is: ${command}`);
  });