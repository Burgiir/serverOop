<nav>
    <div>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
        <li><a href="/info">Info</a></li>
        <li style="float: right;"><a href="/support">Support</a></li>
    </div>
</nav>

<slot />

<style>
 div{
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    position: fixed;
    top: 0;
    width: 100%;
    margin-left: -8px;
  }
  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  li {
    float: left;
  }
  li a:hover {
    background-color: #111;
  }
</style>