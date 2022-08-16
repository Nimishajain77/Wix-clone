import React from 'react'

const Navbar = () => {
  return (
   <>
      <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WiX</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="dropdown">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Creation
        <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="#">Website Design</a></li>
          <li><a href="#">Website templates</a></li>
          <li><a href="#">Mobile App</a></li>
          <li><a href="#">Advanced Web development</a></li>
          <li><a href="#">EditorX</a></li>
          <li><a href="#">Hire a Professional</a></li>

        </ul>
        </li>
        <li>
        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Buisness
        <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="#">Online Store </a></li>
          <li><a href="#">Online Services</a></li>
          <li><a href="#">Restaurants</a></li>
          <li><a href="#">Blog Website</a></li>
          <li><a href="#">Fitness</a></li>
        </ul>
        </li>
        <li>
        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Growth
        <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="#">Email marketing</a></li>
          <li><a href="#">Social posts</a></li>
          <li><a href="#">Facebook adds</a></li>
          <li><a href="#">Client Management</a></li>
        </ul>
        </li>
        <li><a class="dropdown-toggle" data-toggle="dropdown" href="#">Resources
        <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="#">All tools and features</a></li>
          <li><a href="#">Web design Inspiration</a></li>
          <li><a href="#">Wix Learn</a></li>
          <li><a href="#">Wix Blog</a></li>
        </ul>
      </li>
      <li><a href="/enterprise">Enterprise</a></li>
      <li><a href="/pricing">Pricing</a></li>
      <li><a href="/support">Support</a></li>
    </ul>
  </div>
</nav>
   </>
  )
}

export default Navbar
