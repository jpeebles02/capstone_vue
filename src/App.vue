<template>

  <div id="app">
    <div class="topbar hidden-xs hidden-sm">
      <div class="container">
        <ul class="topbar-nav topbar-nav_left">
          <li>
            <a href="#"><i class="fa fa-twitter"></i></a>
             </li>
             <li>
              <a href="#"><i class="fa fa-facebook"></i></a>
            </li>
            <li>
<a href="#"><i class="fa fa-linkedin"></i></a>
</li>
<li>
  <a href="#"><i class="fa fa-vk"></i></a>
</li>
<li>
  <a href="#"><i class="fa fa-stumbleupon"></i></a>
</li>
</ul> 
        <ul class="topbar-nav topbar-nav_right">  
          <li>  
            <!-- Search form -->  
            <form class="form-inline topbar__search" role="form"> 
              <label class="sr-only" for="nav-search">Search</label>  
              <input type="search" class="form-control" id="nav-search" placeholder="Search here..." /> 
              <button type="submit"><i class="fa fa-search"></i></button> 
            </form> 
          </li> 
          <!-- Account links -->  
          <li><a href="/login" v-if="!jwt"> Login</a></li>  
          | 
          <li><a href="/signup" v-if="!jwt">Sign Up</a></li>  
          | 
          <li><a href="/logout" v-if="jwt">Logout</a></li>  
          <li><a href="/userhomepage" v-if="jwt">User Home Page</a></li>  
        </ul> 
      </div>  
      <!-- / .container --> 
    </div>  
    <!-- / .topbar -->  
    <div class="navbar__hr hidden-xs hidden-sm"></div>  
    <div class="navbar navbar-default navbar-static-top" role="navigation"> 
      <div class="container"> 
        <div class="navbar-header"> 
          <!-- Toggle button -->  
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">  
            <span class="sr-only">Toggle navigation</span>  
            <span class="icon-bar"></span>  
            <span class="icon-bar"></span>  
            <span class="icon-bar"></span>  
          </button> 
          <!-- Brand name --> 
          <a class="navbar-brand" href="/">iFit</a>  
        </div>  
        <div class="collapse navbar-collapse">  
          <!-- Navbar links --> 
          <ul class="nav navbar-nav navbar-right">  
            <!-- Profile -->  
            <li class="dropdown"> 
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" v-if="jwt">  
                Profile <span class="fa fa-angle-down"></span>  
              </a>  
              <ul class="dropdown-menu" role="menu">  
                <li><a href="/userhomepage" v-if="jwt">User Profile</a></li>  
              </ul> 
            </li> 
            <!-- schedules -->
            <li class="dropdown"> 
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" v-if="jwt"> 
                Trainers' Schedule <span class="fa fa-angle-down"></span>  
              </a>  
              <ul class="dropdown-menu" role="menu">  
                <li><a href="/schedules" v-if="jwt">Trainers' Schedule</a></li> 
              </ul> 
            </li>
            <!-- map -->
            <li class="dropdown"> 
              <a href="#" class="dropdown-toggle" data-toggle="dropdown"> 
                Local Gyms <span class="fa fa-angle-down"></span>  
              </a>  
              <ul class="dropdown-menu" role="menu">  
                <li><a href="/mappage">Local Gyms</a></li> 
              </ul> 
            </li>

             <!-- Exercise --> 
            <li class="dropdown"> 
              <a href="#" class="dropdown-toggle" data-toggle="dropdown"> 
                Exercises <span class="fa fa-angle-down"></span>  
              </a>  
              <ul class="dropdown-menu" role="menu">  
                <li><a href="/exercises">All Exercises</a></li> 
              </ul> 
            </li> 

             <!-- Routine -->  
            <li class="dropdown"> 
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" v-if="jwt">  
                Routines <span class="fa fa-angle-down"></span> 
              </a>  
              <ul class="dropdown-menu" role="menu">  
                <li><a href="/routines" v-if="jwt">Routines</a></li>  
                <li><a href="routines/new" v-if="jwt">Create a Routine</a></li> 
              </ul> 
            </li> 
          </ul> 
          <!-- Search form (for collapsed menu only) -->  
          <form class="navbar-form navbar-left visible-xs visible-sm" role="search">  
            <div class="form-group">  
              <label class="sr-only" for="nav-search-xs">Search</label> 
              <input type="search" class="form-control" id="nav-search-xs" placeholder="Search here..." />  
            </div>  
          </form> 
        </div>  
        <!-- / .navbar-collapse --> 
      </div>  
      <!-- / .container --> 
    </div>  
    <!-- / .navbar -->  

     <router-view v-on:changeJwt="setJwt()" />  

     <footer> 
      <!-- Footer Top --> 
      <div class="footer_top hidden-xs">  
        <div class="container"> 
          <div class="row"> 
            <!-- Contact Us --> 
            <div class="col-xs-12 col-sm-3">  
              <div class="footer__item">  
                <div class="footer__title">Contact Us</div> 
                <div class="footer__content"> 
                  <p> 
                    Do not hesitate to contact us if you have any questions or feature requests:  
                  </p>  
                
                  <p> 
                    Phone: +1(708)-993-9923<br /> 
                    Fax: +1 356 63 45 23 
                  </p>  
                  <p>Email: <a href="#">iFit@email.com</a></p> 
                </div>  
              </div>  
            </div>  

             <!-- Recent Tweets --> 
            <div class="col-xs-12 col-sm-3">  
              <div class="footer__item">  
                <div class="footer__title"></div>  
                <div class="footer__content"> 
                  <img src="https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="..." />
                </div>  
              </div>  
            </div>  

             <!-- Recent Posts -->  
            <div class="col-xs-12 col-sm-3">  
              <div class="footer__item">  
                <div class="footer__title"></div> 
                <div class="footer__content"> 
                  <img src="https://images.pexels.com/photos/161557/sports-fitness-body-building-iron-161557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="img-responsive" alt="..." />
                </div>  
              </div>  
            </div>  

             <!-- Quick Links --> 
            <div class="col-xs-12 col-sm-3">  
              <div class="footer__item">  
                <div class="footer__title">Quick Links</div>  
                <div class="footer__content"> 
                  <ul class="footer__links">  
                    <li><a href="/exercises">Exercises</a></li> 
                    <li><a href="/routines">Routines</a></li> 
                    <li><a href="/userhomepage">User Home Page</a></li>  
                    <li><a href="/schedules">Trainers Schedule</a></li>  
                    <li><a href="/mappage">Local Gyms</a></li>  
                  </ul> 
                </div>  
              </div>  
            </div>  
          </div>  
          <!-- / .row --> 
        </div>  
        <!-- / .container --> 
      </div>  
      <!-- / .footer_top -->  
      <div class="footer__hr hidden-xs"></div>  

       <!-- Footer Bottom --> 
      <div class="footer_bottom"> 
        <div class="container"> 
          <div class="row"> 
            <div class="col-xs-12 col-sm-6">  
              <div class="footer__copyright"> 
                Copyright 2015 <a href="http://simpleqode.com/">Simpleqode.com</a>. All Rights Reserved.  
              </div>  
            </div>  
            <div class="col-xs-12 col-sm-6">  
              <ul class="footer__social"> 
                <li class="twitter">  
                  <a href="#"><i class="fa fa-twitter"></i></a> 
                </li> 
                <li class="facebook"> 
                  <a href="#"><i class="fa fa-facebook"></i></a>  
                </li> 
                <li class="linkedin"> 
                  <a href="#"><i class="fa fa-linkedin"></i></a>  
                </li> 
                <li class="google-plus">  
                  <a href="#"><i class="fa fa-google-plus"></i></a> 
                </li> 
                <li class="pinterest">  
                  <a href="#"><i class="fa fa-pinterest"></i></a> 
                </li> 
              </ul> 
            </div>  
          </div>  
          <!-- / .row --> 
        </div>  
        <!-- / .container --> 
      </div>  
      <!-- / .footer_bottom --> 
    </footer> 
  </div>
  </template>
  
<script>
/* global setupTheme */
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
export default {
  data: function() {
    return {
      jwt: null
    };
  },
  created: function() {
    this.jwt = localStorage.jwt;
    console.log("My jwt is", this.jwt);
  },
  mounted: function() {
    setupTheme();
  },
  methods: {
    setJwt: function() {
      this.jwt = localStorage.jwt;
    }
  }
};
</script>